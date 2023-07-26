import { useEffect, useState } from "react";
import PageLayout from "../components/layout";
import axios from "axios";
import Auth from "../utilities/auth";
import { useNavigate } from "react-router-dom";

const MyBookings = () => {
  const [myBookings, setMyBookings] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!Auth.loggedIn()) {
      navigate("/signin");
    } else {
      const profile = Auth.getProfile();
      axios
        .get("/payschemas")
        .then((resp) => {
          const bookings = resp.data.payschemas.filter(
            (b) => b.client === profile.data.email
          );
          if (bookings != null || bookings.length != 0) {
            const bookingsWithNo = bookings.reverse().map((obj, index) => ({
              ...obj,
              index,
            }));
            setMyBookings(bookingsWithNo);
          }
        })
        .catch((err) => console.log(err));
    }
  }, []);

  const getStatus = (date) => {
    const dateT = new Date(date);
    const dateN = new Date();

    if (dateT > dateN) {
      return <span className="text-warning">Scheduled</span>;
    } else {
      return <span className="text-success">Complete</span>;
    }
  };

  return (
    <>
      <PageLayout>
        <div className="container">
          <br />
          <h4 className="display-4">My Bookings</h4>
          <hr />
          {myBookings === null || myBookings.length == 0 ? (
            <>
              No Bookings yet. <br /> <br />
            </>
          ) : (
            myBookings.map((booking) => (
              <>
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">
                      {booking.index + 1}.&nbsp;{booking.Package}
                    </h5>
                    <p class="card-text">
                      <strong>For:&nbsp;</strong>
                      {booking.FirstName}&nbsp;{booking.LastName}
                      <br />
                      <strong>Address:&nbsp;</strong>
                      {booking.Address},&nbsp;{booking.City}&nbsp;-&nbsp;
                      {booking.PostCode}
                      <br />
                      <strong>Date:&nbsp;</strong>
                      {booking.Date}
                      <br />
                      <strong>Time:&nbsp;</strong>
                      {booking.Time}
                      <br />
                      <strong>Price:&nbsp;</strong>
                      {booking.Price}
                      <br />
                      <strong>Status:&nbsp;</strong>
                      {booking.status}
                      <br />
                    </p>
                    <p class="card-text">
                      <small class="text-muted">
                        Paid by:&nbsp;{booking.cardHolderName}
                      </small>
                      <br />
                      <small class="text-muted">
                        Card Used:&nbsp;{booking.cardNumber.substring(0, 4)}
                        ************
                      </small>
                    </p>
                  </div>
                </div>
                <br />
              </>
            ))
          )}
        </div>
      </PageLayout>
    </>
  );
};

export default MyBookings;

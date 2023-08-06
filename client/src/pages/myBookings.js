import { useEffect, useState } from "react";
import PageLayout from "../components/layout";
import axios from "axios";
import Auth from "../utilities/auth";
import { useNavigate } from "react-router-dom";
import { Rating } from "react-simple-star-rating";

const MyBookings = () => {
  const [myBookings, setMyBookings] = useState([]);
  const [reviewOn, setReviewOn] = useState([]);
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

            let r = [];
            for (let i = 0; i < bookingsWithNo.length; i++) {
              let st = 0;
              if (
                bookingsWithNo[i].status == "Completed" &&
                bookingsWithNo[i].review.rating == -1
              ) {
                st = 1;
              } else if (
                bookingsWithNo[i].status == "Completed" &&
                bookingsWithNo[i].review.rating != -1
              ) {
                st = 2;
              }
              r.push(st);
            }

            setReviewOn(r);
          }
        })
        .catch((err) => console.log(err));
    }
  }, []);

  const handleRating = (rate, index) => {
    const updatedBookings = [...myBookings];
    updatedBookings[index].review.rating = rate;
    setMyBookings(updatedBookings);
  };

  const submitReview = (e, index) => {
    e.preventDefault();

    const review = { ...myBookings[index].review };
    review.comments = e.target.comments.value;

    console.log(review);

    // call api
    fetch("/review/" + myBookings[index]._id, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ review: review }),
    })
      .then((resp) => resp.json())
      .then((j) => {
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <PageLayout>
        <div className="container">
          <br />
          <h1>My Bookings</h1>
          <br />
          {myBookings === null || myBookings.length == 0 ? (
            <>
              No Bookings yet. <br /> <br />
            </>
          ) : (
            myBookings.map((booking, index) => (
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
                    <button
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target="#reviewModal"
                      className={
                        reviewOn[index] != 0
                          ? "btn btn-primary"
                          : "btn btn-primary d-none"
                      }
                      disabled={reviewOn[index] == 2}
                    >
                      {reviewOn[index] == 1
                        ? "Leave a review!"
                        : "Review Submitted"}
                    </button>
                    <div
                      className="modal fade text-start"
                      id="reviewModal"
                      tabIndex="-1"
                      role="dialog"
                      aria-labelledby="reviewModalLabel"
                      aria-hidden="true"
                    >
                      <div className="modal-dialog modal-dialog-centered modal-xl">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h1
                              className="modal-title fs-5"
                              id="reviewModalLabel"
                            >
                              Review Us
                            </h1>
                            <button
                              type="button"
                              className="btn-close"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            ></button>
                          </div>
                          <div className="modal-body">
                            <form
                              id="reviewForm"
                              onSubmit={(e) => submitReview(e, index)}
                            >
                              <div className="mb-3">
                                <label className="mb-1 ms-1" htmlFor="rating">
                                  Rate us (out of 5)
                                </label>
                                <br />
                                <Rating
                                  onClick={(rate) => handleRating(rate, index)}
                                />
                              </div>
                              <div className="mb-3">
                                <label className="mb-1 ms-1" htmlFor="comments">
                                  Comments
                                </label>
                                <textarea
                                  name="comments"
                                  className="form-control"
                                  id="comments"
                                />
                              </div>
                            </form>
                          </div>
                          <div className="modal-footer">
                            <button
                              id="reviewFormSubmit"
                              form="reviewForm"
                              type="submit"
                              className="btn btn-primary"
                            >
                              Submit
                            </button>
                            <button
                              type="button"
                              className="btn btn-secondary"
                              data-bs-dismiss="modal"
                            >
                              Close
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
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

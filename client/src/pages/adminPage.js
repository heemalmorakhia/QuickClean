import React, { useEffect, useState } from "react";
import PageLayout from "../components/layout";
import { Rating } from "react-simple-star-rating";

function AdminPage() {
  const [allBookings, setAllBookings] = useState([]);
  const bookingTypes = ["New", "Confirmed", "In-Progress", "Completed"];
  const buttonNames = ["Confirm", "Start", "Complete"];

  const fetchData = async () => {
    try {
      const response = await fetch("/payschemas");
      const data = await response.json();

      let bookings = [];
      bookings.push([
        ...data.payschemas.filter((b) => b.status == "Confirmation Pending"),
      ]);
      bookings.push([
        ...data.payschemas.filter((b) => b.status == "Confirmed"),
      ]);
      bookings.push([
        ...data.payschemas.filter((b) => b.status == "In-Progress"),
      ]);
      bookings.push([
        ...data.payschemas.filter((b) => b.status == "Completed"),
      ]);

      setAllBookings(bookings);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleUpdatePayment = async (id, updatedData) => {
    try {
      const response = await fetch(`/payment/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedData),
      });

      if (!response.ok) {
        console.error("Error updating payment:", response.statusText);
        return;
      }

      const updatedPayment = await response.json();
      console.log(
        "Payment updated successfully:",
        updatedPayment.payment.status
      );

      fetchData();
    } catch (error) {
      console.error("Error updating payment:", error);
    }
  };

  return (
    <PageLayout>
      <div className="container">
        <br />
        <h1>Admin Dashboard</h1>
        <br />
        {bookingTypes.map((type, index) => {
          return (
            <div>
              <h4>{type} Bookings</h4>
              <table className="table table-hover m-2">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Date</th>
                    <th scope="col">Time</th>
                    <th scope="col">Package</th>
                    <th scope="col">Current Status</th>
                    {index != 3 ? (
                      <th scope="col">Actions</th>
                    ) : (
                      <th scope="col">Review</th>
                    )}
                  </tr>
                </thead>
                <tbody>
                  {allBookings[index] == undefined ||
                  allBookings[index].length == 0 ? (
                    <p className="ms-3">
                      <br />
                      No {type} bookings.
                    </p>
                  ) : (
                    allBookings[index].map((b, idx) => (
                      <tr key={b._id}>
                        <th scope="row">{idx + 1}</th>
                        <td>{b.FirstName + " " + b.LastName}</td>
                        <td>{b.Email}</td>
                        <td>{b.Phone}</td>
                        <td>{b.Date}</td>
                        <td>{b.Time}</td>
                        <td>{b.Package}</td>
                        <td>{b.status}</td>
                        {index != 3 ? (
                          <td>
                            <button
                              className="btn btn-primary btn-sm p-1"
                              onClick={() =>
                                handleUpdatePayment(b._id, {
                                  status: bookingTypes[index + 1],
                                })
                              }
                            >
                              {buttonNames[index]}
                            </button>
                          </td>
                        ) : b.review.rating == -1 ? (
                          <td>Not submitted</td>
                        ) : (
                          <td>
                            <button
                              className="btn btn-primary btn-sm p-1"
                              data-bs-toggle="modal"
                              data-bs-target="#reviewModal"
                            >
                              See Review
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
                                      Review
                                    </h1>
                                    <button
                                      type="button"
                                      className="btn-close"
                                      data-bs-dismiss="modal"
                                      aria-label="Close"
                                    ></button>
                                  </div>
                                  <div className="modal-body">
                                    <label
                                      className="mb-1 ms-1 fw-bold"
                                      htmlFor="rating"
                                    >
                                      Rating (out of 5)
                                    </label>
                                    <br />
                                    <Rating
                                      initialValue={b.review.rating}
                                      readonly
                                    />
                                    <br />
                                    <label
                                      className="mb-1 ms-1 fw-bold"
                                      htmlFor="rating"
                                    >
                                      Comments
                                    </label>
                                    <br />
                                    <textarea
                                      name="comments"
                                      className="form-control"
                                      id="comments"
                                      value={b.review.comments}
                                      disabled
                                    />
                                  </div>
                                  <div className="modal-footer">
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
                          </td>
                        )}
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
              <br />
              <br />
            </div>
          );
        })}
      </div>
    </PageLayout>
  );
}

export default AdminPage;

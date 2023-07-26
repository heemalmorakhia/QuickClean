import React, { useEffect, useState } from "react";
import PageLayout from "../components/layout";

function AdminPage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://a3-grp25-backend.onrender.com/payschemas"
        );
        const data = await response.json();
        setData(data.payschemas);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleUpdatePayment = async (id, updatedData) => {
    try {
      const response = await fetch(
        `https://a3-grp25-backend.onrender.com/payment/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedData),
        }
      );

      if (!response.ok) {
        console.error("Error updating payment:", response.statusText);
        return;
      }

      const updatedPayment = await response.json();
      console.log(
        "Payment updated successfully:",
        updatedPayment.payment.status
      );
    } catch (error) {
      console.error("Error updating payment:", error);
    }
  };

  return (
    <PageLayout>
      <div>
        <div className="mt-5 pt-5 mb-5 pb-5 text-center">
          <h1>Admin Page</h1>
        </div>
        <div className="d-flex justify-content-center">
          <div className="vh-100 mt-5 pt-5">
            <table className="tableAdmin text-center">
              <thead>
                <tr>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Package</th>
                  <th>Date</th>
                  <th>Time</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item) => (
                  <tr key={item._id}>
                    <td>{item.FirstName}</td>
                    <td>{item.LastName}</td>
                    <td>{item.Email}</td>
                    <td>{item.Phone}</td>
                    <td>{item.Package}</td>
                    <td>{item.Date}</td>
                    <td>{item.Time}</td>
                    <td className="button-group">
                      <button
                        className="btnOne"
                        onClick={() =>
                          handleUpdatePayment(item._id, { status: "Accepted" })
                        }
                      >
                        Accepted
                      </button>
                      <button
                        className="btnTwo"
                        onClick={() =>
                          handleUpdatePayment(item._id, {
                            status: "In Progress",
                          })
                        }
                      >
                        In Progress
                      </button>
                      <button
                        className="btnThree"
                        onClick={() =>
                          handleUpdatePayment(item._id, { status: "Completed" })
                        }
                      >
                        Completed
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

export default AdminPage;

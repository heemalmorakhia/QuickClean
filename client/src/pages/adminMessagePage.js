import React, { useEffect, useState } from "react";
import PageLayout from "../components/layout";

function AdminMessage() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/getContactApi");
        const data = await response.json();
        setMessages(data.payschemas);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <PageLayout>
      <div className="container">
        <br />
        <h1>Messages</h1>
        <br />
        {messages.map((message) => (
          <>
            <div key={message._id} class="card">
              <div class="card-body">
                <p className="card-text">
                  <strong>Name:&nbsp;</strong>
                  {message.name}
                  <br />
                  <strong>Email:&nbsp;</strong>
                  {message.email}
                  <br />
                  <strong>Phone:&nbsp;</strong>
                  {message.phone}
                  <br />
                  <strong>Comment:&nbsp;</strong>
                  {message.comment}
                </p>
              </div>
            </div>
            <br />
          </>
        ))}
      </div>
    </PageLayout>
  );
}

export default AdminMessage;

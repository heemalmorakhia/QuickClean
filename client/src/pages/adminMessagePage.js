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
            <div className="vh-100">
                <div className="mt-5 mb-5 pt-5  pb-5 text-center">
                    <h4>Messages</h4>
                </div>
                {messages.map((message) => (
                    <div key={message._id} className="card w-50 mt-5 pt-5 mx-auto">
                        <div className="card-body">
                            <h5 className="card-title">Name: {message.name}</h5>
                            <h5 className="card-title">Email: {message.email}</h5>
                            <h5 className="card-title">Phone: {message.phone}</h5>
                            <p className="card-text">Comment: {message.comment}</p>
                        </div>
                    </div>
                ))}
            </div>
        </PageLayout>
    );
}

export default AdminMessage;
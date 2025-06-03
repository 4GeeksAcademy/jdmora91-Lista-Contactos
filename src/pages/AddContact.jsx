import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddContact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newContact = {
            name: name,
            email: email,
            phone: phone,
            address: address,
        };

        try {
            const response = await fetch("https://playground.4geeks.com/contact/agendas/jdmora/contacts", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newContact)
            });

            if (response.ok) {
                alert("✅ Contact added successfully");
                navigate("/"); // Redirect to Home.jsx
            } else {
                alert("❌ Error adding contact");
            }
        } catch (error) {
            console.error("API connection error:", error);
            alert("❌ Network error saving contact");
        }
    };

    return (
        <div className="container mt-5 text-center">
            <h1
                className="text-center text-light fw-bold display-5 shadow py-3 mb-4 border-dark border-3 rounded-3 bg-primary"
                style={{
                    color: "darkslategray",
                    textShadow: "1px 1px 2px rgba(255, 255, 255, 0.2)"
                }}
            >
                Add New Contact
            </h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-2 text-start">
                    <label htmlFor="name" className="form-label"><strong>Full Name</strong></label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Enter Full Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="mb-3 text-start">
                    <label htmlFor="email" className="form-label"><strong>Email Address</strong></label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Enter Email Address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="mb-3 text-start">
                    <label htmlFor="phone" className="form-label"><strong>Phone</strong></label>
                    <input
                        type="text"
                        className="form-control"
                        id="phone"
                        placeholder="Enter Phone Number"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                </div>
                <div className="mb-3 text-start">
                    <label htmlFor="address" className="form-label"><strong>Address</strong></label>
                    <input
                        type="text"
                        className="form-control"
                        id="address"
                        placeholder="Enter Address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    />
                </div>

                <button type="submit" className="btn btn-primary">Add Contact</button>
            </form>
        </div>
    );
}

export default AddContact;

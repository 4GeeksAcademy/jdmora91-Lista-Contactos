import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const EditContact = () => {
	const { id } = useParams();
	const navigate = useNavigate();

	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [address, setAddress] = useState("");

	// Fetch contact details
	useEffect(() => {
		const getContact = async () => {
			try {
				const res = await fetch(`https://playground.4geeks.com/contact/agendas/jdmora/contacts/${id}`);
				const data = await res.json();
				setName(data.name);
				setEmail(data.email);
				setPhone(data.phone);
				setAddress(data.address);
			} catch (error) {
				console.error("Error fetching contact:", error);
			}
		};
		getContact();
	}, [id]);

	// Handle update
	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await fetch(`https://playground.4geeks.com/contact/agendas/jdmora/contacts/${id}`, {
				method: "PUT",
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify({
					name,
					email,
					phone,
					address,
					agenda_slug: "jdmora"
				})
			});

			if (response.ok) {
				alert("✅ Contact updated successfully");
				navigate("/");
			} else {
				alert("❌ Failed to update contact");
			}
		} catch (error) {
			console.error("Network error:", error);
		}
	};

	return (
		<div className="container mt-5">
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
				<div className="mb-3">
					<label className="form-label">Full Name</label>
					<input
						type="text"
						className="form-control"
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
				</div>
				<div className="mb-3">
					<label className="form-label">Email</label>
					<input
						type="email"
						className="form-control"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>
				<div className="mb-3">
					<label className="form-label">Phone</label>
					<input
						type="text"
						className="form-control"
						value={phone}
						onChange={(e) => setPhone(e.target.value)}
					/>
				</div>
				<div className="mb-3">
					<label className="form-label">Address</label>
					<input
						type="text"
						className="form-control"
						value={address}
						onChange={(e) => setAddress(e.target.value)}
					/>
				</div>
				<div className="text-end">
					<button type="submit" className="btn btn-primary">Update</button>
				</div>
			</form>
		</div>
	);
};

export default EditContact;

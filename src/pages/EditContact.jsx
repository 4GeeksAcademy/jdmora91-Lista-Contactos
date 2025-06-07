import React, { useState, useEffect } from "react";
import { useParams, useNavigate, json } from "react-router-dom";

const EditContact = () => {
	const { id } = useParams();
	const navigate = useNavigate();

	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [address, setAddress] = useState("");
	const [mensaje, setMensaje] = useState("");

	// Fetch contact details
	useEffect(() => {
		const getContact = async () => {
			try {
				const res = await fetch(`https://playground.4geeks.com/contact/agendas/jdmora`);
				const json = await res.json();
				console.log("todos los contactos", json)



				const contacto = json.contacts.find(c => c.id == id);
				console.log("contacto")

				if (contacto) {
					setName(contacto.name);
					setEmail(contacto.email);
					setPhone(contacto.phone);
					setAddress(contacto.address);
				} else {
					Alert("contacto No encontrado")
				}
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
					navigate("/Confirmacion");
					setMensaje("✅ Contacto actualizado correctamente");
			} else {
				setMensaje("❌ Error al actualizar el contacto");
				setTimeout(() => setMensaje(""), 3000);
			}

			} catch (error) {

				console.error("Error:", error);
				setMensaje("❌ Error de red");
				setTimeout(() => setMensaje(""), 3000);
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
					Edit Contact
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
								{mensaje && (
			<div className="alert alert-info text-center fw-bold" role="alert">
				{mensaje}
			</div>
		)}
				</form>
			</div>
		);
	};

	export default EditContact;

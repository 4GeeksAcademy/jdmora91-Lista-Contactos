import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const DeleteContact = () => {
	const { id } = useParams();
	const navigate = useNavigate();
	const [contact, setContact] = useState(null);

	// Obtener datos del contacto (opcional, solo para mostrar nombre)
	useEffect(() => {
		const fetchContact = async () => {
			try {
				const res = await fetch(`https://playground.4geeks.com/contact/agendas/jdmora/contacts/${id}`);
				const data = await res.json();
				setContact(data);
			} catch (err) {
				console.error("Error fetching contact:", err);
			}
		};
		fetchContact();
	}, [id]);

	// Confirmar eliminación
	const handleDelete = async () => {
		try {
			const res = await fetch(`https://playground.4geeks.com/contact/agendas/jdmora/contacts/${id}`, {
				method: "DELETE"
			});
			if (res.ok) {
				alert("🗑️ Contact successfully deleted");
				navigate("/");
			} else {
				alert("❌ Failed to delete contact");
			}
		} catch (err) {
			console.error("Delete error:", err);
		}
	};

	return (
		<div className="container mt-5 text-center">
			<h2 className="mb-4">Are you sure you want to delete this contact?</h2>
			{contact && (
				<p>
					<strong>{contact.name}</strong>
				</p>
			)}
			<div className="d-flex justify-content-center gap-3">
				<button className="btn btn-danger" onClick={handleDelete}>Yes, Delete</button>
				<button className="btn btn-secondary" onClick={() => navigate("/")}>Cancel</button>
			</div>
		</div>
	);
};

export default DeleteContact;

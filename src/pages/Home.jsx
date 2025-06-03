import React, { useEffect, useState } from "react";
import { FaTrash, FaEdit, FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";


export const Home = () => {
	const [contacts, setContacts] = useState([]);

	// Obtener contactos al cargar
	useEffect(() => {
		fetch("https://playground.4geeks.com/contact/agendas/jdmora/contacts")
			.then((response) => response.json())
			.then((data) => {
				console.log("data", data);
				setContacts(data.contacts); // Usa la estructura que viene de la API
			})
			.catch((error) => console.error(error));
	}, []);

	return (
		<div className="container mt-5 bg-primary p-4 rounded shadow">
			  <h1
                className="text-center text-light fw-bold display-5 shadow py-3 mb-4 border-dark border-3 rounded-3 bg-primary"
                style={{
                    color: "darkslategray",
                    textShadow: "1px 1px 2px rgba(255, 255, 255, 0.2)"
                }}
            >
                Contact List
            </h1>

			{contacts.map((contacto) => (
				<div key={contacto.id} className="card mb-1 bg-light shadow">
					<div className="row g-0 align-items-center">
						{/* Imagen */}

						<div className="col-md-1 text-center">
							<img
								src="https://plus.unsplash.com/premium_photo-1664304299664-a8e2e2f80290?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
								className="img-fluid rounded-circle m-2"
								alt="Avatar"
							/>

						</div>

						{/* Información del contacto */}
						<div className="col-md-8">
							<div className="card-body ">
								<h5 className="card-title">{contacto.name}</h5>
								<p className="card-text mb-1">
									<FaMapMarkerAlt className="me-2 text-secondary" />
									{contacto.address}
								</p>
								<p className="card-text mb-1">
									<FaPhone className="me-2 text-secondary" />
									{contacto.phone}
								</p>
								<p className="card-text">
									<FaEnvelope className="me-2 text-secondary" />
									{contacto.email}
								</p>
							</div>
						</div>

						{/* Botones de acción */}
						<div className="col-md-2 text-end pe-1">
							<Link to={`/edit/${contacto.id}`} className="btn btn-link text-dark">
								<FaEdit />
							</Link>
							<Link to={`/delete/${contacto.id}`} className="btn btn-link text-danger">
								<FaTrash />
							</Link>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};
import { Link } from "react-router-dom";
import { FaHome, FaPlus } from "react-icons/fa";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-success" style={{ background: "linear-gradient(90deg, #1e3c72, #2a5298)" }}>
			<div className="container">
				<Link to="/" className="navbar-brand fw-bold text-white">
					CONTACT BOOK
				</Link>
				<div className="d-flex ms-auto gap-2">
					<Link to="/" className="btn btn-outline-light d-flex align-items-center gap-2">
						<FaHome /> Home
					</Link>
					<Link to="/AddContact" className="btn btn-light d-flex align-items-center gap-2">
						<FaPlus /> Add Contact
					</Link>
				</div>
			</div>
		</nav>
	);
};

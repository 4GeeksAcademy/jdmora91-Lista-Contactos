import React from 'react';
import { FaReact, FaGithub, FaLinkedin } from 'react-icons/fa';


export const Footer = () => {
return (
		<footer className="bg-dark text-light py-4 mt-5">
			<div className="container text-center">
				<p className="mb-1">
					Made with <FaReact className="text-info" /> by <strong>jdmora91</strong>
				</p>
				<div className="d-flex justify-content-center gap-3">
					<a href="https://github.com/Jdmora91" target="_blank" rel="noopener noreferrer" className="text-light">
						<FaGithub size={24} />
					</a>
					<a href="https://www.linkedin.com/in/jose-donis-mora-ramirez-870284321/" target="_blank" rel="noopener noreferrer" className="text-light">
						<FaLinkedin size={24} />
					</a>
				</div>
				<p className="mt-2 mb-0 small text-muted">© {new Date().getFullYear()} Contact List App</p>
			</div>
		</footer>
	);
}
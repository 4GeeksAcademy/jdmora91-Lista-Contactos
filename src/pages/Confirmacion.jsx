import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Confirmacion = () => {

    // aqui pongo el tiempo de la page antes de redireccionar
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate("/");
        }, 2000);


        return () => clearTimeout(timer);
    }, [navigate]);


    return (
        <div className="d-flex flex-column min-vh-100 bg-light mt-6">
        <div className="container text-center">

            <h1 className="text-success fw-bold mb-3 mt-5">✅ Contacto actualizado con éxito</h1>
          
        </div>
            </div>

    );

};


export default Confirmacion;
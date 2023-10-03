import { useEffect } from "react";
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

const Verify = () => {

    const navigate = useNavigate();


    const verifyAccount = async () => {
        // obtener el codigo de verificacion de la url
        const url = new URL(window.location.href);
        const code = url.searchParams.get("code");
        
        try {
            // enviar el codigo de verificacion al backend
            const response = await axios.get(`http://localhost:8080/auth/verify/${code}`);
    
            // si el codigo es correcto, redirigir al login
            navigate("/login")
        } catch (error) {
            console.log(error);
            navigate("/")
        }
    }

    useEffect( () => {
        verifyAccount();
    }, [])
    
    return (
        <div>
        <h1>Verify your email</h1>
        </div>
    );
};

export default Verify;
import React, { useState } from 'react';
import axios from 'axios';
import NavBar from '../layouts/NavBar';
import Swal from 'sweetalert2';

const Donations = () => {
    const [linkPago, setLinkPago] = useState("");

    const handleClick = async () => {
        try {
            const response = await axios.post("http://localhost:8080/payment/create-order10");
            const linkPago = response.data.init_point;
            setLinkPago(linkPago);

            Swal.fire({
                title: 'Confirm Donation',
                text: 'Do you want to continue with the donation?',
                icon: 'question',
                showCancelButton: true,
                confirmButtonText: 'Yes',
                cancelButtonText: 'No',
            }).then((result) => {
                if (result.isConfirmed) {
                    window.location.href = linkPago;
                }
            });
        } catch (error) {
            console.error("Error al obtener el enlace de pago:", error);
        }
    };

    return (
        <>
            <NavBar/>
            <div className='w-full h-screen flex flex-col items-center' style={{ backgroundImage: `url("./img/fondoDonations")`}}>
                <h1 className=' text-7xl text-center mt-40 font-bold text-orange-600'>Your contribution helps us to continue improving and creating!!</h1>
                <div className='flex w-full h-screen gap-2 justify-around items-center'>
                    <button onClick={handleClick} className="w-1/4 flex items-center justify-center bg-white text-orange-600 font-bold gap-4 p-2 rounded">Donate $1.000</button>
                    <button className="w-1/4 flex items-center justify-center bg-white text-orange-600 font-bold gap-4 p-2 rounded">Donate $5.000</button>
                    <button className="w-1/4 flex items-center justify-center bg-white text-orange-600 font-bold gap-4 p-2 rounded"> Donate $10.000</button>
                </div>
            </div>
        </>
    )
}

export default Donations;


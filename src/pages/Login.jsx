import React, { useRef, useState } from 'react'
import NavBar from '../layouts/NavBar'
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import axios from "axios";
import saveAuthors from '../redux/actions/me_authors';
import Alert from '../components/Alert.jsx';


const Login = () => {
    const email = useRef()
    const password = useRef()
    const [alert, setAlert]= useState([])
    const [show, setShow]= useState(false)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    
    async function enviarData() {
        const data = {
            email: email.current.value,
            password: password.current.value,
        }
        try {
            
            const credenciales = await axios.post("http://localhost:8080/auth/signin", data)
            let token = credenciales.data.response
            dispatch(saveAuthors(token)),
            localStorage.setItem('token',credenciales.data.response.token)
            localStorage.setItem('user',credenciales.data.response.user.email)

            navigate("/")

        } catch (error) {
            setShow(!show)
            setAlert([error.response.data.message])
            console.log(error)
        }

    }

    return (
        <>
            {show && <Alert setShow={setShow} show={show} alert={alert}/>}
            <NavBar />
            <div className='w-full h-screen flex'>
                <div className=' w-1/2 h-screen bg-cover' style={{ backgroundImage: "url('./img/img-login.png')" }}>

                </div>
                <div className='flex jus w-1/2 h-screen flex-col'>
                    <div className='flex w-full justify-end'>

                    </div>
                    <div className='flex flex-col justify-center items-center mt-40 gap-2'>
                        <div className='flex items-center'>
                            <p className=' text-3xl font-bold text-orange-500 '>Minga</p>
                            <img className='w-8 h-8' src="public/img/雪.png" alt="" />
                        </div>
                        <div className='flex items-center gap-2'>
                            <p className='text-3xl font-bold text-black'>Welcome</p>
                            <p className='text-3xl font-bold text-orange-500'>back!</p>
                        </div>
                        <p className='text-center w-1/2'>Discover manga, manhua and manhwa, track your progress, have fun, read manga.</p>
                    </div>
                    <div className='flex flex-col h-20 w-full justify-center items-center mt-8'>
                        <span>Email</span>
                        <input ref={email} type="email" name="email" id="email" className="h-10 w-1/2 p-2 bg-white border shadow-sm placeholder-slate-400 rounded-md " placeholder="you@example.com" />
                    </div>
                    <div className='flex flex-col h-20 w-full justify-center items-center mt-4'>
                        <span>Password</span>
                        <input ref={password} type="password" name="password" id="password" className="h-10 w-1/2 p-2 bg-white border shadow-sm placeholder-slate-400 rounded-md " placeholder="Hola123456" />
                    </div>
                    <div className='flex justify-center'>
                        <button onClick={() => { enviarData() }} className='w-1/2 h-10 rounded-md text-white  bg-gradient-to-t from-orange-500 to-orange-600 ' >Sign In</button>
                    </div>
                    <div className='flex justify-center'>
                        <div className='flex justify-center items-center w-1/2 h-10 mt-2 bg-white border shadow-sm placeholder-slate-400 rounded-md'>
                            <button className=' flex '><img className='w-6 h-6' src="./img/Google.png" alt="" /> Sign in with Google</button>
                        </div>
                    </div>
                    <div className='flex justify-center gap-1 pt-2'>
                        <span className='text-stone-900 text-sm font-medium'>you don't have an account yet?  </span>
                        <Link to={"/register"} className=' text-orange-600 text-sm font-bold cursor-pointer'> Sign up</Link>
                    </div>
                    <div className='flex justify-center gap-1 pt-2'>
                        <span className='text-stone-900 text-sm font-medium '>Go back to  </span>
                        <Link to={"/"} className='text-orange-600 text-sm font-bold cursor-pointer'> home page</Link>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Login
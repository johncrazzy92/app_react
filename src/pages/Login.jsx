import { useRef, useState } from 'react'
import NavBar from '../layouts/NavBar'
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import axios from "axios";
import saveAuthors from '../redux/actions/me_authors';
import Alert from '../components/componentesMangas/Alert.jsx';
import { GoogleLogin } from '@react-oauth/google';
import Swal from 'sweetalert2';


const Login = () => {
  const email = useRef()
  const password = useRef()
  const [alert, setAlert] = useState([])
  const [show, setShow] = useState(false)
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
        localStorage.setItem('token', credenciales.data.response.token)
      localStorage.setItem('user', credenciales.data.response.user.email)

      navigate("/")

    } catch (error) {
      setShow(!show)
      setAlert([error.response.data.message])
      console.log(error)
    }

  }

  const handleLogin = async (googleData) => {
    
    const data = {
      token: googleData.credential,
    };
  
    try {
      const res = await axios.post('http://localhost:8080/auth/google-signin', data);
      let token = res.data.response;
      dispatch(saveAuthors(token));
      localStorage.setItem('token', res.data.response.token);
      localStorage.setItem('user', res.data.response.user.email);
      navigate("/");
  
      if (res.data.response.user.created) {
        // Mostrar una alerta de registro exitoso si el usuario se acaba de crear
        Swal.fire({
          icon: 'success',
          title: 'Registrado con éxito',
          text: '¡Tu cuenta ha sido creada y has iniciado sesión con éxito!',
        });
      } else {
        // Mostrar una alerta de inicio de sesión exitoso si el usuario ya existía
        Swal.fire({
          icon: 'success',
          title: 'Inicio de sesión correcto',
          text: '¡Has iniciado sesión con éxito!',
        });
      }
    } catch (error) {
      setShow(!show);
      setAlert([error.response.data.message]);
      console.log(error);
  
      // Mostrar una alerta de error
      Swal.fire({
        icon: 'error',
        title: 'Error al iniciar sesión con Google',
        text: 'Ha ocurrido un error al iniciar sesión con Google.',
      });
    }
  };

  const handleFailure = (result) => {
    alert(result);
  };

  return (
    <>
      {show && <Alert setShow={setShow} show={show} alert={alert} />}
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
              <img className='w-8 h-8' src="public/img/logoSimple.png" alt="" />
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
              <GoogleLogin
                buttonText="Log in with Google"
                onSuccess={handleLogin}
                onFailure={handleFailure}
                cookiePolicy={'single_host_origin'}
              ></GoogleLogin>
            </div>
          </div>
          <div className='flex justify-center gap-1 pt-2'>
            <span className='text-stone-900 text-sm font-medium'>you dont have an account yet?  </span>
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
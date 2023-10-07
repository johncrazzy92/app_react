import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import NavBar from '../layouts/NavBar';
import Footer from './Footer';
import Alert from './componentesMangas/Alert';
import { GoogleLogin } from '@react-oauth/google';
import { useDispatch } from 'react-redux';
import saveAuthors from '../redux/actions/me_authors';
import Swal from 'sweetalert2';

const Register = () => {
  const [email, setEmail] = useState('');
  const [photo, setPhoto] = useState('');
  const [password, setPassword] = useState('');
  const [sendNotification, setSendNotification] = useState(false);
  const [alert, setAlert] = useState([]);
  const [show, setShow] = useState(false);
  const dispatch = useDispatch(); // Si usas Redux, asegúrate de tener el store configurado

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleUrlChange = (e) => {
    setPhoto(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSendNotificationChange = (e) => {
    setSendNotification(e.target.checked);
  };

  const handleSignUpClick = async () => {
    const data = {
      email,
      password,
      photo
    };

    try {
      setShow(!show);
      const response = await axios.post('https://backendminga.onrender.com/auth/register', data);
      setAlert([response.data.message]);

      console.log('Solicitud exitosa:', response);
    } catch (error) {
      console.error('Error al enviar la solicitud:', error);
      setAlert([error.response.data.message]);
    }
  };

  const handleLoginWithGoogle = async (googleData) => {
    const data = {
      token: googleData.credential,
    };

    try {
      const res = await axios.post('https://backendminga.onrender.com/auth/google-signin', data);
      let token = res.data.response;
      dispatch(saveAuthors(token));
      localStorage.setItem('token', res.data.response.token);
      localStorage.setItem('user', res.data.response.user.email);

      if (res.data.response.user.created) {
        Swal.fire({
          icon: 'success',
          title: 'Registrado con éxito',
          text: '¡Tu cuenta ha sido creada y has iniciado sesión con éxito!',
        });
      } else {
        Swal.fire({
          icon: 'success',
          title: 'Inicio de sesión correcto',
          text: '¡Has iniciado sesión con éxito!',
        });
      }
    } catch (error) {
      setShow(!show);
      setAlert([error.response.data.message]);

      Swal.fire({
        icon: 'error',
        title: "Oops it seems you don't have an account",
        text: 'if you just created one check your email',
      });
    }
  };

  const handleLoginFailure = (error) => {
    console.error('Error al iniciar sesión con Google:', error);

    Swal.fire({
      icon: 'error',
      title: 'Error al iniciar sesión con Google',
      text: 'Ha ocurrido un error al iniciar sesión con Google.',
    });
  };

  return (
    <>
      {show && <Alert alert={alert} setShow={setShow} show={show} />}
      <NavBar />
      <div className='flex min-h-screen'>
        <div className='w-full lg:w-1/2'>
          <div className='flex flex-col p-20 lg:p-40 justify-center items-center'>
            <img src="public/img/Logo Dos.png" alt="" />
            <h1>Welcome!</h1>
            <p>Discover manga, manhua and manhwa, track your progress, have fun, read manga.</p>
            <input
              type="email"
              className=''
              placeholder='DragonballZ@Krowl.com'
              value={email}
              onChange={handleEmailChange}
            />
            <input
              type="url"
              className=''
              placeholder='Url'
              value={photo}
              onChange={handleUrlChange}
            />
            <input
              type="password"
              className=''
              placeholder='●●●●●●●●●●●●●'
              value={password}
              onChange={handlePasswordChange}
            />
            <div className='flex'>
              <input
                type="checkbox"
                className=''
                checked={sendNotification}
                onChange={handleSendNotificationChange}
              />
              <p>Send notification to my mail</p>
            </div>
            <button onClick={handleSignUpClick}>Sign up</button>
            <p>Already have an account? <Link to={``}>Log in</Link></p>
            <div className='mt-4'>
              <GoogleLogin
                buttonText="Sign up with Google"
                onSuccess={handleLoginWithGoogle}
                onFailure={handleLoginFailure} // Utiliza handleLoginFailure aquí
                cookiePolicy={'single_host_origin'}
              />
            </div>
            <p>Go back to <Link to={`/`}>home page</Link></p>
          </div>
        </div>
        <div className='w-1/2 bg-no-repeat bg-cover hidden lg:block' style={{ backgroundImage: "url('public/img/bg-register.png')" }}></div>
      </div>
      <Footer />
    </>
  )
}

export default Register;

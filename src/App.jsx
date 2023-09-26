import './App.css'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { RouterProvider } from "react-router-dom";
import signinToken from './redux/actions/signinToken.js'
import router from "./router/router.jsx";

export default function App() {
  const dispatch = useDispatch()



  useEffect(() => {
    const token = localStorage.getItem('token')

    dispatch(signinToken(token))
  }, [])
  return (
    <RouterProvider router={router} />
  )
}
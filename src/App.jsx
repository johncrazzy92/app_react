import './App.css'
import Home from './pages/Home'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import signinToken from './redux/actions/signinToken.js'
import router from "./router/router.jsx";
import { RouterProvider } from "react-router-dom";

export default function App() {
  const dispatch = useDispatch()
  
  
  useEffect(()=>{
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImlnbmFAbWguY29tLmFyIiwiaWF0IjoxNjk1MTc4OTkzLCJleHAiOjE2OTUyNjUzOTN9.00NYH_KuqRQxDlhDr1FunHLH7NJmV17wNKQvaAq6NyI"
    dispatch(signinToken(token))
  },[])
  return (
    <RouterProvider router={router} />
  )
}
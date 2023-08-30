import  menuhamburguesa  from "../../public/img/Menu.png";
import  logomenu  from "../../public/img/Logo Dos.png";
import { useState } from "react";
import Display from "../components/Display";


function NavBar() {
  const [open, setOpen] = useState(false)
  const displayMenu = ()=>{
    setOpen(!open)
  }
  return (
    <>
    <nav className='w-100 flex m-5 justify-between lg:m-10 lg:flex'>
        <img src={menuhamburguesa} alt="hamburguesa" onClick={displayMenu} className="cursor-pointer" />
        <img src={logomenu} alt="Logo minga" />
    </nav>
      
       <Display close = {open} switchMenu ={displayMenu}/>
      
    </>
  )
}

export default NavBar
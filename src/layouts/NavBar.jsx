import  menuhamburguesa  from "../../public/img/Menu.png";
import  logomenu  from "../../public/img/Logo Dos.png";


function NavBar() {
  return (
    <nav className='w-100 flex justify-between sm:hidden lg:flex'>
        <img src={menuhamburguesa} alt="hamburguesa" className="cursor-pointer" />
        <img src={logomenu} alt="Logo minga" />
      </nav>
  )
}

export default NavBar
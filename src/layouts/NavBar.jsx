import menuhamburguesa from "../../public/img/Menu.png";
import logoSimple from "../../public/img/雪.png";
import { useState } from "react";
import Display from "../components/Display";

function NavBar() {
  const [open, setOpen] = useState(false);
  const displayMenu = () => {
    setOpen(!open);
  };
  return (
    <>
      <nav className="w-100 flex m-5 justify-between lg:m-10 lg:flex">
        <img
          src={menuhamburguesa}
          alt="hamburguesa"
          onClick={displayMenu}
          className="cursor-pointer"
        />
        <div className="flex items-center">
          <p className="lg:flex items-center hidden text-orange-600 text-4xl">
            Minga
          </p>
          <img className=" w-10  h-10" src={logoSimple} alt="minga logo" />
        </div>
      </nav>

      <Display close={open} switchMenu={displayMenu} />
    </>
  );
}

export default NavBar;

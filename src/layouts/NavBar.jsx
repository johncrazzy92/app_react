import menuhamburguesa from "../../public/img/Menu.png";
import { useState } from "react";
import Display from "../components/Display";
import logoSimple from "../../public/img/logoSimple.png";

function NavBar() {
  const [open, setOpen] = useState(false);
  const displayMenu = () => {
    setOpen(!open);
  };
  return (
    <>
      <nav className="w-full flex p-4 justify-between absolute lg:p-10 lg:flex">
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
          <img
            className="h-10 object-contain"
            src={logoSimple}
            alt="logo minga"
          />
        </div>
      </nav>

      <Display close={open} switchMenu={displayMenu} />
    </>
  );
}

export default NavBar;

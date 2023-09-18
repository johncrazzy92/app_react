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
      <nav className="w-11/12 absolute flex p-5 justify-between lg:p-5 lg:flex">
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
          <p className="flex items-center  text-black text-5xl">雪</p>
        </div>
      </nav>

      <Display close={open} switchMenu={displayMenu} />
    </>
  );
}

export default NavBar;

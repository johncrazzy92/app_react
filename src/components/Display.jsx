import PropTypes from "prop-types";
import cross from "../../public/img/filled.svg";
import { Link } from "react-router-dom";

function Display({ close, switchMenu }) {
   return (
      <>
         <div
            className={`lg:w-3/12 w-full bg-gradient-to-t from-orange-500 to-orange-600 h-screen  flex-col absolute top-0 left-0 ${close ? "block" : "hidden"
               } z-30 gap-5 px-4 py-5`}
         >
            <div className="flex justify-between text-white ">
               <p className="cursor-pointer">Account</p>
               <img
                  className="cursor-pointer"
                  onClick={switchMenu}
                  src={cross}
                  alt="close menu"
               />
            </div>

            <div className=" text-white flex flex-col text-center gap-3 p-5">
               <Link
                  className="py-3 rounded hover:bg-white hover:text-orange-600"
                  to={"/author/me"}
               >
                  Profile
               </Link>
               <Link
                  className="py-3 rounded hover:bg-white hover:text-orange-600"
                  to={"/"}
               >
                  Home
               </Link>
               <Link
                  className="py-3 rounded hover:bg-white hover:text-orange-600"
                  to={"/mangas/1"}
               >
                  Mangas
               </Link>
               <Link to={"/register"}
                  className="py-3 rounded hover:bg-white hover:text-orange-600">
                  Register
               </Link>
               <a
                  className="py-3 rounded hover:bg-white hover:text-orange-600"
                  href=""
               >
                  Sign in
               </a>
            </div>
         </div>
      </>
   );
}
Display.propTypes = {
   close: PropTypes.bool.isRequired,
   switchMenu: PropTypes.func.isRequired,
};
export default Display;

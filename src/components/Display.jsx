import PropTypes from "prop-types";
import cross from "../../public/img/filled.svg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";
import axios from "axios";
import { useDispatch } from "react-redux";
import logoutUser from "../redux/actions/logout";

function Display({ close, switchMenu }) {
  const { user, token } = useSelector((store) => store.me_authorsReducer);
  const dispatch = useDispatch();
  
  const signout = async () => {
    const headers = {
      headers: { Authorization: `Bearer ${token}` },
    };

    try {
      await axios.post("http://localhost:8080/auth/signout", null, headers);
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      dispatch(logoutUser());
    } catch (error) {
      console.error("Error al cerrar la sesión:", error.response);
    }
  };


  return (
    <>
      <div
        className={`lg:w-3/12 w-full bg-gradient-to-t from-orange-500 to-orange-600 h-screen  flex-col absolute top-0 left-0 ${close ? "block" : "hidden"
          } z-30 gap-5 px-4 py-5`}>
        <div className="flex justify-between text-white">
          <p className="cursor-pointer">Account</p>
          <img
            className="cursor-pointer"
            onClick={switchMenu}
            src={cross}
            alt="close menu"
          />
        </div>
        <div className=" text-white flex flex-col text-center gap-3 p-5">
          {user ? (
            <>
              <img src={user.photo} alt="" />
              <p>{user.email}</p>
              <Link onClick={signout} to={"/"} className="py-3 rounded hover:bg-white hover:text-orange-600">Sign out</Link>
              <Link
                className="py-3 rounded hover:bg-white hover:text-orange-600"
                to={"/author/me"}>
                Profile
              </Link>  
              {(user.role === 1 || user.role === 2 || user.role === 3) && (
                <Link
                  className="py-3 rounded hover:bg-white hover:text-orange-600"
                  to={
                    user.role === 1 || user.role === 2 ? "/manga-form" : "/NotAllow"
                  }>
                  New Manga
                </Link>
              )} 
              {(user.role === 1 || user.role === 2 || user.role === 3) && (
                <Link
                  className="py-3 rounded hover:bg-white hover:text-orange-600"
                  to={
                    user.role === 1 || user.role === 2 ? "/manga_id/chapther-form" : "/NotAllow"
                  }>
                  New Chapter
                </Link>
              )} 
              {(user.role === 1 || user.role === 2 || user.role === 3) && (
                <Link
                    className="py-3 rounded hover:bg-white hover:text-orange-600"
                    to={
                      user.role === 1 || user.role === 2 ? "/edit/:manga_id" : "/NotAllow"
                    }>
                    Edit Chapter
                  </Link>
              )} 
            </>) : (
            <>
              <Link
                to={"/register"}
                className="py-3 rounded hover:bg-white hover:text-orange-600">
                Register
              </Link>
              <Link
                to={"/login"}
                className="py-3 rounded hover:bg-white hover:text-orange-600"
                href="">
                Sign in
              </Link>
              <Link
                className="py-3 rounded hover:bg-white hover:text-orange-600"
                to={"/"}>
                Home
              </Link>
            </>
          )}
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
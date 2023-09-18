import Footer from "../components/Footer";
import NavBar from "../layouts/NavBar";
import { Outlet } from "react-router-dom";

const LayoutProfileMe = () => {
  return (
    <>
      <NavBar />
      <div className="w-full  flex flex-col lg:justify-center gap-1 lg:p-0 lg:gap-1 h-screen">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default LayoutProfileMe;

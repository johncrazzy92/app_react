import Footer from "../components/Footer";
import NavBar from "../layouts/NavBar";
import { Outlet } from "react-router-dom";

const LayoutProfileMe = () => {
  return (
    <>
      <div className="w-full  flex flex-col lg:justify-between gap-1 lg:p-0 lg:gap-1 h-screen">
        <NavBar />
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default LayoutProfileMe;

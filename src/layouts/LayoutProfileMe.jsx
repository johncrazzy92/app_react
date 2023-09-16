import Footer from "../components/Footer";
import NavBar from "../layouts/NavBar";
import { Outlet } from "react-router-dom";

const LayoutProfileMe = () => {
  return (
    <>
        <NavBar />
      <div className="w-full pt-28 flex flex-col lg:justify-between gap-1 lg:pt-28 lg:gap-1 h-screen">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default LayoutProfileMe;

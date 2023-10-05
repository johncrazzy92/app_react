
import background from "../../public/img/Background.png";
import Footer from "../components/Footer";
import Swal from "sweetalert2";
import NavBar from "../layouts/NavBar";
import Welcome from "./Welcome";
import Carousel from "./Carousel";

const LayoutHome = () => {
    Swal.fire({
        title: 'Thank You!',
        text: 'Thank you for your donation.',
        icon: 'success',
    });
  return (
    <>
      <div
        className="w-full bg-cover bg-left flex flex-col justify-start lg:justify-between  lg:gap-16 h-screen"
        style={{ backgroundImage: `url(${background})` }}
      >
        <NavBar />
        <Welcome />
        <Carousel/>
      </div>
      <Footer />
    </>
  );
};

export default LayoutHome;

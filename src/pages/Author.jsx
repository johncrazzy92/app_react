import Footer from "../components/Footer";
import NavBar from "../layouts/NavBar";
import UbicationIcon from "../components/ubicationIcon";

const Author = () => {
  return (
    <>
      <div className="w-full  flex flex-col justify-start lg:justify-between  lg:p-0 lg:gap-16 h-screen">
        <NavBar />
        <div className="w-full flex justify-center items-center">
          <img src="" alt="" />
          <div className="text-gray-500">
            <h1 className="text-black text-lg font-medium">
              Lucas Ezequiel Silva
            </h1>
            <div>
              <UbicationIcon />
              <p>Caseros Buenos Aires</p>
            </div>
            <p>16/02/2000</p>
          </div>
          <hr className="my-12 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-100" />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Author;

import flechacarousel from "../../public/img/Vector (Stroke).svg";
import namiimagen from "../../public/img/283918815cce51edfc3bd01e534298c8-removebg-preview 1.png";
import onepiecemanga from "../../public/img/image 2.png";


const Carousel = () => {
  return (
    <div className="p-14 flex-col w-full h-1/3  hidden  lg:flex ">
      <div className="w-100 flex bg-gradient-to-t from-orange-500 to-orange-600  justify-between items-center p-8">
        <img
          src={flechacarousel}
          className="-rotate-180 p-2 rounded-full bg-red-200 cursor-pointer z-10"
          alt="NavIzquierda"
        />
        <div className="absolute flex gap-14">
          <img src={namiimagen} alt="Nami Imagen" className="relative" />
          <img src={onepiecemanga} alt="One Piece imagen" className="h-64 hidden xl:block" />
        </div>
        <div className="flex w-4/5 flex-row-reverse h-48 items-center ">
          <div className="flex w-3/6 flex-col">
            <h2 className="text-left text-lg font-bold inline-flex gap-10 text-white">
              Shonen
            </h2>
            <p className="text-left text-white leading-2">
              Is the manga that is aimed at adolescent boys. They are series
              with large amounts of action, in which humorous situations often
              occur. The camaraderie between members of a collective or a combat
              team stands out.
            </p>
          </div>
        </div>
        <img
          src={flechacarousel}
          className="p-2 rounded-full bg-red-200 cursor-pointer"
          alt="NavDerecha"
        />
      </div>
    </div>
  );
}

export default Carousel
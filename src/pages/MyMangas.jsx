import { useState, useEffect } from "react";
//import axios from "axios";
import NavBar from "../layouts/NavBar";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import NewManga from "../components/NewManga";
import EditModal from "../components/EditModal";
import AlertDelete from "../components/componentesMangas/AlertDelete.jsx";
import Alert from "../components/componentesMangas/Alert2";
import { useDispatch, useSelector } from "react-redux";
import actions from "../redux/actions/mangas.js";
const { mymangas } = actions;


const MyMangas = () => {
  const dispatch = useDispatch();
  //  const [mangas, setMangas] = useState([]);
  const [manga, setManga] = useState({});
  const [isOpen, setIsOpen] = useState(false)
  // const [noElements, setNoElements] = useState(false);
  const [alert, setAlert] = useState("");
  const [showDelete, setShowDelete] = useState(false);
  const [show, setShow] = useState(false);
  const token = localStorage.getItem("token");
  let mangasList = useSelector(store => store.myMangasReducer?.mangas)
  console.log(mangasList.mangas)

  useEffect(() => {
    dispatch(mymangas());
    /* axios
      .get(`http://localhost:8080/mangas/me`, {
        headers: { authorization: `Bearer ${token}` },
      })
      .then((res) => {
        if (res.data.mangas.length === 0) {
          setNoElements(true);
        } else {
          setNoElements(false);

        }
        setMangas(res.data.mangas);
        console.log(res)
      })
      .catch((err) => console.log(err)); */

  }, [token, dispatch]);

  return (
    <>
      {show && <Alert setShow={setShow} show={show} alert={alert} />}
      <img className="absolute max-h-[35vh] w-full object-cover rounded-b-2xl" src="public/img/image 15.jpg" alt="" />
      <NavBar />
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-4xl md:text-6xl py-28 z-30 text-white font-bold">My mangas</h1>
        <div className="flex min-h-[80vh] flex-wrap justify-center items-center">
          <NewManga />

          {(!mangasList || mangasList.length === 0) ? (<div>nO HAY MANGAS</div>) : (
            mangasList.map((manga) => (
              <div
                className="bg-white relative w-[290px] h-[160px] lg:w-[420px] lg:h-[210px] m-3 flex justify-between items-center rounded-lg drop-shadow-md"
                key={manga._id}
              >
                <div
                  className="h-5/6 w-2"
                  style={{ background: manga.category_id.color }}
                ></div>
                <div className="flex flex-col">
                  <div className="flex absolute top-0 left-4 gap-4">
                    <Link to={"/chapter-form/"+ manga._id} className="cursor-pointer">➕</Link>
                    <Link to={"/edit/" + manga._id} className="cursor-pointer">✏️</Link>
                  </div>
                  <div className="text-sm lg:text-xl font-bold absolute top-8 left-6">
                    {manga.title}
                  </div>
                  <div
                    className="text-sm lg:text-md font-semibold absolute top-14 left-6"
                    style={{ color: manga.category_id.color }}
                  >
                    {manga.category_id.name}
                  </div>
                  <div className="flex gap-2 absolute bottom-4 left-6">
                    <button onClick={() => {
                      setIsOpen(!isOpen)
                      setManga(manga)
                    }} className="bg-emerald-500 h-7 lg:h-8 w-20 rounded-lg ">
                      edit
                    </button>
                    <button onClick={() => {
                      setShowDelete(true)
                      setManga(manga)
                    }} className="bg-red-500 h-7 lg:h-8 w-20 rounded-lg ">
                      delete
                    </button>

                  </div>

                </div>
                <div className="w-1/3">
                  <img
                    className="h-[160px] lg:h-[210px]  object-cover rounded-l-full"
                    src={manga.cover_photo}
                    alt=""
                  />
                </div>
              </div>
            ))
          )}
        </div>
      </div>
      <Footer />
      {isOpen && <EditModal
        setShow={setShow}
        setAlert={setAlert}
        alert={alert}
        manga={manga}
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        token={token}
      />}
      {showDelete && <AlertDelete setShowDelete={setShowDelete} showDelete={showDelete} show={show} setShow={setShow} token={token} manga={manga} alert={alert} setAlert={setAlert} />}


    </>
  );
};

export default MyMangas;
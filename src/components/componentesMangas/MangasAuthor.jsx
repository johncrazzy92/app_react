import { useState, useEffect } from "react";
import axios from "axios";
import MangasSwitch from "./MangasSwitch";
import MangasAll from "./MangasAll";
import LogoMinga from "../../../public/img/Logo Dos.png";
import { useDispatch } from 'react-redux';
import setMangasNews from "../../redux/actions/mangas_news";
import { Link } from "react-router-dom";

const MangasAuthor = ({ profileId }) => {
  const dispatch = useDispatch()
  const [mangas_New, setMangas_New] = useState({});
  useEffect(() => {
    axios
      .get(`http://localhost:8080/mangas/new/${profileId}`)
      .then((res) => {
        setMangas_New(res.data);
        dispatch(setMangasNews(res.data))
        console.log(res.data)
      })
      .catch((err) => {
        console.log(err);
      });
  }, [profileId]);

  return (
    <>
      <div className="h-full lg:h-3/6">
        {mangas_New.news ? (
          <MangasSwitch mangas_New={mangas_New} />
        ) : mangas_New.all ? (
          <MangasAll mangas_New={mangas_New} />
        ) : null}

        <div
          className={` gap-5 h-full py-10 lg:py-0 flex-wrap ${mangas_New.quantity ? "flex" : "hidden"
            }
          items-center justify-center lg:justify-around lg:items-center `}
        >
          <hr className="my-3 h-0.5 border-t-0 mx-5 bg-black " />
          <div className="flex justify-center w-full flex-col">
            <img
              className="w-64 md:w-1/3 self-center opacity-70"
              src={LogoMinga}
              alt="insufficient quantity of volumes"
            />
            <p className="text-center opacity-70 md:text-2xl">
              insufficient quantity of volumes
            </p>
          </div>
        </div>
      </div>
      <div className="w-full p-5 flex justify-center">
        <Link to="/mymangas" className="bg-orange-500 text-white rounded-xl h-7 flex justify-center items-center font-light text-sm w-2/4 sm:w-1/5 lg:w-1/5 cursor-pointer ">
          Manage!
        </Link>
      </div>
    </>
  );
};

export default MangasAuthor;

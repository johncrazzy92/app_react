import { useEffect, useState } from "react";
import PageComments from "../components/PageComment";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import flechaManga from "../../public/img/FlechaManga.svg";
import NavBar from "../layouts/NavBar";
import Footer from "../components/Footer";
import { useSelector, useDispatch } from 'react-redux';
import { saveChapter } from '../redux/actions/chapters';

const Page = () => {
  const APIurl = "https://backendminga.onrender.com";
  const [chapter, setChapter] = useState(null);
  const [next, setNext] = useState("");
  const { id, page } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const { title, number } = useSelector((store) => store.chapter);
  console.log(title)
  console.log(number)
  console.log(dispatch)

  useEffect(() => {
    axios
      .get(APIurl + `/chapters/${id}`)
      .then((res) => {

        setChapter(res.data.all);
        console.log(res);
        setNext(res.data.next);
        dispatch(saveChapter(res.data.all))
      })
      .catch((err) => console.log(err));
  }, [id]);
  console.log(chapter);
  console.log(next);
  const handleNext = () => {
    if (Number(page) >= chapter.pages.length - 1) {
      navigate(`/chapterPage/${next}/${1}`);
    } else {
      navigate(`/chapterPage/${id}/${Number(page) + 1}`);
    }
  };

  const handlePrev = () => {
    if (Number(page) <= 1) {
      navigate(`/manga/${chapter.manga_id}`);
    } else {
      navigate(`/chapterPage/${id}/${Number(page) - 1} `);
    }
  };

  return (
    <>
      <NavBar />
      <div className="w-full">
        <div className="w-full h-28 bg-gradient-to-t from-orange-500 to-orange-600 text-center flex flex-col justify-center items-center">
          <p className="text-white text-xs">N : {Number(number)}</p>
          <p className="text-white text-xs"> {title}</p>
        </div>
        <div className="w-full  mt-5 flex items-center justify-center">
          <div onClick={handlePrev} className="w-1/2">
            <img
              className=" cursor-pointer absolute left-5 bg-white rounded-full p-2 opacity-50"
              src={flechaManga}
              alt=""
            />
          </div>
          <img
            className=" md-w-10/12 h-full"
            src={chapter?.pages[Number(page) - 1]}
            alt=""
          />
          <div onClick={handleNext} className="w-1/2">
            <img
              className="cursor-pointer rotate-180 absolute right-5 bg-white rounded-full p-2 opacity-50"
              src={flechaManga}
              alt=""
            />
          </div>
        </div>
        <PageComments />
      </div>
      <Footer />
    </>
  );
};

export default Page;

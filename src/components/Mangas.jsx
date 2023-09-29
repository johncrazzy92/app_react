import { useState, useEffect } from 'react';
import { useNavigate, Link, useParams } from 'react-router-dom';
import axios from 'axios';
import NavBar from '../layouts/NavBar';
import Footer from './Footer';
import { useDispatch, useSelector } from 'react-redux';
import { filters } from "../redux/actions/mangasActions.js";

const Mangas = () => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  //const [text, setText] = useState("");
  //const [check, setCheck] = useState([]);
  const [mangas, setMangas] = useState([]);
  const [prev, setPrev] = useState();
  const [next, setNext] = useState();
  const { page } = useParams();
  const [pageActual, setPageActual] = useState(Number(page));
  const [noElements, setNoElements] = useState(false);
  const [noElementsMessage, setNoElementsMessage] = useState("");

  const { check, text } = useSelector((store) => store.mangas)
  const dispatch = useDispatch()

  const arrayCategories = () => (check ? check.toString() : "");

  const getMangas = () => {
    axios(`http://localhost:8080/mangas/?page=${page}&title=${text}&category=${arrayCategories()}`)
      .then((res) => {
        if (res.data.mangas.length === 0) {
          setNoElements(true);
          setNoElementsMessage("No se encontraron mangas");
        } else {
          setNoElements(false);
        }
        setMangas(res.data.mangas);
        setPageActual(res.data.page);
        setPrev(res.data.prev);
        setNext(res.data.next);
      })
      .catch((err) => console.log(err));
  };

  const getCategories = () =>
    axios(`http://localhost:8080/categories`)
      .then((res) => {
        setCategories(res.data.response);
        console.log(res.data);
      })
      .catch((err) => console.log(err));

  const applyFilters = (filterName, filterValue) => {
    if (filterName === 'text') {
      //setText(filterValue);
      dispatch(filters({
        checks: null,
        text: filterValue
      }))
    } else if (filterName === 'check') {
      if (!check.includes(filterValue)) {
        //setCheck([...check, filterValue]);
        dispatch(filters({
          checks: [...check, filterValue],
          text: null
        }))
      } else {
        //setCheck(check.filter((category_id) => category_id !== filterValue));
        dispatch(filters({
          checks: check.filter((category_id) => category_id !== filterValue),
          text: null
        }))
      }
    }
    navigate(`/mangas/${1}`); // Actualiza la URL
  };

  useEffect(() => {
    getMangas();
    getCategories();
  }, [page, text, check]);

  const handleNext = () => {
    if (next) {
      const nextPage = pageActual + 1;
      navigate(`/mangas/${nextPage}`);
    }
  };

  const handlePrev = () => {
    if (prev) {
      const prevPage = pageActual - 1;
      navigate(`/mangas/${prevPage}`);
    }
  };

  return (
    <>
      <img className='absolute max-h-[35vh] sm:max-h-[40vh] md:max-h-[45vh] w-full object-cover rounded-b-2xl' src='../../public/img/bg-mangas.png' alt='' />
      <NavBar />
      <div className='flex flex-col justify-center items-center w-screen'>
        <div className="z-20 w-8/12">
          <h1 className='pt-20 text-white text-6xl text-center'>Mangas</h1>
          <input onInput={(e) => applyFilters('text', e.target.value)} className='rounded h-12 p-4 w-11/12 mt-8 lg:mt-24 ' type="text" placeholder=' Find your manga here' />
        </div>
        <div className='flex items-center justify-center z-20 '>
          {categories?.map((category) => (
            <button
              onClick={() => applyFilters('check', category._id)}
              key={category._id}
              className='rounded p-1 m-1 mb-2 '
              style={{ backgroundColor: category.color }}
            >{category.name}</button>
          ))}
        </div>
      </div>
      <div className="w-full min-h-[47vh] justify-center items-center flex flex-wrap gap-10">
        {noElements ? (
          <div>{noElementsMessage}</div>) : (
          mangas?.map((manga) => (
            <div className='"bg-white relative w-[290px] h-[160px]  m-3 flex justify-between items-center rounded-lg drop-shadow-md' key={manga._id}>
              <div className='h-5/6 w-2' style={{ background: manga.category_id.color }}></div>
              <div className='flex flex-col gap-2'>
                <div className=''>
                  <div className='w-36 text-neutral-800 text-base font-medium leading-none ml-1' >{manga.title}</div>
                  <div className='w-36 text-base font-normal leading-none ml-1 mb-3' style={{ color: manga.category_id.color }} >{manga.category_id.name}</div>
                </div>
                <div >
                  <Link to={`/manga/${manga._id}`} className='p-2 cursor-pointer bg-emerald-500 rounded-lg'>Read</Link>
                </div>
              </div>
              <div className="w-1/3">
                <img className='h-[160px]   object-cover rounded-l-full' src={manga.cover_photo} alt="" />
              </div>
            </div>
          ))
        )}
      </div>
      <div className='flex gap-3 justify-center mt-3'>
        <button className="p-1 bg-orange-500 rounded" disabled={!prev} onClick={handlePrev}>Prev</button>
        <button className='p-1 bg-orange-500 rounded' disabled={!next} onClick={handleNext}>Next</button>
      </div>
      <Footer />
    </>
  );
};

export default Mangas;

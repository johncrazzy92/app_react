import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import NavBar from '../layouts/NavBar';
import Footer from './Footer';

const Mangas = () => {

    const navigate = useNavigate();
    const [categories, setCategories] = useState([]);
    const [text, setText] = useState("")
    const [check, setCheck] = useState([])
    const [mangas, setMangas] = useState([]);
    const [prev, setPrev] = useState();
    const [next, setNext] = useState();
    const { page } = useParams();
    const [pageActual, setPageActual] = useState(Number(page));
    const [noElements, setNoElements] = useState(false);
    const [noElementsMessage, setNoElementsMessage] = useState("");
    const arrayCategories = () => check ? check.toString() : ""

    const getMangas = () => axios(`http://localhost:8080/mangas/?page=${page}&title=${text}&category=${arrayCategories()}`)
        .then(res => {
            if (res.data.mangas.length === 0) {
                setNoElements(true);
                setNoElementsMessage("No se encontraron mangas");
            } else {
                setNoElements(false);
            }
            console.log(res)
            setMangas(res.data.mangas)
            setPageActual(res.data.page)
            setPrev(res.data.prev)
            setNext(res.data.next)
            console.log(mangas)
        })
        .catch(err => console.log(err))

    const getCategories = () => axios(`http://localhost:8080/categories`)
        .then(res => {
            setCategories(res.data)
            console.log(res.data)
        })
        .catch(err => console.log(err))

    function checked(id) {
        console.log(id, check)
        if (!check.includes(id)) {
            setearCheck([...check, id])

        } else {
            setearCheck(check.filter(category_id => category_id !== id))
        }

    }

    useEffect(() => {
        getMangas()
        getCategories()
    }, [page, text, check])


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
    function setearCheck(id) {
        setCheck(id)
        navigate(`/mangas/${1}`)
    }
    function setearTexto(value) {
        setText(value)
        navigate(`/mangas/${1}`)
    }
    return (
        <>
            <div className='w-full h-96 items-center justify-center bg-top flex flex-col' style={{ backgroundImage: "url('../../public/img/bg-mangas.png')"}}>
            <NavBar />
                <h1 className='text-white text-6xl'>Mangas</h1>
                <input onInput={(e) => setearTexto(e.target.value)} className='rounded h-12 p-4 w-11/12 lg:w-42 mt-8 lg:mt-24 ' type="text" placeholder=' Find your manga here' />
            </div>
            <div className='flex items-center justify-center '>


                {categories.map((category) => (
                    <button
                        onClick={() => checked(category._id)}
                        key={category._id} // Agrega un key único aquí
                        className='rounded p-1 m-1 mb-2 '
                        style={{ backgroundColor: category.color }}
                    >
                        {category.name}
                    </button>
                ))}
            </div>
            <div className="flex flex-wrap items-center justify-center gap-10">
                {noElements ? (
                    <div>{noElementsMessage}</div>) : (
                    mangas.map((manga) => (
                        <div className='w-72 bg-gray-200 justify-between md:w-80 lg:w-96 h-36 lg:h-48 flex' key={manga._id}>
                            <div>
                                <div>
                                    <div>{manga.title}</div>
                                    <div >Type</div>
                                </div>
                                <div >
                                    <div>Read</div>
                                </div>
                            </div>
                            <img className='' src={manga.cover_photo} alt="" />
                        </div>
                    ))
                )}
            </div>
            <div className='flex gap-3'>
                <button disabled={!prev} onClick={handlePrev}>Prev</button>
                <button disabled={!next} onClick={handleNext}>Next</button>
            </div>
            <Footer />
        </>
    );
}

export default Mangas;
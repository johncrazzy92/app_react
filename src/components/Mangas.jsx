import { useState, useEffect } from 'react';
import { useNavigate, Link, useParams } from 'react-router-dom';
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

    const getMangas = () => {
        axios(`http://localhost:8080/mangas/?page=${page}&title=${text}&category=${arrayCategories()}`)
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
            })
            .catch(err => console.log(err))
    }
    console.log(mangas)

    const getCategories = () => axios(`http://localhost:8080/categories`)
        .then(res => {
            setCategories(res.data.response)
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
            const nextPage = pageActual + 1
            navigate(`/mangas/${nextPage}`)
        }
    }

    const handlePrev = () => {
        if (prev) {
            const prevPage = pageActual - 1
            navigate(`/mangas/${prevPage}`)
        }
    }
    function setearCheck(id) {
        setCheck(id)
        navigate(`/mangas/${1}`)
    }
    function setearTexto(value) {
        setText(value)
        navigate(`/mangas/${1}`)
    }
    console.log(categories)
    return (
        <>
            <NavBar />
            <div className='w-full h-96 items-center justify-center bg-top flex flex-col' style={{ backgroundImage: "url('../../public/img/bg-mangas.png')" }}>
                <h1 className='text-white text-6xl'>Mangas</h1>
                <input onInput={(e) => setearTexto(e.target.value)} className='rounded h-12 p-4 w-11/12 mt-8 lg:mt-24 ' type="text" placeholder=' Find your manga here' />
            </div>
            <div className='flex items-center justify-center '>


                {categories?.map((category) => (
                    <button
                        onClick={() => checked(category._id)}
                        key={category._id} // Agrega un key único aquí
                        className='rounded p-1 m-1 mb-2 '
                        style={{ backgroundColor: category.color }}
                    >{category.name}</button>
                ))}
            </div>
            <div className="w-full min-h-[47vh] justify-center items-center flex flex-wrap gap-10">
                {noElements ? (
                    <div>{noElementsMessage}</div>) : (
                    mangas?.map((manga) => (
                        <div className='w-72 md:w-80 lg:w-96 h-36 md:h-40 lg:h-44 bg-gray-200 flex justify-between rounded-2xl ' key={manga._id}>
                            <div className='w-3 h-4/5 p-1' style={{ background: manga.category_id.color }}></div>
                            <div>
                                <div>
                                    <div className='w-36 text-neutral-800 text-base font-medium leading-none ml-1' >{manga.title}</div>
                                    <div className='w-36 text-base font-normal leading-none ml-1 mb-3' style={{ color: manga.category_id.color }} >{manga.category_id.name}</div>
                                </div>
                                <div >
                                    <Link to={`/manga/${manga._id}`} className='p-1 ml-2 bg-emerald-500 rounded-lg'>Read</Link>
                                </div>
                            </div>
                            <img className='w-2/5  object-cover rounded-l-full gap-3 ' src={manga.cover_photo} alt="" />
                        </div>
                    ))
                )}
            </div>
            <div className='flex gap-3 justify-center mt-3'>
                <button className='p-1 bg-orange-500 rounded' disabled={!prev} onClick={handlePrev}>Prev</button>
                <button className='p-1 bg-orange-500 rounded' disabled={!next} onClick={handleNext}>Next</button>
            </div>
            <Footer />
        </>
    )
}

export default Mangas;
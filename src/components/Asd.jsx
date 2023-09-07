import React, { useEffect, useState } from 'react'
import axios from 'axios'
import routerProvider from 'react'
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import img from '../../public/image/search.png'


function Mangas() {
  let [mangas, setMangas] = useState([])
  let [categories, setCategories] = useState([]);
  let [text, setText] = useState("")
  let [check, setCheck] = useState([])
  let [count, setCount] = useState(0)
  console.log(check)
  let { page } = useParams();

  const arrayCategories = () => check ? check.toString() : ""
  async function getMangas() {
    try {
      let { data } = await axios.get(`http://localhost:8000/mangas?title=${text}&category=${arrayCategories()}&page=${page}`)
      setMangas(data.mangas);
      setCount(data.count)
    } catch (error) {
      console.log(error.mesagge)
    }
  }


  async function getCategories() {
    try {
      let { data } = await axios.get('http://localhost:8000/categories')
      setCategories(data)
      console.log(data)

    } catch (error) {
      console.log(error.mesagge)

    }
  }
  function checkeados(id) {
    console.log(id)
    if (!check.includes(id)) {
      setCheck([...check, id])

    } else {
      setCheck(check.filter(category_id => category_id !== id))
    }

  }


  useEffect(() => {
    getMangas()
    getCategories()
  }, [text, check, page]);

  return (
    <>
      <header className='w-full h-96 items-center justify-center object-cover' style={{ backgroundImage: "url('./image/fondomangas.png')", objectFit: "contain" }}>
        <h2 className='p-5 m-10 mt-24 text-center text-white text-4xl font-semibold md:font-bold md:text-6xl '>MANGAS</h2>
        <div className=' w-full h-16 flex items-center justify-center p-4 '>
          <input onInput={(e) => setText(e.target.value)} className='rounded p-4 w-42 h-12 md:w-3/4 mt-24 ' type="text" placeholder=' Find your manga here' />
        </div>
      </header>
      <main className='w-full min-h-screen bg-no-repeat bg-cover flex justify-around' style={{ backgroundImage: "url('./image/backgroundMain.png')" }}>
        <div>
         


          <div className='flex items-center justify-center '>
            {categories.map((category) => (
              <button
                onClick={() => checkeados(category._id)}
                key={category._id} // Agrega un key único aquí
                className='bg-white rounded p-3 m-1 mb-2 '
                style={{ backgroundColor: category.color }}
              >
                {category.name}
              </button>
            ))}
          </div>





          <div className='text-withe gap-4 w-full h-2/3  flex flex-col md:flex-row '>

            {mangas.map((manga, index) => (

              <div key={index} className='bg-white gap-4 m-5 flex items-center  md:w-1/2 md:h-96'>
                <h2 className='font-bold text-3xl'> {manga.title}</h2>


                <div className=' '>
                  <img className='w-72 h-72 rounded-full gap-3' src={manga.cover_photo} alt={manga.title} />
                </div>

              </div>
            ))}

          </div>
        </div>
      </main>
      <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">

        <div className=" sm:flex sm:flex-1 sm:items-center sm:justify-between">
          <div>
            <p className="text-sm flex justify-around gap-4 text-gray-700">
              Showing in {count} results
            </p>
          </div>

          <div>
            <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
              <Link to={`/mangas/${Math.max(1, parseInt(page) - 1)}`} className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
                <span className="sr-only">Previous</span>
                <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clipRule="evenodd" />
                </svg>
              </Link>

              <Link to={`/mangas/1`} className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">1</Link>
              <Link to={`/mangas/2`} className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">2</Link>
              <Link to={`/mangas/3`} className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">3</Link>
              <Link to={`/mangas/4`} className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">4</Link>


              <Link to={`/mangas/${Math.min(4, parseInt(page) + 1)}`} className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
                <span className="sr-only">Next</span>
                <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                </svg>
              </Link>
            </nav>
          </div>
        </div>
      </div>

    </>
  );
}

export default Mangas;



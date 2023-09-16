import { useEffect, useState } from 'react';
import NavBar from '../layouts/NavBar';
import axios from 'axios';
import {Link, useParams} from "react-router-dom"

const Chapters = () => {
  const [chapters, setChapters] = useState([]);
  let {id} = useParams()
  async function getChapters() {
    try {
      const {data} = await axios.get(`http://localhost:8080/chapters?manga_id=${id}`);
      setChapters(data); 
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getChapters();
  }, []);

  return (
    
    <div className='bg-gray-200 w-full h-full'>
      <NavBar/>
      <div className='flex flex-col w-full mb-2 ps-4 pe-4'>
        <p className='text-center mb-4'>Chapters</p>
        <div className='flex'>
            <Link to={'/manga/'+ id} className='w-1/2 h-8 bg-gray-200 rounded-full text-gray text-center border border-slate-300 hover:border-black'>
                Manga
            </Link>
            <Link to='#' className='h-8 w-1/2 bg-orange-500 rounded-full text-white text-center border hover:border-black'>
                Chapters
            </Link>
        </div>
      </div>

        {chapters.length > 0 ? chapters?.map((chapter) => (
            <div key={chapter?._id} className='flex justify-center items-center'>
            <img
                className=' w-24 md:w-40 h-20 md:h-40 bg-cover ms-4 p-2 rounded-3xl'
                src={chapter?.cover_photo} 
                alt=''
            />
            <div className='w-3/5 flex flex-col justify-center items-center'>
                <p>{chapter?.title}</p>
                <div className='flex gap-2'>
                <p>{chapter?.pages.length}</p>
                <p className=' text-black '>Pages</p>
                </div>
            </div>
            <Link to={`/chapter/${chapter._id}/1`} className='bg-orange-500 w-24 h-12 rounded-full text-white font-bold me-4 justify-center items-center flex'>
                Read
            </Link>
            </div>
    
        )): null} 
    </div>
  
  );
};

export default Chapters;

import React, { useEffect, useState } from 'react';
import NavBar from '../layouts/NavBar';
import axios from "axios";
import { Link, useParams } from "react-router-dom";


const MangaDetails = () => {
    let [manga, setManga] = useState({})
    let { id } = useParams()
    async function getManga() {
        try {
            let { data } = await axios.get(`http://localhost:8080/manga/${id}`)
            setManga(data.manga)
            
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getManga()
    }, [])

    return (
        <div className='w-full h-full flex flex-col bg-gray-200 md:gap-4'>
            <NavBar />
            <div className='w-full h-screen flex flex-col items-center'>
                <img className='w-full sm:w-60 h-80 lg:w-80 lg:object-cover p-4 rounded-3xl' src={manga?.cover_photo} alt="imagen del manga" />
                <p className=' m-4 text-3xl text-center'>{manga?.title}</p>
                <button className=' w-20 h-8 mt-2 justify-center items-center rounded-xl bg-red-100 text-rose-400 text-md font-medium leading-3'>{manga?.category_id?.name}</button>
                <div className='flex w-full h-16 justify-evenly gap-2 m-2'>
                    <img className='w-10 h-10 bg-white bg-cover rounded-full border p-1 drop-shadow-md ' src="../img/pulgar-arriba-removebg-preview.png" alt="" />
                    <img className='w-10 h-10 bg-white bg-cover rounded-full border p-1 drop-shadow-md ' src="../img/png-transparent-thumb-signal-emoji-emoji-hand-thumb-signal-material-removebg-preview.png" alt="" />
                    <img className='w-10 h-10 bg-white bg-cover rounded-full border p-1 drop-shadow-md ' src="../img/sorprendido-removebg-preview-removebg-preview.png" alt="" />
                    <img className='w-10 h-10 bg-white bg-cover rounded-full border p-1 drop-shadow-md ' src="../img/enamorado-removebg-preview.png" alt="" />
                </div>
                <div className='flex w-11/12 md:w-2/3 h-16 justify-around items-center text-center bg-white rounded-3xl shadow-md m-4'>
                    <div className='flex flex-col w-1/3'>
                        <p className=' text-lg font-bold'>4.5/5</p>
                        <p className=' text-xs text-gray-400'>Rating</p>
                    </div>
                    <div className='flex flex-col w-1/3 border-x-2 border-x-gray-300'>
                        <p className='  text-lg font-bold'>265</p>
                        <p className=' text-xs text-gray-400'>Chapters</p>
                    </div>
                    <div className='flex flex-col w-1/3'>
                        <p className='text-lg font-bold'>Eng</p>
                        <p className=' text-xs text-gray-400'>Language</p>
                    </div>
                </div>
                <div className='w-11/12 flex'>
                    <Link to={'/manga/'+ id} className=' w-1/2 h-8 bg-orange-500 rounded-full text-white text-center border hover:border-black'>
                        Manga
                    </Link>
                    <Link to= {"/chapters/" + id} className='h-8 w-1/2 bg-gray-200 rounded-full text-gray text-center border border-slate-300 hover:border-black'>
                        Chapters
                    </Link>
                </div>
                <p className=' text-start md:text-center text-xs md:text-sm ps-4 pe-4'>{manga?.description}</p>

            </div>
        </div>
    )
}

export default MangaDetails


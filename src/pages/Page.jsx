import { useEffect, useState } from 'react'
import PageComments from '../components/PageComment'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import flechaManga from '../../public/img/FlechaManga.svg'

const Page = () => {
    const APIurl = "http://localhost:8080"
    const [chapter, setChapter] = useState(null)
    const [next, setNext] = useState("")
    const { id, page } = useParams()
    const navigate = useNavigate()

    
    useEffect(() => {
        axios.get(APIurl + `/chapters/${id}`)
            .then((res) => {
                setChapter(res.data.all)
                console.log(res)
                setNext(res.data.next)
            })
            .catch(err => console.log(err))
    }, [id])
    console.log(chapter)
    console.log(next)
    const handleNext = () => {
        // setChange(change + 1)        
        if (Number(page) >= chapter.pages.length - 1) {
            navigate(`/chapter/${next}/${1}`)  
        }
        else {
            navigate(`/chapter/${id}/${Number(page) + 1}`)
        }
    };

    const handlePrev = () => { 
        if (Number(page) <= 1) {
            navigate(`/manga/${chapter.manga_id}/1`)
        }
        else{
            navigate(`/chapter/${id}/${Number(page)-1} `)
        }

    }

    return (
        <>
            <div className='h-screen w-full'>
                <div className='w-full h-1/6 bg-indigo-700 text-center flex flex-col justify-center items-center'>
                    <p className='text-white text-xs'>n. de cap {Number(page)}</p>
                    <p className='text-white text-xs'> nombre del cap{chapter?.title}</p>
            </div>
                <div className='w-full h-4/6 mt-5 flex items-center justify-center'>
                    <div onClick={handlePrev} className='w-1/2 border'>
                        <img  className=" absolute left-5 bg-white rounded-full p-2 opacity-50" src={flechaManga} alt="" />
                    </div>
                    <img className='w-96 h-full' src={chapter?.pages[Number(page)-1]} alt="" />
                    <div onClick={handleNext} className='w-1/2'>
                        <img  className=" rotate-180 absolute right-5 bg-white rounded-full p-2 opacity-50" src={flechaManga} alt="" />
                    </div>
 
                </div>
                <PageComments />
            </div>
        </>
    )
}

export default Page
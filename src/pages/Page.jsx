import { useEffect, useState } from 'react'
import PageComments from '../components/PageComment'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import flechaManga from '../../public/img/FlechaManga.svg'

const Page = () => {
    const APIurl = "http://localhost:8080/api"
    const [chapter, setChapter] = useState(null)
    const [next, setNext] = useState("")
    const { id, page } = useParams()
    const navigate = useNavigate()
    const [change, setChange] = useState(Number(page))
    const [reload, setReload] = useState(false)
    useEffect(() => {
        axios.get(APIurl + `/chapters/${id}`)
            .then((res) => {
                setChapter(res.data.all)
                setNext(res.data.next)
            })
            .catch(err => console.log(err))
    }, [page])

    console.log(chapter)
    console.log(next)
    const handleNext = () => {
        setChange(change + 1)
        navigate(`/chapter/${id}/${change + 1}`)
        if (change >= chapter.pages.length - 1) {
            navigate(`/chapter/${next}/${0}`)
            setReload(!reload)
        }

    };
    console.log(chapter?.pages.length)
    console.log(change)
    const handlePrev = () => {
        setChange(change - 1)
        navigate(`/chapter/${id}/${change}`)
        if (change <= 0) {
            navigate(`/chapter/${chapter.manga_id}/:1`)
            setReload(!reload)
        }

    }
    useEffect(() => {
        function reloadPage() {
            window.location.reload();
        }
        if (reload) {
            reloadPage()
        }
    }, [reload])
    return (
        <>
            <div className='h-screen w-full'>
                <div className='w-full h-1/6 bg-indigo-700 text-center flex flex-col justify-center items-center'>
                    <p className='text-white text-xs'>n. de cap{change}</p>
                    <p className='text-white text-xs'> nombre del cap{chapter?.title}</p>
            </div>
                <div className='w-full h-4/6 mt-5 flex items-center justify-center'>
                    <div onClick={handlePrev} className='w-1/2 border'>
                        <img  className=" absolute left-5 bg-white rounded-full p-2 opacity-50" src={flechaManga} alt="" />
                    </div>
                    <img className='w-96 h-full' src={chapter?.pages[change]} alt="" />
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
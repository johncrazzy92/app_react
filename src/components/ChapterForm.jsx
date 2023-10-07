import { useState, useEffect, useRef } from 'react';
import Alert from '../components/Alert';
import axios from 'axios';
import NavBar from '../layouts/NavBar';
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import ChapterUpload from './componentesMangas/ChapterUpload';


const ChapterForm = () => {
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState([]);
  const [dataResponse, setDataResponse] = useState(null);
  const [imgUp, setImgUp] = useState([]);
  const { id } = useParams()
  const token = useSelector((store) => store.me_authorsReducer.token)


  const title = useRef();
  const order = useRef();
  const pages = useRef();

  const handleForm = async () => {

    const inputTitle = title.current.value;
    // const inputPages = pages.current.value;
    const inputOrder = order.current.value;

    const formData = new FormData()

    const newChapterData = {
      manga_id: id,
      title: inputTitle,
      order: inputOrder,
    };

    formData.append('chapterData', JSON.stringify(newChapterData));

    imgUp.forEach((file) => {
      formData.append(`file`, file);
    });
    try {
      const { data } = await axios.post("https://backendminga.onrender.com/chapters/", formData, {
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "multipart/form-data",
        },
      }
      );
      setMessage([]);

      setDataResponse(data);
    } catch (error) {
      console.log(error);
      console.error(error);
      setMessage([error.response.data.message]);
      setDataResponse(null);
    }
  };

  useEffect(() => {
    if (dataResponse && dataResponse.message || message.length > 0) {
      setShow(true);
    }
  }, [dataResponse, message]);

  return (
    <>
      <NavBar />
      <div className='h-screen bg-slate-100 flex flex-col justify-center items-center'>
        <form action="" encType="multipart/form-data" className='flex flex-col h-2/3 w-2/3 items-center'>
          <label htmlFor="" className='text-2xl pb-5'>New Chapter</label>
          <input type="text" className='border-b-2 border-neutral-400 bg-slate-100 text-xs pt-5 w-full md:w-1/2' ref={title} placeholder='  Insert title' />
          <input type="text" className='border-b-2 border-neutral-400 bg-slate-100 text-xs pt-5 w-full md:w-1/2' ref={order} placeholder='  Insert order' />
          <input type="text" className='border-b-2 border-neutral-400 bg-slate-100 text-xs pt-5 w-full md:hidden' ref={pages} placeholder='  Insert pages' />
          <ChapterUpload setImgUp={setImgUp} imgUp={imgUp} />
          <button onClick={(e) => {
            e.preventDefault();
            handleForm();
          }}
            className='bg-orange-600 text-white font-semibold py-2 px-5 mt-20 rounded-full w-full md:w-1/2'>Send</button>
        </form>
        {show && <Alert show={show} message={message} data={dataResponse} setShow={setShow} />}
      </div>
    </>
  );
}

export default ChapterForm;
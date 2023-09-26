import { useState, useEffect, useRef } from 'react';
import Alert from '../components/Alert';
import axios from 'axios';
import NavBar from '../layouts/NavBar';

const ChapterForm = () => {
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState([]);
  const [dataResponse, setDataResponse] = useState(null);

  const title = useRef();
  const order = useRef();
  const pages = useRef();

  const handleForm = async () => {
    const inputTitle = title.current.value;
    const inputPages = pages.current.value;
    const inputOrder = order.current.value;
    const newChapterData = {
      manga_id: "65117d91d875b6549eeb2b41",
      title: inputTitle,
      order: inputOrder,
      pages: inputPages.split(",")
    };
    try {
      const { data } = await axios.post("http://localhost:8080/chapters/", newChapterData, {
        headers: {
          Authorization: "Bearer " + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImVyaWNAbWguY29tLmFyIiwiaWF0IjoxNjk1NTg3MzYxLCJleHAiOjE2OTU2NzM3NjF9.XNF3QVsmQKhd-NjVadIQs2i9b3-q0kmSN5fBtGocOw4"
      }
    }
      );
      setMessage([]); 
      setDataResponse(data); 
    } catch (error) {
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
    <NavBar/>
    <div className='h-screen bg-slate-100 flex flex-col justify-center items-center'>
      <form action="" className='flex flex-col h-2/3 w-2/3 items-center'>
        <label htmlFor="" className='text-2xl pb-5'>New Chapter</label>
        <input type="text" className='border-b-2 border-neutral-400 bg-slate-100 text-xs pt-5 w-full md:w-1/2' ref={title} placeholder='  Insert title' />
        <input type="text" className='border-b-2 border-neutral-400 bg-slate-100 text-xs pt-5 w-full md:w-1/2' ref={order} placeholder='  Insert order' />
        <input type="text" className='border-b-2 border-neutral-400 bg-slate-100 text-xs pt-5 w-full md:w-1/2' ref={pages} placeholder='  Insert pages' />
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
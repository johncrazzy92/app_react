import { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import NavBar from '../layouts/NavBar';
import Index from './Index';
import Swal from 'sweetalert2';
import editChapterAction from '../redux/actions/editChapter.js';
import deleteChapterAction from '../redux/actions/deleteChapter.js';

const EditChapter = () => {
  const { user, token } = useSelector((store) => store.me_authorsReducer);

  const [chapter, setChapter] = useState([]);
  const [title, setTitle] = useState('');
  const [photo, setPhoto] = useState('../img/goku-dragon-ball-kai-art.jpg');
  const [id, setId] = useState(null);
  const [editData, setEditData] = useState('');

  const chapterTitle = useRef();
  const chapterField = useRef();
  const chapterEditInfo = useRef();
  const dispatch = useDispatch();

  const idParams = window.location.pathname.split('/')[2];

  const getManga = async () => {
    try {
      let mangaById = await axios.get(
        'https://backendminga.onrender.com/chapters/me?manga_id=' + idParams,
        {
          headers: {
            Authorization: 'Bearer ' + token,
          },
        }
      );
      let mangaChaptersArray = mangaById.data;

      setChapter(mangaChaptersArray);
    } catch (error) {
      console.error(error);
    }
  };

  const editManga = async (e) => {
    try {
      e.preventDefault();

      const { value: confirmEdit } = await Swal.fire({
        title: 'Are you sure about editing this chapter?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Yes',
        cancelButtonText: 'No',
      });

      if (!confirmEdit) {
        return;
      }

      const updatedChapter = {
        [chapterField.current.value]:
          chapterField.current.value === 'title'
            ? editData
            : chapterEditInfo.current.value,
      };


      try {
        await dispatch(editChapterAction({ id, info: updatedChapter, token }));
        Swal.fire({
          icon: 'success',
          title: 'Successful edition!',
          text: 'The chapter has been edited successfully.',
        });
      } catch (error) {
        console.error("Error editing chapter:", error);

        return;
      }


      getManga();
    } catch (error) {
      console.error(error);
    }
  };

  const deleteManga = async (e) => {
    try {
      e.preventDefault();

      const { value: confirmDelete } = await Swal.fire({
        title: 'Are you sure to delete this chapter?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete',
        cancelButtonText: 'No, cancel',
      });

      if (!confirmDelete) {
        return;
      }


      try {
        await dispatch(deleteChapterAction({ id, token }));
        Swal.fire({
          icon: 'success',
          title: 'Successful removal!',
          text: 'The chapter has been successfully deleted.',
        });
      } catch (error) {
        console.error("Error deleting chapter:", error);

        return;
      }


      getManga();
    } catch (error) {
      console.error(error);
    }
  };

  const handleTitle = (event) => {
    const titleValue = event.target.value;
    setTitle(titleValue);

    const selectedChapter = chapter.find((ch) => ch.title === titleValue);
    if (selectedChapter) {
      setPhoto(selectedChapter.cover_photo);
      setId(selectedChapter._id);
    } else {
      setPhoto('');
      setId(null);
    }
  };

  useEffect(() => {
    getManga();
  }, []);

  return (
    <>
      <NavBar />
      {user.role === 1 || user.role === 2 ? (
        <div className="h-screen bg-slate-100 flex flex-col justify-center pt-12 items-center md:flex-row">
          <form className="flex flex-col h-2/3 w-2/3 items-center">
            <label htmlFor="" className="text-2xl pb-5">
              Edit Chapter
            </label>
            <h1 className="border-b-2 border-neutral-400 bg-slate-100 text-center text-xs pt-5 w-full md:w-1/2">
              Alice in Borderland
            </h1>
            <select
              onChange={handleTitle}
              ref={chapterTitle}
              className="border-b-2 border-neutral-400 bg-slate-100 text-xs pt-5 w-full md:w-1/2"
            >
              {chapter
                ? chapter.map((ch) => (
                  <option value={ch.title} key={ch._id}>
                    {ch.title}
                  </option>
                ))
                : <option>Option 1</option>}
            </select>

            <select
              ref={chapterField}
              className="border-b-2 border-neutral-400 bg-slate-100 text-xs pt-5 w-full md:w-1/2"
            >
              <option value="title">Title</option>
              <option value="cover_photo">Cover photo</option>
              <option value="order">Order</option>
            </select>
            <input
              ref={chapterEditInfo}
              type="text"
              className="border-b-2 border-neutral-400 bg-slate-100 text-xs pt-5 w-full md:w-1/2"
              placeholder="data to edit"
              value={editData}
              onChange={(e) => setEditData(e.target.value)}
            />

            <button
              onClick={(e) => {
                e.preventDefault();
                editManga(e);
              }}
              className="bg-emerald-400 text-white font-semibold py-3 px-5 mt-10 rounded-full w-full md:w-1/2"
            >
              Edit
            </button>
            <button
              onClick={deleteManga}
              className="text-rose-400 bg-red-100 font-semibold py-3 px-5 mt-5 rounded-full w-full md:w-1/2"
            >
              Delete
            </button>
          </form>
          <div className="text-center max-md: hidden md:h-2/3 md:flex md:flex-col md:items-center md:w-1/2 md:me-10">
            <h1>Chapter: {title}</h1>
            <img className=" h-5/6 w-96" src={photo} alt="" />
          </div>
        </div>
      ) : (
        <Index />
      )}
    </>
  );
};

export default EditChapter;

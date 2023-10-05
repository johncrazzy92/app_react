import axios from "axios";
import { useEffect, useRef, useState } from "react";
import Alert from "../components/componentesMangas/Alert";
import { useDispatch, useSelector } from "react-redux";
import { postOneManga } from "../../src/redux/actions/mangaAction.js";

//----------------------------
const MangaForm = () => {
  const [category, setCategory] = useState([]);
  const [alert, setAlert] = useState([]);
  const [show, setShow] = useState(false);
  const [image, setImage] = useState("");
  const [imgUp , setImgUp] = useState([])
  //---------dispatch
  const dispatch = useDispatch();
  //---------------store
  const token = useSelector((store) => store.me_authorsReducer.token);
  const id = useSelector((store) => store.me_authorsReducer.user.author);

  const mangaReducer = useSelector((store) => store.mangaPost);
  console.log(mangaReducer);
  //--------------------------------------------------------------------------form to post --
  const titleInput = useRef();
  const categoryInput = useRef();
  const imageInput = useRef();
  const descriptionInput = useRef();
  //-----------post manga
  async function postManga(event) {
    event.preventDefault();
    const formData = new FormData()

    const mangaToPost = {
      author_id: id, 
      title: titleInput.current.value.toLowerCase(),
      category_id: categoryInput.current.value.toLowerCase(),
      cover_photo: imageInput.current.value.toLowerCase(),
      description: descriptionInput.current.value.toLowerCase(),
    };
    formData.append("manga",JSON.stringify(mangaToPost))
    formData.append("file",imgUp)
    setShow(!show);
    try {
      const responsed = await axios.post(
        "http://localhost:8080/mangas",
        formData,{
          headers: { authorization: `Bearer ${token}` },}
      );
      dispatch(postOneManga(responsed.data.response));
      //---------alerts
      setAlert([responsed.data.message]);
    } catch (err) {
      console.log(err);
      setAlert([err.response.data.message]);
    }
  }
  //-------------selector
  useEffect(() => {
    axios
      .get("http://localhost:8080/categories")
      .then((res) => {
        setCategory(res.data.response);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  //-------------------------------render
  return (
    <>
      {show && <Alert alert={alert} setShow={setShow} show={show} />}
      <div className="w-full h-screen flex justify-center items-center gap-24">
        <div className="flex flex-col gap-20">
          <h1 className="font-semibold text-center text-4xl">New Manga</h1>
          <form className=" flex flex-col gap-3" encType="multipart/form-data" action="">
            <label htmlFor="title"></label>
            <input
              ref={titleInput}
              className="border-b border-1 border-black w-60"
              type="text"
              id="title"
              name="title"
              placeholder="Insert Title"
              required
            />
            <label htmlFor="category"></label>
            <select
              ref={categoryInput}
              className="border-b border-1 border-black w-60"
              id="category"
              name="category"
              required
            >
              <option value="" disabled selected>
                Insert Category
              </option>
              {category &&
                category.map((categoria) => {
                  return (
                    <option key={categoria.name} value={categoria.name}>
                      {categoria.name}
                    </option>
                  );
                })}
            </select>
            <label htmlFor="photo"></label>

            <div className="hidden md:flex ">
        <label className="cursor-pointer bg-orange-600 rounded-md w-28 flex justify-center items-center text-white h-8">
          Upload img
          <input
            type="file"
            name='file'
            accept=".png,.jpeg,.jpg"
            style={{ display: "none" }}
            onChange={(e) => {
              setImgUp(e.target.files[0])
              console.log(e.target.files[0]);
            }}
          />
        </label>
        {imgUp ? (
          <p className="flex justify-center items-center">
            {imgUp?.length} archivo(s) seleccionado(s)
          </p>
        ) : (
          <p className="flex justify-center items-center">
            Ningún archivo seleccionado
          </p>
        )}
      </div>
            <input
              onChange={() => setImage(imageInput.current.value)}
              ref={imageInput}
              className="border-b border-1 block md:hidden border-black w-60"
              type="url"
              id="photo"
              name="photo"
              placeholder="Insert Photo"
              required
            />
            <label className="" htmlFor="description"></label>
            <input
              ref={descriptionInput}
              className="border-b border-1 border-black w-60"
              type="text"
              id="description"
              name="description"
              placeholder="Insert Description"
              required
            />
            <button
              onClick={postManga}
              className="bg-orange-600 p-4 rounded-3xl text-2xl font-bold text-white mt-10"
              type="submit"
            >
              send
            </button>
          </form>
        </div>
        <img
          className={`h-4/6 hidden rounded-md ${image && "lg:flex"
            } self-center`}
          src={image}
          alt="image"
        />
      </div>
    </>
  );
};

export default MangaForm;

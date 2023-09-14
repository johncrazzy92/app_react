import axios from "axios";
import { useEffect, useRef, useState } from "react";
import Alert from "../components/componentesMangas/Alert";

const MangaForm = () => {
  const [category, setCategory] = useState([]);
  const [alert, setAlert] = useState([]);
  const [show, setShow] = useState(false);
  const [image, setImage] = useState("");

  const titleInput = useRef();
  const categoryInput = useRef();
  const imageInput = useRef();
  const descriptionInput = useRef();
  async function postManga(event) {
    event.preventDefault();
    const mangaToPost = {
      author_id: "64f16377869bb8da08460527",
      title: titleInput.current.value.toLowerCase(),
      category_id: categoryInput.current.value.toLowerCase(),
      cover_photo: imageInput.current.value.toLowerCase(),
      description: descriptionInput.current.value.toLowerCase(),
    };
    setShow(!show);
    try {
      const responsed = await axios.post(
        "http://localhost:8080/mangas",
        mangaToPost
      );
      setAlert([responsed.data.message]);
      console.log(responsed);
    } catch (err) {
      console.log(err.response.data.message);
      setAlert(err.response.data.message);
    }
  }

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
  return (
    <>
      {show && <Alert alert={alert} setShow={setShow} show={show} />}
      <div className="w-full h-screen flex justify-center items-center gap-24">
        <div>
          <h1 className="font-semibold text-4xl">New Manga</h1>
          <form className=" flex flex-col gap-3" action="">
            <label htmlFor="title"></label>
            <input
              ref={titleInput}
              className="border-b-2 border-black w-60"
              type="text"
              id="title"
              name="title"
              placeholder="Insert Title"
              required
            />
            <label htmlFor="category"></label>
            <select
              ref={categoryInput}
              className="border-b-2 border-black w-60"
              id="category"
              name="category"
              required
            >
              <option value="" disabled>
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
            <input
              onChange={() => setImage(imageInput.current.value)}
              ref={imageInput}
              className="border-b-2 border-black w-60"
              type="url"
              id="photo"
              name="photo"
              placeholder="Insert Photo"
              required
            />
            <label className="" htmlFor="description"></label>
            <input
              ref={descriptionInput}
              className="border-b-2 border-black w-60"
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
          className={`h-4/6 hidden ${image && "lg:flex"} self-center`}
          src={image}
          alt="image"
        />
      </div>
    </>
  );
};

export default MangaForm;

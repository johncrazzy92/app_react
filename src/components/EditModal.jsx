import axios from "axios";
import { useState, useEffect, useRef } from "react";
import Modal from "react-modal"
import Alert from '../components/componentesMangas/Alert.jsx'
import { useDispatch } from "react-redux";
import actions from "../../src/redux/actions/mangas.js";
const { updateManga } = actions;



const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

const EditModal = ({ setIsOpen, isOpen, manga, token, alert, setAlert, setShow }) => {
  const dispatch = useDispatch();
  const titleInput = useRef();
  const categoryInput = useRef();
  const imageInput = useRef();
  const descriptionInput = useRef();

  const [category, setCategory] = useState([]);




  const onCloseModal = () => {
    setIsOpen(false)
  }
  useEffect(() => {
    axios
      .get("http://localhost:8080/categories")
      .then((response) => {
        setCategory(response.data.response);
        console.log(response)
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={onCloseModal}
        style={customStyles}
        ClassName={"modal"}
        overlayClassName={"modal-fondo"}
        closeTimeoutMS={200}
      >
        <h1>{manga.title}</h1>
        <hr />
        <form className="flex flex-col gap-1">

          <div className="flex-col flex">
            <label>Title</label>
            <input className="" placeholder={manga.title} ref={titleInput} />
          </div>

          <div className="flex flex-col">
            <label>Cover photo</label>
            <input className="form-control" placeholder={manga.cover_photo} ref={imageInput} />
          </div>

          <hr />
          <div className="mb-2">
            <label>Categorie</label>
            <select
              ref={categoryInput}
              className="border-b border-1 border-black w-60"
              id="category"
              name="category"
              defaultValue={""}
            >
              <option value="" disabled>{manga.category_id.name}
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
          </div>

          <div className="mb-2">
            <label htmlFor="Description"></label>
            <textarea
              type="text"
              className="form-control"
              placeholder={manga.description}
              cols="39"
              rows="5"
              ref={descriptionInput}
            ></textarea>
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            onClick={(e) => {
              e.preventDefault();
              onCloseModal();
              setShow(true)

              const categoryId = categoryInput.current.value ? category.find((category) => category.name === categoryInput.current.value)._id : null;
              const title = titleInput.current.value || manga.title;
              const cover_photo = imageInput.current.value || manga.cover_photo;
              const description = descriptionInput.current.value || manga.description;
              const category_id = categoryId || manga.category_id._id;
              const id = manga._id;

              dispatch(updateManga({ id, title, cover_photo, description, category_id }));

              /* axios
                .put(`http://localhost:8080/mangas/${id}`, {
                  title,
                  cover_photo,
                  description,
                  category_id,
                }, {
                  headers: { Authorization: `Bearer ${token}` },
                })
                .then((res) => {
                  console.log(res.data.message)
                  setAlert([res.data.message]);

                  console.log(alert);
                })
                .catch((error) => {
                  setShow(true)
                  setAlert(error.response.data.message);
                  console.log(alert);
                  console.log(error);
                }); */

            }}
          >Guardar
          </button>

        </form>
      </Modal>
    </>
  )
}

export default EditModal
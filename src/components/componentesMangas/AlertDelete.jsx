import axios from "axios";
import { useDispatch } from "react-redux";
import actions from "../../redux/actions/mangas.js";
const { deleteManga } = actions;

const AlertDelete = ({ show, setShow, setAlert, alert, setShowDelete, showDelete, token, manga }) => {
    const dispatch = useDispatch();
    return (
        <div className=" drop-shadow-md fixed z-40 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded shadow-lg">
            <div className="bg-white min-h-20 w-64 rounded-lg">
                <div className="h-3/5 flex items-center flex-col gap-2 p-3">

                    <p className="text-center font-semibold"> Estas seguro? eliminaras el elemento y todos sus capitulos</p>
                </div>
                <div className="h-6 flex flex-row justify-around">
                    <p
                        className="text-sky-400 cursor-pointer font-semibold text-xl text-center border-t border-1"
                        onClick={() => {
                            console.log(manga)
                            const id = manga._id
                            setShowDelete(false);
                            dispatch(deleteManga(id));
                            /* axios.delete(`http://localhost:8080/mangas/${id}`, {
                                headers: {
                                    Authorization: `Bearer ${token}`,
                                },
                            })
                                .then((res) => {
                                    console.log(res.data.message)
                                    setAlert([res.data.message]);
                                    setShow(true)
                                })
                                .catch((error) => {
                                    console.log(error);
                                    setShow(true)
                                    setAlert(error.response.data.message);
                                }); */
                        }}
                    >
                        Aceptar
                    </p>
                    <p
                        onClick={() => setShowDelete(false)}
                        className="text-sky-400 cursor-pointer font-semibold text-xl text-center border-t border-1"
                    >
                        Cancelar
                    </p>
                </div>
            </div>
        </div >
    );
};

export default AlertDelete;


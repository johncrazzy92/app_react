// import { useRef, useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import commentAction from '../redux/actions/commentAction';
// import createComment from '../redux/actions/createCommentAction';
// import EditComment from './EditComment';
// import DeleteComment from './DeleteComment';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const Comment = ({ open, setOpen, chapter_id, chapterName }) => {
//   const comment = useRef();
//   const { user, token } = useSelector(store => store.me_authorsReducer);
//   const {comments, error} = useSelector(store => store.commentReducer);
//   const dispatch = useDispatch();
//   const [edit, setEdit] = useState({
//     show: false,
//     comment: {}
//   });
//   const [delette, setDelette] = useState({
//     show: false,
//     comment: {}
//   });

//   useEffect(() => {
//     // Carga los comentarios iniciales cuando el componente se monta
//     dispatch(commentAction({
//       chapter_id,
//       token
//     }));
//   }, [dispatch]);

//   const sendAndCreateComment = async () => {
//     const commentText = comment.current.value;
//     if (!commentText.trim()) {
//       toast.error('El comentario no puede estar vacío');
//       return;
//     }
//     const info = {
//       chapter_id,
//       text: commentText,
//       user_id: user.id,
//       token
//     };

//     // Dispatch de la acción asincrónica y espera la respuesta
//     try {
//       await dispatch(createComment(info));
//       // Limpia el campo de comentario después de enviarlo si es necesario
//       comment.current.value = ''; 
//       toast.success('Comentario creado');
//     } catch (error) {
//       toast.error('Error al crear el comentario');
//     }
//   };

//   const editComment = (comment) => {
//     setEdit({
//       show: true,
//       comment
//     })
//   };

//   const deleteComment = (comment) => {
//     setDelette({
//       show: true,
//       comment
//     })
//   };

//   return (
//     <>
//     <ToastContainer />
//     <div className='w-1/4 h-3/6 bg-white border border-orange-600 fixed right-0 bottom-0 flex flex-col items-center'>
//       <div className='flex items-center justify-between w-full h-10 p-6'>
//         <h1 className='text-xl font-bold'>{chapterName}</h1>
//         <button onClick={() => setOpen(!open)} className=''>X</button>
//       </div>
//       <div className='flex flex-col gap-5 w-full h-4/6 mb-6 p-4 overflow-scroll'>
//         {comments.map((comment, index) => (
//           <div key={index} className='h-36 w-full rounded-xl border-2 border-[#666] p-1'>
//             {/* Renderiza los comentarios existentes */}
//             {
//               (comment.user_id.email == user.email) ?
//                 <div className='flex justify-between gap-2'>
//                   <button onClick={() => deleteComment(comment)}>
//                     <img src="../img/borrar.svg" alt="" />
//                   </button>
//                   <button onClick={() => editComment(comment)}>
//                     <img src="../img/editar.svg" alt="" />
//                   </button>
//                   <h2>{comment.user_id.email}</h2>
//                   <img src={comment.user_id.photo} className='w-8 rounded-full object-cover' alt="" />
//                 </div> :
//                 <div className='flex items-center gap-2'>
//                   <img src={comment.user_id.photo} className='w-8 rounded-full object-cover' alt="" />
//                   <h2>{comment.user_id.email}</h2>
//                 </div>
//             }
//             {edit.show ? <EditComment edit={edit} setEdit={setEdit} user={user} token={token} /> : null}
//             {delette.show ? <DeleteComment delette={delette} setDelette={setDelette} user={user} token={token} /> : null}
//             <div className='w-full h-4/6 p-3 bg-slate-500'>
//               <p>{comment.text}</p>
//             </div>
//             <div className='w-full h-fit text-center text-xs text-[#666]'>
//               {comment.createdAt}
//             </div>
//           </div>
//         ))}
//       </div>
//       <div className='absolute bottom-2 w-5/6 h-fit flex border-2 border-[#999] rounded-lg'>
//         <input ref={comment} className='w-5/6 h-10 p-2 rounded-lg focus:outline-none' type="text" placeholder='Say something here' />
//         <button onClick={sendAndCreateComment} className='absolute bottom-2 right-4 w-5'>Send</button>
//       </div>

//     </div>
//     </>
//   );
// };

// export default Comment;








import { useRef, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import commentAction from '../redux/actions/commentAction';
import createComment from '../redux/actions/createCommentAction';
import EditComment from './EditComment';
import DeleteComment from './DeleteComment';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import BadWordsFilter from 'bad-words';
import { formatDistanceToNow } from 'date-fns';

const Comment = ({ open, setOpen, chapter_id, chapterName }) => {
  const comment = useRef();
  const { user, token } = useSelector(store => store.me_authorsReducer);
  const { comments, error } = useSelector(store => store.commentReducer);
  const dispatch = useDispatch();
  const [edit, setEdit] = useState({
    show: false,
    comment: {}
  });
  const [delette, setDelette] = useState({
    show: false,
    comment: {}
  });

  useEffect(() => {
    // Carga los comentarios iniciales cuando el componente se monta
    dispatch(commentAction({
      chapter_id,
      token
    }));
  }, [dispatch]);

  const sendAndCreateComment = async () => {
    const commentText = comment.current.value;
    const filter = new BadWordsFilter();
    if (filter.isProfane(commentText)) {
      toast.error('This comment contains inappropriate words');
      return;
    }
    if (!commentText.trim()) {
      toast.error('This comment cannot be empty');
      return;
    }
    const info = {
      chapter_id,
      text: commentText,
      user_id: user.id,
      token
    };

    // Dispatch de la acción asincrónica y espera la respuesta
    try {
      await dispatch(createComment(info));
      // Limpia el campo de comentario después de enviarlo si es necesario
      comment.current.value = '';
      toast.success('Comment created successfully');
    } catch (error) {
      toast.error('Error creating comment');
    }
  };

  const editComment = (comment) => {
    setEdit({
      show: true,
      comment
    })
  };

  const deleteComment = (comment) => {
    setDelette({
      show: true,
      comment
    })
  };

  return (
    <>
      <ToastContainer />
      <div className='fixed inset-0 z-50 flex items-center justify-center bg-opacity-75 bg-black'>
        <div className='w-full max-w-md p-4 bg-white rounded-lg shadow-md'>
          <div className='flex justify-between items-center'>
            <h1 className='text-xl font-bold'>{chapterName}</h1>
            <button onClick={() => setOpen(!open)} className='text-gray-600 hover:text-gray-800 focus:outline-none'>
              X
            </button>
          </div>
          <div className='mt-4'>
            <div className='flex flex-col gap-5 w-full mb-6 p-4 overflow-scroll'>
              {comments.map((comment, index) => (
                <div key={index} className='rounded-xl border-2 border-[#666] p-1'>
                  {/* Renderiza los comentarios existentes */}
                  {
                    (comment.user_id.email == user.email) ?
                      <div className='flex justify-between gap-2'>
                        <button onClick={() => deleteComment(comment)}>
                          <img src="../img/borrar.svg" alt="" />
                        </button>
                        <button onClick={() => editComment(comment)}>
                          <img src="../img/editar.svg" alt="" />
                        </button>
                        <h2>{comment.user_id.email}</h2>
                        <img src={comment.user_id.photo} className='w-8 rounded-full object-cover' alt="" />
                      </div> :
                      <div className='flex items-center gap-2'>
                        <img src={comment.user_id.photo} className='w-8 rounded-full object-cover' alt="" />
                        <h2>{comment.user_id.email}</h2>
                      </div>
                  }
                  {edit.show ? <EditComment edit={edit} setEdit={setEdit} user={user} token={token} /> : null}
                  {delette.show ? <DeleteComment delette={delette} setDelette={setDelette} user={user} token={token} /> : null}
                  <div className='w-full bg-gray-500 p-3'>
                    <p>{comment.text}</p>
                  </div>
                  <div className='w-full text-center text-xs text-[#666]'>
                  {formatDistanceToNow(new Date(comment.createdAt), { addSuffix: true })}
                  </div>
                </div>
              ))}
            </div>
            <div className='flex border-2 border-[#999] rounded-lg'>
              <input ref={comment} className='w-full h-10 p-2 rounded-lg focus:outline-none' type="text" placeholder='Say something here' />
              <button onClick={sendAndCreateComment} className='w-16 bg-orange-500 text-white'>Send</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Comment;




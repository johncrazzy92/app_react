import  { useState, useEffect } from 'react';

function Comments({ chapterId }) {
  const [comments, setComments] = useState([]);
  const [newCommentText, setNewCommentText] = useState('');

  const fetchComments = async () => {
    try {
      const response = await fetch(`/api/comments/${chapterId}`);
      if (response.ok) {
        const data = await response.json();
        setComments(data.comments);
      } else {
        console.error('Error al obtener comentarios');
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    // Llama a la función para cargar los comentarios cuando se monte el componente
    fetchComments();
  }, [chapterId]);

  const handleAddComment = async () => {
    try {
      const response = await fetch(`/api/comments`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chapter_id: chapterId,
          text: newCommentText,
        }),
      });

      if (response.ok) {
        // El comentario se ha agregado con éxito, actualiza la lista de comentarios
        fetchComments(); // Vuelve a cargar los comentarios después de agregar uno
        setNewCommentText(''); // Limpia el campo de texto del nuevo comentario
      } else {
        // Si ocurre un error al agregar el comentario, manejarlo aquí
        console.error('Error al agregar el comentario');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Comentarios del Capítulo</h2>
      <div>
        <textarea
          value={newCommentText}
          onChange={(e) => setNewCommentText(e.target.value)}
        />
        <button onClick={handleAddComment}>Agregar Comentario</button>
      </div>
      <ul>
        {comments.map((comment) => (
          <li key={comment._id}>
            <p>{comment.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Comments;

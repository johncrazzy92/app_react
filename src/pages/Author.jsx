import AuthorProfile from "../components/AuthorProfile";
import MangasAuthor from "../components/componentesMangas/MangasAuthor";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux/es/hooks/useSelector";


const Author = () => {
  const [profile, setProfile] = useState({});
  const authorId = useSelector((store)=>store.me_authorsReducer.user.author)
  useEffect(() => {
    
    if (!profile._id){
    axios

      .get("http://localhost:8080/authors/me/" + authorId)

      .then((res) => {
        setProfile(res.data.author);
        
      })
      .catch((err) => {
        console.log(err);
      });
  }}, []);
 
  return (
    <>
      <AuthorProfile oneAuthor={profile} />
      {profile._id && <MangasAuthor profileId={profile._id} />}
    </>
  );
};

export default Author;

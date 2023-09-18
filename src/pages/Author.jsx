import AuthorProfile from "../components/AuthorProfile";
import MangasAuthor from "../components/componentesMangas/MangasAuthor";
import { useEffect, useState } from "react";
import axios from "axios";

const Author = () => {
  const [profile, setProfile] = useState({});

  useEffect(() => {
    axios
      .get("http://localhost:8080/authors/me/64f16377869bb8da08460527")
      .then((res) => {
        setProfile(res.data.author);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <AuthorProfile oneAuthor={profile} />
      {profile._id && <MangasAuthor profileId={profile._id} />}
    </>
  );
};

export default Author;

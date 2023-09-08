import AuthorProfile from "../components/AuthorProfile";
import MangasAuthor from "../components/componentesMangas/MangasAuthor";
import { useEffect, useState } from "react";
import axios from "axios";

const Author = () => {
  const [profile, setProfile] = useState({});

  useEffect(() => {
    axios
      .get("http://localhost:8080/authors/me/64f4caa868b137c836815bc1")
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

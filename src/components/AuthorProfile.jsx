import UbicationIcon from "../components/icons/ubicationIcon";
import BirthIcon from "../components/icons/BirthIcon";
import EditIcon from "../components/icons/EditIcon";
import React from "react";

const AuthorProfile = ({ oneAuthor }) => {
  function upper(name) {
    return name ? name.charAt(0).toUpperCase() + name.slice(1) : "";
  }
  return (
    <>
      <div className="w-full h-1/3  gap-6  flex justify-center lg:justify-start lg:px-16 items-center  lg:mb-0 ">
        <img
          className="h-14 w-14 object-cover lg:w-52 lg:h-52 rounded-full border-2  border-black"
          src={oneAuthor.photo}
          alt="perfil img"
        />
        <div className="text-gray-500">
          <h1 className="text-black text-lg font-medium lg:text-3xl">
            {upper(oneAuthor.name) || "autor name"}{" "}
            {oneAuthor.last_name || upper(oneAuthor.last_name) || ""}
          </h1>
          <div className="flex items-center">
            <UbicationIcon />
            <p>
              {upper(oneAuthor.city) || oneAuthor.city || "city"},{" "}
              {upper(oneAuthor.country) || oneAuthor.country || "country"}
            </p>
          </div>
          <div className="flex items-center">
            <BirthIcon />
            <p>
              {oneAuthor.createdAt
                ? oneAuthor.createdAt.slice(0, 10).replace(/-/g, "/")
                : oneAuthor.createdAt}
            </p>
          </div>
        </div>
        <EditIcon />
      </div>
    </>
  );
};

export default AuthorProfile;

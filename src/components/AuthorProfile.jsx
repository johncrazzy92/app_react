import UbicationIcon from "../components/icons/ubicationIcon";
import BirthIcon from "../components/icons/BirthIcon";
import EditIcon from "../components/icons/EditIcon";

const AuthorProfile = ({ oneAuthor }) => {
  return (
    <>
      <div className="w-full  gap-6  flex justify-center lg:justify-start lg:px-16 items-center mb-6 lg:mb-0 ">
        <img
          className="h-14 w-14 object-cover lg:w-52 lg:h-52 rounded-full border-2  border-black"
          src={oneAuthor.photo}
          alt="perfil img"
        />
        <div className="text-gray-500">
          <h1 className="text-black text-lg font-medium lg:text-3xl">
            {oneAuthor.name}
          </h1>
          <div className="flex items-center">
            <UbicationIcon />
            <p>{oneAuthor.city + ", " + oneAuthor.country}</p>
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

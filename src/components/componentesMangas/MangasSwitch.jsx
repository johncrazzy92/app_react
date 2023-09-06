import Switch from "./Switch";
import { Link } from "react-router-dom";
import { useState } from "react";

const MangasSwitch = ({ mangas_New }) => {
  const [isChecked, setIsChecked] = useState(true);
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <>
      <hr className="my-3 h-0.5 border-t-0 mx-5 bg-black " />
      <Switch
        isChecked={isChecked}
        handleCheckboxChange={handleCheckboxChange}
      />

      <div
        className={` gap-5 h-52 lg:h-full py-10 lg:py-0 flex-wrap ${
          isChecked ? "flex" : "hidden"
        } items-center justify-center lg:justify-around lg:items-center `}
      >
        {mangas_New.news
          ? mangas_New.news.map((manga, index) => (
              <div
                key={index}
                className="h-56 w-2/5 lg:w-1/5 lg:h-5/6 xl:w-1/6 xl:h-full "
              >
                <Link to={`/MangaDetails/${manga._id}`}>
                  <img
                    className="h-4/5 w-full xl:h-5/6 object-cover rounded-2xl  shadow-md shadow-gray-400 cursor-pointer hover:border-4 hover:border-orange-500"
                    src={manga.cover_photo}
                    alt="manga"
                  />
                </Link>
                <p className="text-slate-600">{manga.title}</p>
              </div>
            ))
          : null}
      </div>
      <div
        className={` gap-5 h-52 lg:h-full py-10 lg:py-0 flex-wrap ${
          !isChecked ? "flex" : "hidden"
        } items-center justify-center lg:justify-around lg:items-center `}
      >
        {mangas_New.olds
          ? mangas_New.olds.map((manga, index) => (
              <div
                key={index}
                className="h-56 w-2/5 lg:w-1/5 lg:h-5/6 xl:w-1/6 xl:h-full"
              >
                <Link to={`/MangaDetails/${manga._id}`}>
                  {" "}
                  <img
                    className="h-4/5 w-full xl:h-5/6 object-cover rounded-2xl  shadow-md shadow-gray-400 cursor-pointer hover:border-4 hover:border-orange-500"
                    src={manga.cover_photo}
                    alt="manga"
                  />
                </Link>
                <p className="text-slate-600">{manga.title}</p>
              </div>
            ))
          : null}
      </div>
    </>
  );
};

export default MangasSwitch;

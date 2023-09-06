const MangasAll = ({ mangas_New }) => {
  return (
    <>
      <hr className="my-3 h-0.5 border-t-0 mx-5 bg-black " />

      <div
        className=" gap-5 h-52 lg:h-full py-10 lg:py-0 flex-wrap flex
        } items-center justify-center lg:justify-around lg:items-center "
      >
        {mangas_New.all
          ? mangas_New.all.map((manga, index) => (
              <div
                key={index}
                className="h-56 w-2/5 lg:w-1/5 lg:h-5/6 xl:w-1/6 xl:h-full"
              >
                <img
                  className="h-4/5 w-full xl:h-5/6 object-cover rounded-2xl  shadow-md shadow-gray-400 cursor-pointer hover:border-4 hover:border-orange-500"
                  src={manga.cover_photo}
                  alt="manga"
                />
                <p className="text-slate-600">{manga.title}</p>
              </div>
            ))
          : null}
      </div>
    </>
  );
};

export default MangasAll;

function NewManga() {
    return (
        <>
            <div
                className="bg-white cursor-pointer relative w-[290px] h-[160px] lg:w-[420px] lg:h-[210px] m-3 flex justify-between items-center rounded-lg drop-shadow-md"
            >
                <div
                    className="h-5/6 w-2 bg-black"
                ></div>
                <div className="flex flex-col">
                    <div className="text-sm lg:text-xl font-bold absolute top-8 left-6">
                        New Manga
                    </div>
                </div>
                <div className="w-1/3">
                    <img
                        className="h-[160px] lg:h-[210px]  object-cover rounded-l-full"
                        src="public/img/newManga.webp"
                        alt=""
                    />
                </div>
            </div>
        </>
    )
}

export default NewManga
import flechaManga from '../../public/img/FlechaManga.svg'

const MangaPage = () => {
return (
        <div className='w-full h-4/6 mt-5 flex items-center justify-center'>
            <img className="absolute left-5 bg-white rounded-full p-2 opacity-50" src={flechaManga} alt="" />
            <img className='w-96 h-full' src="" alt="" />
            <img className="rotate-180 absolute right-5 bg-white rounded-full p-2 opacity-50" src={flechaManga} alt="" />
        </div>
    )
}

export default MangaPage
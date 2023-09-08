const Chapter = () => {
  return (
    <div className="h-screen">
      <div className="h-1/6 bg-orange-500 flex justify-between">
        <img src="/img/Menu.svg" alt="" />
        <img className="h-16 justify-center items-center self-center m-2" src="/img/雪.png" alt="" />
      </div>
      <div className="flex items-center w-1/2 absolute z-0 top-0 h-screen pt-20">
        <img className="" src="public/img/FlechaManga.svg" alt="" />
      </div>
      <img src="public/img/Rectangle 50.png" alt="" />  
      <div className="flex items-center w-1/6 absolute z-0 right-0 h-screen pt-20">
        <img className="rotate-180" src="public/img/FlechaManga.svg" alt=""/>
      </div> 
    </div>
  ) ;
};

export default Chapter;
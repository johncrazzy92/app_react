import { useEffect, useState } from "react";
import axios from "axios";
import ArrowNext from "./ArrowNext";
import ArrowBack from "./ArrowBack";

const Carousel = () => {
  const [categories, setCategories] = useState([]);

  async function getCategoriesData(){
    try {
      let {data} = await axios("http://localhost:8080/categories")
      setCategories(data.response)
      
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(()=>{
    getCategoriesData()
  
  },[])
  
  let [counter, setCounter] = useState(0);
  let next = () =>
    counter < categories.length - 1 ? setCounter(counter + 1) : setCounter(0);
  let back = () =>
    counter <= categories.length - 1 && counter > 0
      ? setCounter(counter - 1)
      : setCounter(categories.length - 1);
  return (
    <div className=" p-12 flex-col w-full  bg-white  hidden  lg:flex ">
      <div
        className="w-100 flex   justify-between items-center p-8"
        style={{ backgroundColor: categories[counter]?.color }}
      >
        <ArrowBack onClick={back} />

        <div className="absolute flex gap-14">
          <img
            src={categories[counter]?.character_photo}
            alt="Character Image"
            className="relative left-6 h-64 "
          />
          <img
            src={categories[counter]?.cover_photo}
            alt="Manga image"
            className="h-64 hidden rounded xl:block xl:relative bottom-8 left-10"
          />
        </div>
        <div className="flex w-4/5 flex-row-reverse h-48 items-center ">
          <div className="flex w-3/6 flex-col">
            <h2 className="text-left text-lg font-bold inline-flex gap-10 text-white">
              {categories[counter]?.name}
            </h2>
            <p className="text-left text-white leading-2">
              {categories[counter]?.description}
            </p>
          </div>
        </div>
        <ArrowNext onClick={next} />
      </div>
    </div>
  );
};

export default Carousel;

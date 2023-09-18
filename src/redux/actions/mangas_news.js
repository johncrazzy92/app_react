import { createAction } from "@reduxjs/toolkit";

const setMangasNews = createAction( "mangas",(info) => {
  return {
    payload: info,
  };
});

export default setMangasNews
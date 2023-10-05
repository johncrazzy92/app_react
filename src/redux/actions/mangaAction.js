import { createAction } from "@reduxjs/toolkit";

const postOneManga = createAction("postOneManga", (info) => {
  return {
    payload: info,
  };
});

export { postOneManga };

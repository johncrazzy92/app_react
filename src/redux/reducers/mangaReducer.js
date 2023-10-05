import { createReducer } from "@reduxjs/toolkit";
import { postOneManga } from "../actions/mangaAction";

const initialState = {
  mangasPosted: [],
};

const mangaPostReducer = createReducer(initialState, (builder) =>
  builder.addCase(postOneManga, (state, action) => {
    const newState = {
      ...state,
      mangasPosted: [...state.mangasPosted, action.payload],
    };
    return newState;
  })
);

export default mangaPostReducer;

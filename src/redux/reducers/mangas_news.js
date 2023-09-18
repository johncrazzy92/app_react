import { createReducer } from '@reduxjs/toolkit';
import setMangasNew from '../actions/mangas_news';

const initialState = {
  mangas_news: [],
};

const mangasNewsReducer = createReducer(initialState, (builder) =>
  builder

    .addCase(setMangasNew, (state, action) => {
      let nuevoEstado = {
        ...state,
        mangas_news: action.payload.mangas_news
      };
      return nuevoEstado;

    }));

export default mangasNewsReducer;
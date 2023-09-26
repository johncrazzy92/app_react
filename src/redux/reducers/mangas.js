import { createReducer } from "@reduxjs/toolkit";
import action from "../actions/mangas";
const { mymangas, deleteManga, updateManga } = action;
const initialState = {
    mangas: [],
    manga: {},
    loading: false,
    error: null,
};

const myMangasReducer = createReducer(initialState, (builder) => builder
    .addCase(mymangas.fulfilled, (state, action) => {
        state.mangas = action.payload.mangas;
        state.loading = false;
    }).addCase(mymangas.pending, (state, action) => {
        state.loading = true;
    }).addCase(mymangas.rejected, (state, action) => {
        state.error = action.error.message;
    }).addCase(deleteManga.fulfilled, (state, action) => {
        state.mangas = state.mangas.filter((manga) => manga._id !== action.payload.response);
    }).addCase(updateManga.fulfilled, (state, action) => {
        state.mangas = state.mangas.filter((manga) => manga._id !== action.payload.response._id);
        state.mangas = [...state.mangas, action.payload.response];
    }));

export default myMangasReducer;
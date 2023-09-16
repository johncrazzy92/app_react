import { createReducer } from "@reduxjs/toolkit";
import { saveChapter } from "../actions/chapters.js";

const initialState = {
    title: "",
    number: null
}

const chapterReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(saveChapter, (state, action) => {

            const newState = {
                ...state,
                title: action.payload.title,
                number: action.payload.order
            };
            return newState;
        })
})

export default chapterReducer;  
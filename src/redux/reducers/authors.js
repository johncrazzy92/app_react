import { createReducer } from "@reduxjs/toolkit";
import {getAuthors} from "../actions/getAuthors.js";
import { updateActive } from "../actions/updateActive.js";

const initialState = {
    firstReq : false,
    inactive:[],
    active:[]
}

const authors = createReducer(initialState, (builder) => {
    builder
        .addCase(getAuthors.fulfilled, (state, action) => {

            const newState = {
                ...state,
                firstReq:true,
                inactive: action.payload.inactive,
                active:action.payload.active
            };
            return newState;
        })
        .addCase(getAuthors.pending, (state) => {

            const newState = {
                ...state,
            };
            return newState;
        })
        .addCase(updateActive.fulfilled, (state,action)=>{
            let arrayState = [...state.inactive ,...state.active]
            let newArray = arrayState.filter(author => author._id !== action.payload.response._id )
                newArray = [ ...newArray ,action.payload.response]
            let inactive = newArray.filter(author => author.active !== true)
            let active = newArray.filter(author => author.active === true)
            const newState ={
                ...state,
                inactive:inactive,
                active:active
            };
            return newState
        })
        .addCase(updateActive.pending, (state)=>{
            const newState ={
                ...state,
            };
            return newState
        })
})

export default authors;  
import { createReducer } from "@reduxjs/toolkit";
import saveAuthors from "../actions/me_authors.js";
import logoutUser from "../actions/logout.js";
import signinToken from "../actions/session.js";

let initialState = {
    user: {},
    token: "",
}

let authorsReducer = createReducer(initialState, (builder) =>
    builder
        .addCase(saveAuthors, (state, action) => {
            let nuevoEstado = {
                ...state,
                user: action.payload.user,
                token: action.payload.token,

            }
            return nuevoEstado

        })
        .addCase(logoutUser, (state) => {
            let nuevoEstado = {
                ...state,
            user: null,
            token: null,
          }

        return nuevoEstado
    })
    .addCase(signinToken.fulfilled,(state,action)=>{
        console.log(action);
        const newState = {
            ...state,
            user: action.payload.user,
            token: action.payload.token,
        }
        return newState
    })
    .addCase(signinToken.pending,(state)=>{
        
        const newState = {
            ...state
        };
        return newState;
    })
)

export default authorsReducer
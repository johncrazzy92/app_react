import { createReducer } from "@reduxjs/toolkit";
import saveAuthors from "../actions/me_authors.js";
import logoutUser from "../actions/logout.js";

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
)

export default authorsReducer
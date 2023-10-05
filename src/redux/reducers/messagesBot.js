import { createReducer } from "@reduxjs/toolkit";
import messagesBot from "../actions/messagesBot";
import messageBot from "../actions/messageBot";

const initialState = {
    messages: [{ value: 'Buenas!, Soy Mingabot :) Estoy aqui para darte mas detalles acerca de nuestros Mangas.', id: 'bot' }],
    msg: ''
};

const messagesBotReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(messagesBot, (state, action) => {
            const newState = {
                ...state,
                messages: [...state.messages, action.payload]
            };
            return newState;
        })
        .addCase(messageBot, (state, action) => {
            const newState = {
                ...state,
                msg: action.payload
            };
            return newState;
        });
});

export default messagesBotReducer;

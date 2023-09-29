import { createReducer } from "@reduxjs/toolkit";
import { messagesBot } from "../actions/messagesBot.js";

const initialState = {
    messages: [{ value: 'Hi, there! I\'m Mingabot :) How can I help you?', id: 'bot' }]
};

const messagesBotReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(messagesBot, (state, action) => {
            return {
                ...state,
                messages: [...state.messages, { value: action.payload, id: 'user' }]
            };
        });
});

export default messagesBotReducer;

import { createReducer } from "@reduxjs/toolkit";
import { messageBot } from "../actions/messagesBot.js";

const initialState = {
    messages: [{ value: 'Hi, there! I\'m Mingabot :) How can I help you?', id: 'bot' }]
};

const messagesBotReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(messageBot, (state, action) => {
            return {
                ...state,
                messages: [...state.messages, { value: action.payload, id: 'user' }]
            };
        });
});

export default messagesBotReducer;

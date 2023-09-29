import { createReducer } from "@reduxjs/toolkit";

import { messageBot } from "../actions/messagesBot";

const initialState = {
    messages: [],
    message: "",
}
const messagesBotReducer = createReducer(initialState, (builder) => builder
    .addCase(messageBot, (state, action) => {
        const newState = {
            ...state,
        }
        if (action.payload.messages) {
            newState.messages = action.payload.messages;
        }
        if (action.payload.message) {
            newState.message = action.payload.message;
        }
        return newState;
    }))
export default messagesBotReducer;

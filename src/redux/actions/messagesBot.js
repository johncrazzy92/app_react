import { createAction } from "@reduxjs/toolkit";

const messagesBot = createAction("messageBot", (messages) => {
    return {
        payload: messages
    }
});
export default messagesBot
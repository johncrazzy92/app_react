import { createAction } from "@reduxjs/toolkit";

const messageBot = createAction("messageBot", (messages) => {
    return {
        payload: messages
    }
});
export default messageBot
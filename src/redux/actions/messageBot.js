import { createAction } from "@reduxjs/toolkit";

const messageBot = createAction("messageBot", (msg) => {
    return {
        payload: msg
    }
});

export default messageBot
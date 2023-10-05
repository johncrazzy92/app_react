import { createAction } from "@reduxjs/toolkit";

const messagesBot = createAction("messagesBot", (messages) => {
    return {
        payload: messages
    }
});
export default messagesBot
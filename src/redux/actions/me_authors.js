import { createAction } from "@reduxjs/toolkit";

const saveAuthors = createAction("saveAuthor", (info) => {
    return {
        payload: info
    }
})

export default saveAuthors
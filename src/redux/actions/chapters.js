import { createAction } from "@reduxjs/toolkit";

const saveChapter = createAction("saveChapter", (info) => {
    return {
        payload: info
    }
})
export { saveChapter }





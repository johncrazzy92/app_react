import { configureStore } from "@reduxjs/toolkit";
import me_authorsReducer from "./reducers/me_authorsReducer.js"
import mangas_news from "./reducers/mangas_news.js"


export let store = configureStore({
    reducer: {
        me_authorsReducer,
        mangas_news,
    }
})

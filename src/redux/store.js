
import { configureStore } from '@reduxjs/toolkit'
import mangasReducer from './reducers/mangasReducer.js'
import chapterReducer from './reducers/chapters.js'
import me_authorsReducer from "./reducers/me_authorsReducer.js"
import mangas_news from "./reducers/mangas_news.js"
import mangaPostReducer from "./reducers/mangaReducer.js"

export const store = configureStore({
    reducer: {
        chapterReducer,
        mangas: mangasReducer,
        me_authorsReducer,
        mangas_news,
        mangaPostReducer,
    }
})


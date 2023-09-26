
import { configureStore } from '@reduxjs/toolkit'
import mangasReducer from './reducers/mangasReducer.js'
import chapterReducer from './reducers/chapters.js'
import me_authorsReducer from "./reducers/me_authorsReducer.js"
import mangas_news from "./reducers/mangas_news.js"
import chapterReducerEdit from './reducers/chapterReducer.js'
import authors from "./reducers/authors.js"
export const store = configureStore({
    reducer: {
        chapter: chapterReducer,
        mangas: mangasReducer,
        me_authorsReducer,
        mangas_news,
        chapterReducerEdit,
        authors,
    }
})


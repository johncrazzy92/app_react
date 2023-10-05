import { configureStore } from '@reduxjs/toolkit'
import mangasReducer from './reducers/mangasReducer.js'
import chapterReducer from './reducers/chapters.js'
import me_authorsReducer from "./reducers/me_authorsReducer.js"
import mangas_news from "./reducers/mangas_news.js"
import mangaPostReducer from "./reducers/mangaReducer.js"
import commentReducer from "./reducers/commentReducer.js"
import myMangasReducer from './reducers/mangas.js'
import chapterReducerEdit from './reducers/chapterReducer.js'
import authors from "./reducers/authors.js"
import messagesBotReducer from './reducers/messagesBot.js'

export const store = configureStore({
    reducer: {
        chapter: chapterReducer,
        mangas: mangasReducer,
        me_authorsReducer,
        mangas_news,
        mangaPostReducer,
        commentReducer,
        chapterReducerEdit,
        myMangasReducer,
        authors,
        messagesBotReducer,
    }
})


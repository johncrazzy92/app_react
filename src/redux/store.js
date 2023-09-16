import { configureStore } from '@reduxjs/toolkit'
import mangasReducer from './reducers/mangasReducer.js'
import chapterReducer from './reducers/chapters.js'

export const store = configureStore({
    reducer: {
        chapterReducer,
        mangas: mangasReducer
    }
})


import { configureStore } from '@reduxjs/toolkit'
import chapterReducer from './reducers/chapters'


export const store = configureStore({
  reducer: {
    chapterReducer
  },
})
console.log(store.getState())
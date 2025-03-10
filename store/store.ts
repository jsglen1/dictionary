import {configureStore} from '@reduxjs/toolkit'
import wordReducer from '@/store/word/wordSlice'
import fontReducer from '@/store/font/fontSlice'

export const store = configureStore({
  reducer: {
    word: wordReducer,
    font: fontReducer,
  },
})


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
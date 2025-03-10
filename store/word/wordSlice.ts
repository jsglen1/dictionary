import {createSlice} from '@reduxjs/toolkit'
import type {PayloadAction} from '@reduxjs/toolkit'
import {WordResponse} from "@/interfaces/word.interface";

export interface WordState {
  word: WordResponse
}

const initialState: WordState = {
  word: []
}

export const wordSlice = createSlice({
  name: 'word',
  initialState,
  reducers: {
    onChangeWord: (state, action: PayloadAction<WordResponse>) => {
      state.word = action.payload
    }
  },
})


export const {onChangeWord} = wordSlice.actions

export default wordSlice.reducer
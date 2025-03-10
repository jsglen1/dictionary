import {createSlice} from '@reduxjs/toolkit'
import type {PayloadAction} from '@reduxjs/toolkit'
import {WordResponse} from "@/interfaces/word.interface";

export interface WordState {
  word: WordResponse
  wordHistory: string[]
}

const loadHistoryFromLocalStorage = (): string[] => {
  if (typeof window !== "undefined") {
    const storedHistory = localStorage.getItem("wordHistory");
    return storedHistory ? JSON.parse(storedHistory) : [];
  }
  return [];
};

const initialState: WordState = {
  word: [],
  wordHistory: loadHistoryFromLocalStorage()
}

export const wordSlice = createSlice({
  name: 'word',
  initialState,
  reducers: {
    onChangeWord: (state, action: PayloadAction<WordResponse>) => {
      state.word = action.payload
    },
    addWordToHistory: (state, action: PayloadAction<string>) => {
      const word = action.payload.trim().toLowerCase();

      if (!state.wordHistory.includes(word)) {
        state.wordHistory = [word, ...state.wordHistory].slice(0, 5);
        localStorage.setItem("wordHistory", JSON.stringify(state.wordHistory));
      }
    },
    clearHistory: (state) => {
      state.wordHistory = [];
      localStorage.removeItem("wordHistory"); // 🔹 Limpia el localStorage
    },
  },
})


export const {onChangeWord, clearHistory, addWordToHistory} = wordSlice.actions

export default wordSlice.reducer
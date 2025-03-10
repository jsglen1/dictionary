import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Font = "sans-serif" | "serif" | "monospace";

interface FontState {
  font: Font;
}

const initialState: FontState = {
  font: (typeof window !== "undefined" && (localStorage.getItem("font") as Font)) || "sans-serif",
};

const fontSlice = createSlice({
  name: "font",
  initialState,
  reducers: {
    setFont: (state, action: PayloadAction<Font>) => {
      state.font = action.payload;
      if (typeof window !== "undefined") {
        localStorage.setItem("font", action.payload);
      }
      document.documentElement.style.setProperty("--font-primary", `var(--font-${action.payload})`);
    },
  },
});

export const { setFont } = fontSlice.actions;
export default fontSlice.reducer;

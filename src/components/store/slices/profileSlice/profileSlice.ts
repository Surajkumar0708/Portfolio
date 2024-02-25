import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  voicePopupVisible: false,
};

const profileSlice = createSlice({
  name: "profileSlice",
  initialState,
  reducers: {
    setVoicePopupVisible: (state, { payload }) => {
      return { ...state, voicePopupVisible: payload };
    },
  },
});

export const profileActions = profileSlice.actions;
export const profileReducer = profileSlice.reducer;

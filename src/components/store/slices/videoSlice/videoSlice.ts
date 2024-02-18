import { createSlice } from "@reduxjs/toolkit";

export interface InitialState {
  isVideoPlay: boolean;
  isMiniPlayer: boolean;
  isFirstTime: boolean;
}

const initialState: InitialState = {
  isVideoPlay: false,
  isMiniPlayer: false,
  isFirstTime: false,
};

const videoSlice = createSlice({
  name: "videoSlice",
  initialState,
  reducers: {
    setVideoToPlay: (state, action) => ({
      ...state,
      isVideoPlay: action.payload,
    }),
    setVideoToMiniPlayer: (state, action) => ({
      ...state,
      isMiniPlayer: action.payload,
    }),
    setVideoToStop: (state, action) => ({
      ...state,
      isVideoPlay: action.payload,
      isMiniPlayer: false,
    }),
    setFirstTime: (state, action) => ({
      ...state,
      isFirstTime: action.payload,
    }),
  },
});

export const videoActions = videoSlice.actions;
const videoReducer = videoSlice.reducer;
export default videoReducer;

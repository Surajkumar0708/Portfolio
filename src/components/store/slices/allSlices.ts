import { combineReducers } from "@reduxjs/toolkit";
import jokeReducer from "./jokesSlice/jokeSlice";
import videoReducer from "./videoSlice/videoSlice";
import { profileReducer } from "./profileSlice/profileSlice";
import { customizationSliceReducer } from "./customizationSlice/customizationSlice";

const allSlices = combineReducers({
  jokeSlice: jokeReducer,
  videoSlice: videoReducer,
  custSlice: customizationSliceReducer,
  profileSlice: profileReducer,
});

export default allSlices;

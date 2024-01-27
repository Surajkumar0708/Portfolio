
import { combineReducers } from "@reduxjs/toolkit"
import jokeReducer from "./jokesSlice/jokeSlice"
import videoReducer from "./videoSlice/videoSlice";
import { customizationSliceReducer } from "./customizationSlice/customizationSlice";

const allSlices = combineReducers({
    jokeSlice: jokeReducer,
    videoSlice: videoReducer,
    custSlice: customizationSliceReducer
})

export default allSlices;
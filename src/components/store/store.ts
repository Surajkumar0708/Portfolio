"use client"
import { configureStore } from "@reduxjs/toolkit";
import allSlices from "./slices/allSlices";

const store = configureStore({
    reducer: allSlices
})

export default store
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  formValues: {
    headerColor: "",
    headerLogoName: "",
    headerTextColor: "",
    reOrderNavLinks: "",
    profilePic: "",
    bodyColor: "",
    bodyTextColor: "",
  },
};

const customizationSlice = createSlice({
  name: "customizationSlice",
  initialState,
  reducers: {
    setCustFormVal: (state, action) => {
      return { ...state, formValues: action.payload };
    },
    resetCustFormVal: (state, action) => {
      return { ...state, formValues: action.payload };
    },
  },
});

export const customizationSliceActions = customizationSlice.actions;
export const customizationSliceReducer = customizationSlice.reducer;

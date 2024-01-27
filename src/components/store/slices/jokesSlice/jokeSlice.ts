import { createSlice } from "@reduxjs/toolkit";

export interface InitialState {
    currentJoke: null | any,
    allJokes: any,
    isLoading: boolean
}

const initialState: InitialState = {
    currentJoke: {},
    allJokes: [],
    isLoading: false
}

const jokeSlice = createSlice({
    name: "jokeSlice",
    initialState,
    reducers: {
        setCurrentJokes: (state, action) => ({
            ...state,
            currentJoke: action.payload
        }),
        setLoading: (state, action) => ({ ...state, isLoading: action.payload }),
        clearJokes: (state) => {
            return {
                ...state,
                currentJoke: {},
                allJokes: []
            }
        }
    }
})

export const jokeActions = jokeSlice.actions
const jokeReducer = jokeSlice.reducer
export default jokeReducer;
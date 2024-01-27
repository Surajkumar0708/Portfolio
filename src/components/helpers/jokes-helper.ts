import axios from "axios"
import { jokeActions } from "../store/slices/jokesSlice/jokeSlice";

export const getJokes = async (dispatch: any, is18Plus?: boolean) => {
    const param = is18Plus ? "?contains=sex" : ""
    dispatch(jokeActions.setLoading(true))
    const res = await axios.get(`https://v2.jokeapi.dev/joke/Any${param}`);
    if (res.status === 200) {
        dispatch(jokeActions.setCurrentJokes(res.data))
    }
    dispatch(jokeActions.setLoading(false))
}
"use client";
import { getJokes } from "@/components/helpers/jokes-helper";
import { jokeActions } from "@/components/store/slices/jokesSlice/jokeSlice";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

import "./jokes.css";

const Jokes = () => {
  const jokeData = useSelector<any>((state) => state.jokeSlice);
  const { currentJoke, isLoading }: any = jokeData;
  const dispatch = useDispatch();

  const jokeTypes = (joke: any) => {
    if (joke?.setup) {
      return (
        <div>
          <h2>Setup - {joke?.setup}</h2>
          <h2>Delivery - {joke?.delivery}</h2>
        </div>
      );
    } else {
      return <div>{joke?.joke}</div>;
    }
  };

  const getDailyJokes = (e: any) => {
    const { name } = e.target;
    getJokes(dispatch, name);
  };

  React.useEffect(() => {
    return (): any => {
      dispatch(jokeActions.clearJokes());
    };
  }, []);
  return (
    <div className="jokes_container">
      <div className="jokes_btn">
        <button onClick={getDailyJokes}>get Jokes</button>
        <button name="18+" onClick={getDailyJokes}>
          get 18 +Jokes
        </button>
      </div>
      <h1>Jokes</h1>
      {isLoading && <p className="loading_joke">Loading...</p>}
      {!isLoading && (
        <div className="jokes_data">
          <h2>{jokeTypes(currentJoke)}</h2>
        </div>
      )}
    </div>
  );
};

export default Jokes;

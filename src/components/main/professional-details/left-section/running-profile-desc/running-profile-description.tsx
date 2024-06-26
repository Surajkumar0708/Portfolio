"use client";
import React from "react";
import strings from "../../../../../strings.json";

import "./running-profile-description.css";
import { useSelector } from "react-redux";

const RunningProfileDescription: React.FC = () => {
  const [name, setName] = React.useState<string>("");
  const [currentIndex, setCurrentIndex] = React.useState<number>(0);
  const [paraIsCompleted, setParaIsCompleted] = React.useState<boolean>(false);
  const websiteVal = useSelector((state: any) => state.custSlice.formValues);

  const paraToPreview = paraIsCompleted
    ? websiteVal?.text2 ?? strings.profileDes2
    : websiteVal?.text1 ?? strings.profileDes1;
  const writingLetters = (text: string, index: number) => {
    if (index <= text.length) {
      const delay = text[index] === " " ? 0 : 200;
      const timerId = setTimeout(() => {
        setName((prev) => `${prev}${text[index]}`);
        setCurrentIndex(currentIndex + 1);
      }, delay);
      return timerId;
    } else {
      setName("");
      setCurrentIndex(0);
      setParaIsCompleted((prev) => !prev);
    }
  };

  React.useEffect(() => {
    const timerId = writingLetters(paraToPreview, currentIndex);
    return () => {
      clearTimeout(timerId);
    };
  }, [currentIndex, strings.profileDes1]);
  return <h1 className="running_desc">{name}</h1>;
};

export default RunningProfileDescription;

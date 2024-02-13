"use client";
import React from "react";
import PlayAreaCard from "@/components/playarea/playarea-card";
import Jokes from "./jokes/page";
import GenerateForm from "./generateForm/page";
import Link from "next/link";
import jokeImage from "../../../public/Joke.jpg";
import tictactoe from "../../../public/tictactoe.jpg";
import formImage from "../../../public/formImage.svg";
import carousal from "../../../public/carousel.jpg";
import strings from "../../strings.json";

import "./playarea.css";
import Image from "next/image";
import { useSelector } from "react-redux";
const playAreaContent = [
  // {
  //   id: 1,
  //   name: "tic-tac-toe",
  //   Component: PlayAreaCard,
  //   imagePath: tictactoe,
  //   path: "/playarea/tic-tac-toe",
  // },
  {
    id: 2,
    name: "Jokes",
    Component: Jokes,
    imagePath: jokeImage,
    path: "/playarea/jokes",
  },
  {
    id: 2,
    name: "Genarate Form",
    Component: GenerateForm,
    imagePath: formImage,
    path: "/playarea/generateForm",
  },
  {
    id: 2,
    name: "Image Carousal",
    Component: PlayAreaCard,
    imagePath: carousal,
    path: "/playarea/imageCarousal",
  },
  {
    id: 2,
    name: "Customization this WEBSITE",
    Component: PlayAreaCard,
    imagePath: formImage,
    path: "/playarea/customization",
  },
];
const PlayArea = () => {
  const { bodyColor, bodyTextColor } = useSelector(
    (state: any) => state.custSlice.formValues
  );
  return (
    <section
      style={{ backgroundColor: bodyColor, color: bodyTextColor }}
      className="play_area_content"
    >
      {playAreaContent.map(({ id, name, path, imagePath }) => {
        return (
          <div className="play-card" key={id}>
            <div className="play-card-head">
              <h1>{name}</h1>
            </div>
            <div className="play-image-container">
              {imagePath && (
                <Image
                  className="card_img"
                  width={300}
                  src={imagePath}
                  alt={`${imagePath}`}
                />
              )}
            </div>
            <div className="btn-group">
              <Link
                className="btn"
                href={path}
              >{`${strings.goTo} ${name}`}</Link>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default PlayArea;

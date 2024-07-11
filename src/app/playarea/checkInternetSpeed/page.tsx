"use client";
import "regenerator-runtime/runtime";
import React from "react";
import { Container, TestBtn } from "./styledComponent";
const filePath =
  "https://e.rpp-noticias.io/xlarge/2024/05/04/175617_1576945.webp";
const fileSizeInBytes = 1048576;

const InternetSpeedTest = () => {
  const [downloadSpeed, setDownloadSpeed] = React.useState<string | number>();
  const [uploadSpeed, setUploadSpeed] = React.useState();
  const checkSpeed = async () => {
    const startTime = new Date().getTime();
    try {
      const res = await fetch(filePath);
      const endTime = new Date().getTime();
      const blob = await res.blob();
      const duration = (endTime - startTime) / 1000;
      const bitsLoaded = fileSizeInBytes * 8;
      const speedBps = bitsLoaded / duration;
      const speedKbps = speedBps / 1024;
      const speedMbps = speedKbps / 1024;
      setDownloadSpeed(speedMbps.toFixed(2));
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <Container>
      <TestBtn onClick={checkSpeed}>test</TestBtn>
      <h2>Your donwload speed is {downloadSpeed} MB/s</h2>
    </Container>
  );
};

export default InternetSpeedTest;

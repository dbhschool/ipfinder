import Content from "@/components/Content";
import React, { useEffect } from "react";

const MainPage = async () => {
  const res = await fetch("https://api.ipify.org/?format=json");
  const deviceIp = await res.json();
  console.log(deviceIp);
  //geo.ipify.org/api/v2/country,city?apiKey=at_G1x2TOpSVQuxrkWueEt76HvxGM1Fc&ipAddress=8.8.8.8

  // const ipres = await fetch("https://geo.ipify.org/api/v2/country,city?apiKey=at_G1x2TOpSVQuxrkWueEt76HvxGM1Fc&ipAddress=8.8.8.8");

  return (
    <div className="max-w-screen-xl mx-auto h-full">
      <Content deviceIp={deviceIp.ip} />
    </div>
  );
};

export default MainPage;

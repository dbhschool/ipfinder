"use client";
import { useEffect, useState } from "react";
import InputForm from "./InputForm";
import Map from "./Map";
import CardContent from "./CardContent";

const Content = ({ deviceIp }: { deviceIp: string }) => {
  console.log(deviceIp);
  const [ipData, setIpData] = useState<any>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getCurrentUserData = async () => {
      setIsLoading(true);
      const res = await fetch(`https://ipapi.co/${deviceIp}/json/`);

      setIpData(res);
      setIsLoading(false);
    };
    getCurrentUserData();
  }, []);

  console.log(ipData);
  //   useEffect(() => {
  //     const Data = {
  //       ip: "103.118.77.125",
  //       location: {
  //         country: "BD",
  //         region: "Rājshāhi Division",
  //         city: "Faridpur U",
  //         lat: 24.15833,
  //         lng: 89.45333,
  //         postalCode: "",
  //         timezone: "+06:00",
  //         geonameId: 10376568,
  //       },
  //       as: {
  //         asn: 137959,
  //         name: "VTL-AS-AP",
  //         route: "103.118.77.0/24",
  //         domain: "http://www.visiontechnologiesltd.com/",
  //         type: "Cable/DSL/ISP",
  //       },
  //       isp: "VTL Network",
  //     };
  //     setIpData(Data);
  //   }, []);

  if (isLoading) {
    return <span>Loading...</span>;
  }
  return (
    <section className="flex h-full">
      {/* left  */}
      <div className=" flex-[2] mt-10">
        <h1 className="text-3xl font-semibold mb-4">
          What is My IP Location? | Geolocation
        </h1>
        {/* inputForm  */}
        <InputForm setIpData={setIpData} />
        {/* cardContent */}
        {ipData && <CardContent ipData={ipData} />}
      </div>
      {/* right */}
      <div className="flex-1 p-4 my-8 h-full">
        {ipData && <Map location={ipData} />}
      </div>
    </section>
  );
};

export default Content;

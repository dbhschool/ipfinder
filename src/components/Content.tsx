"use client";
import { useEffect, useState } from "react";
import InputForm from "./InputForm";
import Map from "./Map";
import CardContent from "./CardContent";

const Content = ({ deviceIp }: { deviceIp: string }) => {
  console.log(deviceIp);
  const [IpData, setIpData] = useState<any>();
  const [isLoading, setIsLoading] = useState(false);
  console.log(IpData);
  useEffect(() => {
    const getCurrentUserData = async () => {
      setIsLoading(true);
      const res = await fetch(
        `https://geo.ipify.org/api/v2/country,city?apiKey=${process.env.NEXT_PUBLIC_IPFY_API_KEY}&ipAddress=${deviceIp}`
      );
      const data = await res.json();
      setIpData(data);
      setIsLoading(false);
    };
    getCurrentUserData();
  }, []);

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
        {IpData && <CardContent IpData={IpData} />}
      </div>
      {/* right */}
      <div className="flex-1 p-4 my-8 h-full">
        {IpData && <Map location={IpData.location} />}
      </div>
    </section>
  );
};

export default Content;

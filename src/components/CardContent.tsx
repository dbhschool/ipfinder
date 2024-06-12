import React from "react";

const CardContent = ({ ipData }) => {
  console.log(ipData);
  return (
    <div className=" ring-1 ring-orange-400/30 my-4 rounded-md h-[50%] overflow-hidden">
      <div className="h-12 w-full bg-orange-500 flex items-center p-4 text-white font-semibold">
        Ip Address Details
      </div>
      <div className="flex gap-4 flex-col p-4 ">
        <div>
          <span>Ip: {ipData.ip}</span>
        </div>
        <div>
          <span>Country: {ipData.country_name} </span>
        </div>
        <div>
          <span>Region: {ipData.region} </span>
        </div>
        <div>
          <span>ISP: {ipData.org} </span>
        </div>
      </div>
    </div>
  );
};

export default CardContent;

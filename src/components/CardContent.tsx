import React from "react";

const CardContent = ({ IpData }) => {
  return (
    <div className="p-4 ring-1 ring-orange-400/30 my-4 rounded-md">
      CardContent
      <div>
        <span>Ip: {IpData.ip}</span>
        <span>Country: {IpData.location.country} </span>
        <span>region: {IpData.location.region} </span>
        <span>city: {IpData.location.city} </span>
      </div>
    </div>
  );
};

export default CardContent;

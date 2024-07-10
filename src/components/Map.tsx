"use client";
import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import Markerposition from "./Marker";
export type locationType = {
  location: {
    country: string;
    region: string;
    city: string;
    latitude: number;
    longitude: number;
    postalCode: string;
    timezone: string;
    geonameId: number;
  };
};
const Map = ({ location }: locationType) => {
  console.log(location);
  // const position = [location.latitude, location.longitude];
  const position = [51.505, -0.09];
  console.log(position);
  return (
    <div className=" w-full h-[80%]">
      <MapContainer
        center={position}
        zoom={13}
        scrollWheelZoom={true}
        className="h-full w-full"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Markerposition location={location} />
      </MapContainer>
    </div>
  );
};

export default Map;

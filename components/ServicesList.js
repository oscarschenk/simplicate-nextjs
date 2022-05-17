import React, { useState } from "react";
import { data } from "../public/data.js";
import { Switch } from "@nextui-org/react";

export default function ServicesList(toggled) {
  const serviceItems = data.map((item) => {
    return (
      <div
        key={item.dienst}
        className="py-4 px-8 rounded-lg transition ease-in-out delay-20 bg-sky-500 hover:-translate-y-1 hover:scale-105 hover:bg-violet-400 duration-300 cursor-pointer shadow-2xl flex flex-row justify-between"
      >
        <p>{item.dienst}</p>
        <Switch size="sm" color="warning" />
      </div>
    );
  });
  return serviceItems;
}

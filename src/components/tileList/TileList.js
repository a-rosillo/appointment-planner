import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = ({ entries }) => {
  return (
    entries.map((info, index) => {
      const { name, ...description } = info;
      return(
        <Tile 
          name={name}
          description={description}
          key={index}
        />
      )
    })
  );
};

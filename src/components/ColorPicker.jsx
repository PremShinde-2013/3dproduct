/* eslint-disable no-unused-vars */
import React from "react";

import { SketchPicker } from "react-color";
import { useSnapshot } from "valtio";
import state from "../store";
import { color } from "framer-motion";

const ColorPicker = () => {
  const snap = useSnapshot(state);
  return (
    <div className='absolute left-full ml-3'>
      <SketchPicker
        color={snap.color}
        disableAlpha
        presetColors={[
          "#000000",
          "#0000FF",
          "#808080",
          "#008000",
          "	#800080",
          "	#FF0000",
          "	#FFFFFF",
          "#B22222",
          "#FF69B4",
          "	#FFFACD",
          "#F0F8FF",
          "#FF7F50",
        ]}
        onChange={(color) => (state.color = color.hex)}
      />
    </div>
  );
};

export default ColorPicker;

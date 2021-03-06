import * as React from "react";
import Svg, { Path } from "react-native-svg";

const UndoIcon = () => {
  return (
    <Svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M10 17L4 11L10 5"
        stroke="white"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M10 25H21C22.8565 25 24.637 24.2625 25.9497 22.9497C27.2625 21.637 28 19.8565 28 18V18C28 17.0807 27.8189 16.1705 27.4672 15.3212C27.1154 14.4719 26.5998 13.7003 25.9498 13.0502C25.2997 12.4002 24.5281 11.8846 23.6788 11.5328C22.8295 11.1811 21.9193 11 21 11H4"
        stroke="white"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export default UndoIcon;

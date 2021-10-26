import * as React from "react";
import Svg, { Path } from "react-native-svg";

const UnblurSeenIcon = () => {
  return (
    <Svg
      width="38"
      height="38"
      viewBox="0 0 38 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M15 33C22.732 33 29 26.732 29 19C29 11.268 22.732 5 15 5C7.26801 5 1 11.268 1 19C1 26.732 7.26801 33 15 33Z"
        stroke="white"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M25 29L33 37"
        stroke="white"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M29.5 14.875C33.0208 14.875 35.875 12.0208 35.875 8.5C35.875 4.97918 33.0208 2.125 29.5 2.125C25.9792 2.125 23.125 4.97918 23.125 8.5C23.125 12.0208 25.9792 14.875 29.5 14.875Z"
        fill="white"
      />
      <Path
        d="M32.4219 6.90625L28.526 10.625L26.5781 8.76562"
        stroke="black"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export default UnblurSeenIcon;

import * as React from "react";
import Svg, { Circle, G, Path, Rect } from "react-native-svg";

const PlayIcon = () => {
  return (
    <Svg
      width="80"
      height="80"
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M40 80C62.0914 80 80 62.0914 80 40C80 17.9086 62.0914 0 40 0C17.9086 0 0 17.9086 0 40C0 62.0914 17.9086 80 40 80ZM33.9021 25.1834L56.4017 38.9333C56.5845 39.045 56.7355 39.2017 56.8402 39.3885C56.945 39.5753 57 39.7858 57 40C57 40.2142 56.945 40.4247 56.8402 40.6115C56.7355 40.7983 56.5845 40.955 56.4017 41.0667L33.9021 54.8166C33.7126 54.9324 33.4957 54.9956 33.2736 54.9998C33.0515 55.0039 32.8324 54.9489 32.6387 54.8402C32.4449 54.7316 32.2837 54.5733 32.1714 54.3817C32.0592 54.19 32 53.9719 32 53.7499V26.2501C32 26.0281 32.0592 25.81 32.1714 25.6183C32.2837 25.4267 32.4449 25.2684 32.6387 25.1598C32.8324 25.0511 33.0515 24.9961 33.2736 25.0002C33.4957 25.0044 33.7126 25.0676 33.9021 25.1834Z"
        fill="white"
      />
    </Svg>
  );
};

const PauseIcon = () => {
  return (
    <Svg
      width="80"
      height="80"
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M80 40C80 62.0914 62.0914 80 40 80C17.9086 80 0 62.0914 0 40C0 17.9086 17.9086 0 40 0C62.0914 0 80 17.9086 80 40ZM27.5713 22.7148C27.5713 22.1626 28.019 21.7148 28.5713 21.7148H34.5713C35.1236 21.7148 35.5713 22.1626 35.5713 22.7148V57.2863C35.5713 57.8386 35.1236 58.2863 34.5713 58.2863H28.5713C28.019 58.2863 27.5713 57.8386 27.5713 57.2863V22.7148ZM45.4287 21.7148C44.8764 21.7148 44.4287 22.1626 44.4287 22.7148V57.2863C44.4287 57.8386 44.8764 58.2863 45.4287 58.2863H51.4287C51.981 58.2863 52.4287 57.8386 52.4287 57.2863V22.7148C52.4287 22.1626 51.981 21.7148 51.4287 21.7148H45.4287Z"
        fill="white"
      />
    </Svg>
  );
};

const NextIcon = () => {
  return (
    <Svg
      width="32"
      height="35"
      viewBox="0 0 32 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M1 2.13149C1 1.33019 1.89532 0.854338 2.55947 1.30264L24.7721 16.2962C25.3594 16.6926 25.3594 17.5574 24.7721 17.9538L2.55947 32.9474C1.89532 33.3957 1 32.9198 1 32.1185L1 2.13149Z"
        fill="white"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Rect
        x="31.5"
        y="34"
        width="6"
        height="34"
        rx="1"
        transform="rotate(180 31.5 34)"
        fill="white"
      />
    </Svg>
  );
};

const NextFadedIcon = () => {
  return (
    <Svg
      width="32"
      height="35"
      viewBox="0 0 32 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <G opacity="0.2">
        <Path
          d="M1 2.13149C1 1.33019 1.89532 0.854338 2.55947 1.30264L24.7721 16.2962C25.3594 16.6926 25.3594 17.5574 24.7721 17.9538L2.55947 32.9474C1.89532 33.3957 1 32.9198 1 32.1185L1 2.13149Z"
          fill="white"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Rect
          x="31.5"
          y="34"
          width="6"
          height="34"
          rx="1"
          transform="rotate(180 31.5 34)"
          fill="white"
        />
      </G>
    </Svg>
  );
};

const PreviousIcon = () => {
  return (
    <Svg
      width="32"
      height="35"
      viewBox="0 0 32 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M30.5 32.8685C30.5 33.6698 29.6047 34.1457 28.9405 33.6974L6.72793 18.7038C6.14056 18.3074 6.14055 17.4426 6.72792 17.0462L28.9405 2.05264C29.6047 1.60434 30.5 2.08019 30.5 2.88149L30.5 32.8685Z"
        fill="white"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Rect y="1" width="6" height="34" rx="1" fill="white" />
    </Svg>
  );
};

const SkipIcon = () => {
  return (
    <Svg
      width="47"
      height="47"
      viewBox="0 0 47 47"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M46 1L1 46"
        stroke="white"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M46 46L1 1"
        stroke="white"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

const SkippedPressedIcon = () => {
  return (
    <Svg
      width="74"
      height="74"
      viewBox="0 0 74 74"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Circle cx="37" cy="37" r="37" fill="white" fill-opacity="0.2" />
      <Path
        d="M59 15L14 60"
        stroke="white"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M59 60L14 15"
        stroke="white"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

const LikeIcon = () => {
  return (
    <Svg
      width="52"
      height="45"
      viewBox="0 0 52 45"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M26 44.1818C26 44.1818 1 30.4422 1 13.7583C1.00051 10.8095 2.04163 7.95188 3.94636 5.6713C5.85109 3.39072 8.50185 1.82794 11.448 1.24866C14.3941 0.669383 17.4537 1.10936 20.1066 2.4938C22.7596 3.87823 24.842 6.12166 26 8.84267L26 8.84269C27.1579 6.12168 29.2404 3.87825 31.8934 2.49381C34.5463 1.10937 37.6059 0.669385 40.552 1.24866C43.4981 1.82794 46.1489 3.39072 48.0536 5.6713C49.9584 7.95188 50.9995 10.8095 51 13.7583C51 30.4422 26 44.1818 26 44.1818Z"
        stroke="white"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

const LikePressedIcon = () => {
  return (
    <Svg
      width="74"
      height="74"
      viewBox="0 0 74 74"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Circle cx="37" cy="37" r="37" fill="white" fill-opacity="0.2" />
      <Path
        d="M38 61.1818C38 61.1818 13 47.4422 13 30.7583C13.0005 27.8095 14.0416 24.9519 15.9464 22.6713C17.8511 20.3907 20.5019 18.8279 23.448 18.2487C26.3941 17.6694 29.4537 18.1094 32.1066 19.4938C34.7596 20.8782 36.842 23.1217 38 25.8427L38 25.8427C39.1579 23.1217 41.2404 20.8782 43.8934 19.4938C46.5463 18.1094 49.6059 17.6694 52.552 18.2487C55.4981 18.8279 58.1489 20.3907 60.0536 22.6713C61.9584 24.9519 62.9995 27.8095 63 30.7583C63 47.4422 38 61.1818 38 61.1818Z"
        stroke="white"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export {
  PlayIcon,
  PauseIcon,
  SkipIcon,
  SkippedPressedIcon,
  PreviousIcon,
  NextIcon,
  NextFadedIcon,
  LikeIcon,
  LikePressedIcon,
};

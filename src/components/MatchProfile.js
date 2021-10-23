//COMPILE COMPONENTS PLAYER AND BOTTOM UP
//bottom screen for match playlist - includes matchprofile and matchplaylist
//part of playtrack - matchname

/////////////
import React from "react";
import { View, Text } from "react-native";
import { MatchAttributes } from "./MatchPlaylist";
import { MatchTracks } from "./MatchPlaylist";
import { useMatchContext } from "../utils/GlobalState";
import ProfileIcon from "../assets/Icons/ProfileIcon";

const MatchProfile = ({ children }) => {
  const [state, dispatch] = useMatchContext();

  return (
    <View>

      <View style={{ flexDirection: "row" }}>
        <View
          style={{
            backgroundColor: "#c0c0c0",
            height: 1,
            flex: 1,
            alignSelf: "center",
          }}
        />

        <ProfileIcon style={{ alignSelf: "center" }} />
       
        <View
          style={{
            backgroundColor: "#c0c0c0",
            height: 1,
            flex: 1,
            alignSelf: "center",
          }}
        />
      </View>

      <MatchAttributes />
      <MatchTracks />
    </View>
  );
};

export default MatchProfile;

//COMPILE COMPONENTS PLAYER AND BOTTOM UP
//bottom screen for match playlist - includes matchprofile and matchplaylist
//part of playtrack - matchname

/////////////
import React from "react";
import { View, Text } from "react-native";
import { MatchAttributes } from "./MatchPlaylist";
import { MatchTracks } from "./MatchPlaylist";
// import { Divider } from "react-native-elements"
// import SVGImg from '../src/assets/Icons/profile.svg';

const MatchProfile = ({ children }) => {
  // const match = state.find((match) => match.uid === navigation.getParam("id"));
  return (
    <View>
     {children}
{/* TODO: Add header matchname and make stopping point

TODO: Add profile icon in divider */}
{/* 

<Divider
  orientation="horizontal"
  subHeader="Test"
  subHeaderStyle={{ color: 'blue' }}
/>*/}
{/* <SVGImg/>  */}
<MatchAttributes/>
<MatchTracks/>

    </View>
  );
};


export default MatchProfile;


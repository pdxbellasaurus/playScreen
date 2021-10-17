//part of playtrack - matchname
//user icon
//"Attributes" Header text
//attributes small bubbles wrap - Age text with age, location icon with distance and "mi" text, search icon with lookingFor, remaining attributes array
//"Mix Tape Tracks" header text
//tracks large bubbles list with tracks text and track length

/////////////

import { View, Text, StyleSheet } from "react-native";
import { useMatchContext } from "../utils/GlobalState";


const MatchProfile = ({ navigation }) => {
  const [state, dispatch] = useMatchContext();

  const match = state.find((match) => match.uid === navigation.getParam("id"));

  return (
    <View>
      <Text> {match.matchName} </Text>
      <Text> {match.age} </Text>
    </View>
  );
};

export default MatchProfile;

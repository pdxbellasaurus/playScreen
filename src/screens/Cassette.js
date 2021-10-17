import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MatchProfile from "../components/MatchProfile";

//include the person name, attributes and track list to play
//backround image blurred until peak

const Cassette = () => {
  return (
    <View style={styles.container}>
      <Text>{match.matchName}</Text>

      <MatchProfile/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10,
  },
});

export default Cassette;

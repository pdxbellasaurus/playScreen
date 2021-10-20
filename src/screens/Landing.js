import React, { useEffect } from "react";
// import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useMatchContext } from "../utils/GlobalState";

import MatchList from "../components/MatchList";

//List of matches

const Landing = ({ navigation }) => {
  const [state, dispatch] = useMatchContext();

  useEffect(() => {
    if (state.currentMatch.uid) {
      navigation.navigate("Cassette");
    }
  }, [state.currentMatch]);

  return (
    <View style={styles.container}>
      <Text> You have *{state.matches.length}* matches!</Text>
      {/* <Text> {JSON.stringify(state.currentMatch, null, 2)}</Text> */}
      <MatchList />
    </View>
  );
};

// TODO Update styling

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
});

export default Landing;

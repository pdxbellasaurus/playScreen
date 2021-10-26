import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useMatchContext } from "../utils/GlobalState";

import MatchList from "../components/MatchList";
import { Button, Divider } from "react-native-elements";

//List of matches

const Landing = ({ navigation }) => {
  const [state, dispatch] = useMatchContext();

  useEffect(() => {
    if (state.currentMatch.uid) {
      navigation.navigate("Cassette");
    }
  }, [state.currentMatch]);

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.header}>
          You have *{state.matches.length}* matches!
        </Text>
        <MatchList />
      </View>

      <View>
        <Divider />
        <Button
          onPress={() => navigation.navigate("Test")}
          title="Go to Test Page"
        />
      </View>
    </>
  );
};

// TODO Update styling

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    marginTop: 30
  },
  header: {
    fontSize: 30,
  },
});

export default Landing;

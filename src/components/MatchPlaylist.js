//ATTRIBUTES AND AUDIO TRACKS FROM SELECTED MATCH

//user icon
//"Attributes" Header text
//attributes small bubbles wrap - Age text with age, location icon with distance and "mi" text, search icon with lookingFor, remaining attributes array
//"Mix Tape Tracks" header text
//tracks large bubbles list with tracks text and track length

import React, { useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Chip, Button } from "react-native-elements";
import { useMatchContext } from "../utils/GlobalState";
import DistanceIcon from "../assets/Icons/DistanceIcon";
import LookingForIcon from "../assets/Icons/LookingForIcon";

export function MatchAttributes({ children }) {
  const [state, dispatch] = useMatchContext();

  useEffect(() => {
    console.log(state.currentMatch);
  });

  return (
    <View>
      <Text>Attributes</Text>
      <View style={styles.chipContainer}>
        <Chip
          title={"Age " + state.currentMatch.age}
          type="outline"
          containerStyle={{ marginVertical: 5, marginHorizontal: 5 }}
          disabled
          style={styles.attributes}
        />
        {/* TODO? is conversion needed, what tool/call is being used to get location of user and match  */}

        <Chip
          title={" " + state.currentMatch.distance + " mi"}
          type="outline"
          disabled
          style={styles.attributes}
          icon={DistanceIcon}
          containerStyle={{
            marginVertical: 5,
            marginHorizontal: 5,
            borderRadius: 25,
          }}
        />
        <Chip
          title={" " + state.currentMatch.lookingFor}
          type="outline"
          disabled
          style={styles.attributes}
          icon={LookingForIcon}
          iconStyle={{ color: "light" }}
          containerStyle={{ marginVertical: 5, marginHorizontal: 5 }}
        />
      </View>
      {/* TODO: Add track length and onPress method to play track */}
      <View style={styles.chipContainer}>
        {state.currentMatch.attributes.length > 0 &&
          state.currentMatch.attributes.map((attribute, index) => (
            <Chip
              key={index}
              type="flat"
              disabled
              title={attribute}
              iconStyle={{ color: "light" }}
              containerStyle={{ marginVertical: 5, marginHorizontal: 5 }}
            ></Chip>
          ))}
      </View>
    </View>
  );
}


export function MatchTracks({ children }) {
  const [state, dispatch] = useMatchContext();
  return (
    <View>
      <Text>Mix Tape Tracks</Text>

      <View>
        {state.currentMatch.reels.length > 0 &&
          state.currentMatch.reels.map((reel, index) => (
            <Button
              key={index}
              type="flat"
              reel={reel}
              title={reel.track}
              playlist={reel.playlist}
              tape={reel.tape}
            ></Button>
          ))}
      </View>
    </View>
  );
}

//TODO: Complete styling (chips spacing and color, playlist color), fix model header not sticking

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  chipContainer: {
    padding: 10,
    marginRight: 10,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  attributes: {
    fontSize: 10,
    fontWeight: "light",
  },
});
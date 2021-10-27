//ATTRIBUTES AND AUDIO TRACKS FROM SELECTED MATCH
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
      <Text style={styles.subtitle}>Attributes</Text>
      <View style={styles.chipContainer}>
        <Chip
          title={"Age " + state.currentMatch.age}
          type="flat"
          containerStyle={{
            marginVertical: 5,
            marginHorizontal: 5,
            borderRadius: 10,
            backgroundColor: "white",
          }}
          disabled
          style={styles.attributes}
        />
        {/* TODO? is conversion needed, what tool/call is being used to get location of user and match  */}

        <Chip
          title={" " + state.currentMatch.distance + " mi"}
          disabled
          style={styles.attributes}
          icon={DistanceIcon}
          type="flat"
          containerStyle={{
            marginVertical: 5,
            marginHorizontal: 5,
            borderRadius: 10,
            backgroundColor: "white",
          }}
        />
        <Chip
          title={" " + state.currentMatch.lookingFor}
          disabled
          style={styles.attributes}
          icon={LookingForIcon}
          iconStyle={{ color: "coral" }}
          type="flat"
          containerStyle={{
            marginVertical: 5,
            marginHorizontal: 5,
            borderRadius: 10,
            backgroundColor: "white",
          }}
        />
      </View>
      {/* TODO: Add onPress method to play track */}
      <View style={styles.chipContainer}>
        {state.currentMatch.attributes.length > 0 &&
          state.currentMatch.attributes.map((attribute, index) => (
            <Chip
              key={index}
              disabled
              title={attribute}
              iconStyle={{ color: "coral" }}
              type="flat"
              color="coral"
              containerStyle={{
                marginVertical: 5,
                marginHorizontal: 5,
                borderRadius: 10,
                backgroundColor: "white",
              }}
            ></Chip>
          ))}
      </View>
    </View>
  );
}

export function MatchTracks({ children }) {
  const [state, dispatch] = useMatchContext();
  return (
    <View style={{ paddingTop: 15 }}>
      <Text style={styles.subtitle}>Mix Tape Tracks</Text>

      <View>
        {state.currentMatch.reels.length > 0 &&
          state.currentMatch.reels.map((reel, index) => (
            <Button
              key={index}
              reel={reel}
              title={reel.title}
              playlist={reel.playlist}
              track={reel.track}
              duration={reel.duration}
              buttonStyle={{
                padding: 20,
                flexDirection: "row-reverse",
                justifyContent: "space-between",
                backgroundColor: "coral",
              }}
              icon={
                <Text style={{ color: "white" }}>
                  {new Date(reel.duration * 1000).toISOString().substr(14, 5)}
                </Text>
              }
              containerStyle={{
                marginVertical: 5,
                marginHorizontal: 5,
                borderRadius: 5,
              }}
              //TODO Add on press function to play track, and isSelected
            ></Button>
          ))}
      </View>
    </View>
  );
}

//TODO: chips text color
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  chipContainer: {
    marginRight: 10,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  attributes: {
    fontSize: 10,
    fontWeight: "300",
  },
  subtitle: {
    fontSize: 15,
    fontWeight: "light",
  },
});

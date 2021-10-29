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

  // const onTrackPress = index => {
  //   changeTrack(index);
  // };

  // const changeTrack = index => {
  //   TrackPlayer.skip(index);
  //   TrackPlayer.play();
  // };
  return (
    <View style={{ paddingTop: 15 }}>
      <Text style={styles.subtitle}>Mix Tape Tracks</Text>

      <View>
        {state.currentMatch.reels.length > 0 &&
          state.currentMatch.reels.map((reel, index) => (
            //TODO Add on press function to play track, and isSelected
            <Button
              // onPress={() => onTrackPress(reel.index)}
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
              activeOpacity={0.5}
              containerStyle={{
                marginVertical: 5,
                marginHorizontal: 5,
                borderRadius: 5,
              }}
              
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
    fontWeight: "200",
  },
});

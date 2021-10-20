//ATTRIBUTES AND AUDIO TRACKS FROM SELECTED MATCH

//user icon
//"Attributes" Header text
//attributes small bubbles wrap - Age text with age, location icon with distance and "mi" text, search icon with lookingFor, remaining attributes array
//"Mix Tape Tracks" header text
//tracks large bubbles list with tracks text and track length
import React from "react";
import { View, Text } from "react-native";
import { Chip, Button } from "react-native-elements";



export function MatchAttributes({ children }) {
  return (
    <View>
      {children}
      <Text >Attributes</Text>

      <View >
        {/* TODO: Add svg to first three chips */}
        <Chip>Age {currentMatch.age}</Chip>
        {/* TODO? is conversion needed, what tool/call is being used to get location of user and match  */}

        <Chip>{currentMatch.distance} mi</Chip>
        <Chip>{currentMatch.lookingFor}</Chip>

        {state.currentMatch.attributes.length > 0 &&
          state.attributes.map((attribute, index) => (
            <Chip
              key={index}
              type="flat"
            
              textStyle={{ color: "white" }}
            >
              {attribute}
            </Chip>
          ))}
      </View>
    </View>
  );
}
export function MatchTracks({ children }) {
  return (
    <View>
      {children}
      <Text >Mix Tape Tracks</Text>

      <View >
        {state.currentMatch.reels.length > 0 &&
          state.currentMatch.reels.map((reel, index) => (
            <Button
              key={index}
              type="flat"
              
              textStyle={{ color: "white" }}
            >
              {reel.track}
            </Button>
          ))}
      </View>
    </View>
  );
}

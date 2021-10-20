//PLAYER AND BOTTOM UP

import React, { useState } from "react";
// import React from "react";
import { StyleSheet, Text, View } from "react-native";
// import { SET_CURRENT_MATCH } from "../utils/actions";



import { useMatchContext } from "../utils/GlobalState";

import MatchProfile from "../components/MatchProfile";

import React, { useRef } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Modalize } from 'react-native-modalize';


//MatchPlaylist = bottom sheet include the person name, attributes and track list to play

//Playtrack
//player 
//backround image blurred until peak

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10,
  },
});


const Cassette = props => {

  const [state, dispatch] = useMatchContext();

 
   const modalizeRef = useRef<Modalize>(null);
  
    const onOpen = () => {
      modalizeRef.current?.open();
    };
  
    return (
      <>
        <TouchableOpacity onPress={onOpen}>
        <Text>{state.currentMatch.matchName}</Text>

        </TouchableOpacity>
        <Text> {JSON.stringify(state.currentMatch, null, 2)}</Text>
          {/* <MatchProfile/> */}
  
        <Modalize ref={modalizeRef}>...your content</Modalize>
      </>
    );
  };
 


  // return (
  //   <View style={styles.container}>
     
      
     
  //     <MatchProfile/>

  //   </View>
  // );
};



export default Cassette;

import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
// import MatchProfile from "../components/MatchProfile";

//include the person name, attributes and track list to play
//backround image blurred until peak

const Cassette = () => {
  
    return (
        <View style={styles.container}>
           <Text>Matches</Text>
          <TouchableOpacity
           
          >
            {/* <MatchProfile/> */}
          </TouchableOpacity>
        </View>
      );
    }
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: "center",
        paddingHorizontal: 10
      },
    //   button: {
    //     alignItems: "center",
    //     backgroundColor: "#DDDDDD",
    //     padding: 10
    //   },
    });
    
      
      export default Cassette;    
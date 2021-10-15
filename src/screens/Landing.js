import React from "react";

import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import MatchList from '../components/MatchList'
import { useMatchContext } from "../utils/GlobalState";

//List of matches
function Landing() {
  const [state, dispatch] = useMatchContext();
  return (
  
    <View style={styles.container}>
       <Text> You have *{state.matches.length}* matches!</Text>
      <TouchableOpacity
       // onPress={onPress}
      >
        <MatchList/>
      </TouchableOpacity>
    </View>
   
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
 
    paddingHorizontal: 10
  },

});

  
  export default Landing;    
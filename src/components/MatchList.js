//GETS LIST OF MATCHES FOR LANDING SCREEN

import React, { useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
// import { useNavigation } from "@react-navigation/native";
import { useMatchContext } from "../utils/GlobalState";
import { SET_CURRENT_MATCH } from "../utils/actions";
import { UPDATE_MATCHES } from "../utils/actions";
import matches from "../utils/matches.json";



// TODO: Update styling
// TODO: Navigate to profile when match selected from list

const MatchList = () => {
  const [state, dispatch] = useMatchContext();


  const getMatches = () => {
    dispatch({
      type: UPDATE_MATCHES,
      matches: matches,
    });
  };
  

  useEffect(() => {
    getMatches();
  }, []);

  const renderItem = ({ item, index }) => {
    const backgroundColor = item.uid === state ? "#0F6171" : "#008082";
   
    const Item = ({
      label,
      onPress,
      backgroundColor,
      navigation
      
    }) => {
      return (
        <TouchableOpacity
          onPress={onPress}
          style={[styles.item, backgroundColor]}
        >
          <Text style={[styles.matchName]}>{label}</Text>
        </TouchableOpacity>
      );
    };

    return (
      <Item
        key={index}
        item={item}
        // onPress={matchProfileHandler}
        onPress={() => 
          
        dispatch({
          type: SET_CURRENT_MATCH,
          match: item,
         
        })
      
      }
        backgroundColor={{ backgroundColor }}
        matchId={item.uid}
        label={item.matchName}
      />
    );
  };

  return (
    <View style={styles.container}>
      {state.matches && (
        <FlatList
          data={matches}
          renderItem={renderItem}
          keyExtractor={(match) => match.uid}
          extraData={state}
        ></FlatList>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  matchName: {
    fontSize: 20,
    fontWeight: "bold", 
    color: "#FFDB43"
  },
 
});

export default MatchList;


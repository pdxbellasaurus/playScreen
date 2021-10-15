// import React, { useEffect } from 'react';
import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useMatchContext } from "../utils/GlobalState";
import { UPDATE_MATCHES } from "../utils/actions";
import axios from "axios";
import matches from "../utils/matches.json";

const MatchList = () => {
  const [state, dispatch] = useMatchContext();
  
  const getMatches = () => {
    // dispatch({ type: LOADING });
    axios
      .get("matches.json")
      .then((results) => {
        dispatch({
          type: UPDATE_MATCHES,
          matches: results.data,
        });
        getMatches();
      })
      .catch((err) => console.log(err));
  };


    // useEffect(() => {
    //   setMatches();
    // }, []);

  console.log("STATE:", state);
  console.log("DISPATCH", dispatch);
  console.log(matches);

  const renderItem = ({ item, index }) => {
    const backgroundColor = item.id === state ? "#6e3b6e" : "#f9c2ff";
    const color = item.id === state ? "white" : "black";
    console.log("item matchname at render", item.matchName);
  
    const Item = ({
      label,
      onPress,
      backgroundColor,
      textColor,
      navigation,
    }) => {
      console.log("item title at render", label);

      return (
        <TouchableOpacity
          onPress={onPress}
          style={[styles.item, backgroundColor]}
        >
          <Text style={[styles.matchName, textColor]}>Match: {label}</Text>
        </TouchableOpacity>
      );
    };

    return (
      <Item
        key={index}
        item={item}
        onPress={() => dispatch(item.id)}
          backgroundColor={{ backgroundColor }}
          textColor={{ color }}
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
          keyExtractor={(item) => item.uid}
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
  },
});

MatchList.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => {
      return (
        <TouchableOpacity onPress={() => navigation.navigate("Cassette")}>
          <Icon icon="home" name="home" size={30} />
        </TouchableOpacity>
      );
    },
  };
};

export default MatchList;

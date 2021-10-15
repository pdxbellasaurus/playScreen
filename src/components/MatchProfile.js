
//part of playtrack - matchname
//user icon
//"Attributes" Header text
//attributes small bubbles wrap - Age text with age, location icon with distance and "mi" text, search icon with lookingFor, remaining attributes array
//"Mix Tape Tracks" header text
//tracks large bubbles list with tracks text and track length

///////////// 



// import React, {useEffect} from 'react';
import { View, Text, StyleSheet } from 'react-native';
// import { Context } from './context/BlogContext';
// import { TouchableOpacity } from 'react-native-gesture-handler';
import { useMatchContext } from "../utils/GlobalState";
// import { SET_CURRENT_MATCH, ADD_LIKE, REMOVE_LIKE } from "../utils/actions";

const MatchProfile = ({navigation}) => {
    const [state, dispatch] = useMatchContext();

    const match = state.find(
        (match) => match.id === navigation.getParam('id')
    );

    // const addLike = () => {
    //     dispatch({
    //       type: ADD_FAVORITE,
    //       post: state.currentMatch
    //     });
    //   };
    
    //   const removeLike = () => {
    //     dispatch({
    //       type: REMOVE_FAVORITE,
    //       _id: state.currentMatch._id
    //     });
    //   };

    return (
        <View>
            <Text> {match.matchName} </Text>
            <Text> {match.age} </Text>
        </View>
    );
}


export default MatchProfile;
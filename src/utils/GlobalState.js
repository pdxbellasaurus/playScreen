import React, {createContext, useReducer, useContext} from 'react';
// import { useNavigation } from "@react-navigation/native";
import {
  SET_CURRENT_MATCH,
  UPDATE_MATCHES,
  ADD_LIKE,
  UPDATE_LIKE,
  REMOVE_LIKE,
  LOADING
} from './actions';

const MatchContext = createContext();
const { Provider } = MatchContext;

const reducer = (state, action) => {
  switch (action.type) {
  
  case SET_CURRENT_MATCH:
    console.log("GLOBALSTATE_PRESS_CAPTURE")
    return {
      ...state,
      currentMatch: action.match,
      loading: false
    };

  case UPDATE_MATCHES:
    return {
      ...state,
      matches: [...action.matches],
      loading: false
    };

  case ADD_LIKE:
    return {
      ...state,
      likes: [action.match, ...state.likes],
      loading: false
    };

  case UPDATE_LIKE:
    return {
      ...state,
      likes: [...state.likes],
      loading: false
    };

  case REMOVE_LIKE:
    return {
      ...state,
      likes: state.likes.filter((match) => {
        return match._id !== action._id; 
      })
    };

  case LOADING:
    return {
      ...state,
      loading: true
    };

    // case SET_NAVIGATION:
    //   return { 
    //     ...state, 
    //     navigation: action.payload, 
    //     items: action.payload.matches.items ||  action.payload.items || [] 
    //   };
    

  default:
    return state;
  }
};

const MatchProvider = ({ value = [], ...props }) => {
  
  const [state, dispatch] = useReducer(reducer, {
    // navigation: useNavigation(),
    matches: [],
   
    currentMatch: {
      _id: 0,
      matchName: "",
      age: 0,
      distance: 0,
      lookingFor: "",
      attributes: [],
      images: [],
      reels: []

    },
    likes: [],
    loading: false
  });

  return <Provider value={[state, dispatch]} {...props} />;
};

const useMatchContext = () => {
  return useContext(MatchContext);
};

export { MatchProvider, useMatchContext };
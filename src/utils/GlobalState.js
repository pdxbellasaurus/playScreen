import React, {createContext, useReducer, useContext} from 'react';
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

    case SET_CURRENT_TRACKS:
      console.log("GLOBALSTATE_TRACKS")
      return {
        ...state,
        tracks: [...action.reels],
      loading: false
      };

      case SET_CURRENT_IMAGES:
      console.log("GLOBALSTATE_IMAGES")
      return {
        ...state,
        images: [...action.images],
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

    case ADD_SEEN:
      return {
        ...state,
        users: [action.match, ...state.users],
        loading: false
      };
  
    case UPDATE_SEEN:
      return {
        ...state,
        users: [...state.users],
        loading: false
      };
  
  case LOADING:
    return {
      ...state,
      loading: true
    }; 

  default:
    return state;
  }
};

const MatchProvider = ({ value = [], ...props }) => {
  
  const [state, dispatch] = useReducer(reducer, {
   
    matches: [],
   tracks:[],
   images: [],
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
    seen: [],
    loading: false
  });

  return <Provider value={[state, dispatch]} {...props} />;
};

const useMatchContext = () => {
  return useContext(MatchContext);
};

export { MatchProvider, useMatchContext };
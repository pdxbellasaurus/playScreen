import React from "react";
import { View, Text} from 'react-native';
import HomeIcon from "../assets/Icons/HomeIcon";
import ShareMatch from "./ShareMatch";
import { useMatchContext } from "../utils/GlobalState";

 const CassetteHeader = ({ children }) => {  

    const [state, dispatch] = useMatchContext();
     
   return (
      <View
      style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
<HomeIcon
onPress={() => navigation.navigate('Landing')}/>
  <Text>Current playlist</Text>
  <ShareMatch/>
      </View>
  
    );
}

export default CassetteHeader;
import React from "react";
import { View, Text, TouchableOpacity} from "react-native";
import { useMatchContext } from "../utils/GlobalState";
import ShareMatch from "../components/ShareMatch";


const Test = ({ children }) => {
    const [state, dispatch] = useMatchContext();
  return(
    <View>
<View>
    <Text>
        TEST PAGE

    </Text>
</View>


<TouchableOpacity onPress={ShareMatch} style={{ marginRight: 10 }}>
          <ShareMatch style={{ color: "white" }} />
        </TouchableOpacity>
</View>

  )

    

};

export default Test;
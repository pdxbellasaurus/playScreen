
import React from "react";
import { View, ActivityIndicator, Image, ScrollView } from 'react-native';
import "react-native-gesture-handler";
import { useMatchContext } from "../utils/GlobalState";

const CassetteImages = ({children})  => { 
    const [state, dispatch] = useMatchContext();
    state.currentMatch.images[image].map((image,i)=> {
      return(
      <ScrollView
      contentContainerStyle={{
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
      >
  
          {state.currentMatch.images.length > 0 &&
            state.currentMatch.images[image].map((image, index) => (
              <View>
              <Image
                key={index}
                source={{uri: image}}
                resizeMode="center"
                onLoadStart={() => setLoading(true)}
                onLoadEnd={() => setLoading(false)}              
              >
              </Image>
              {state.loading && <ActivityIndicator color="purple" size="large" />}
              </View>
            ))}
               
      </ScrollView>
      )
          })
  }
  export default CassetteImages;
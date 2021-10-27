//CURRENTLY UNABLE TO GET PHOTOS TO RENDER FROM LOCAL
import React, { createRef, useEffect } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
  Dimensions,
  ImageBackground,
  ScrollView,
  Image,
  // ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useMatchContext } from "../utils/GlobalState";
import MatchProfile from "../components/MatchProfile";
import CassettePlayer from "../components/CassettePlayer";
import TrafficIcon from "../assets/Icons/TrafficIcon";
import HomeIcon from "../assets/Icons/HomeIcon";
import Dominique1of2 from "../assets/Profiles/Dominique/Dominique1of2.jpeg";
import Dominique2of2 from "../assets/Profiles/Dominique/Dominique2of2.jpeg";
require("../assets/Profiles/Jack/Jack1of2.jpeg");
require("../assets/Profiles/Jack/Jack2of2.jpeg");
require("../assets/Profiles/Jess/Jess1of2.jpeg");
require("../assets/Profiles/Jess/Jess2of2.jpeg");

const { height } = Dimensions.get("window");


//MatchPlaylist = bottom sheet include the person name, attributes and track list to play
//Playtrack
//player
//backround image blurred until peak

const Cassette = ({ props }) => {
  const navigation = useNavigation();
  const [state, dispatch] = useMatchContext();

 
  const bgImage = {
    uri: "https://cdn.pixabay.com/photo/2020/03/03/14/11/cassette-4898833_1280.jpg",
  };


  ///NAVIGATION >>>
  React.useLayoutEffect(() => {
    navigation.setOptions({
      //TODO add conditional render {is playing/track selected in bottom sheet && {current playlest of track - possible through player}
      // headerTitle: (props) => <Text {...props}>Current Playlist</Text>,
      headerStyle: {
        elevation: 0,
      },
      headerTransparent: true,
      headerShadowVisible: false,
      headerHideShadow: true,
      headerTintColor: "rgba(0,0,0,0)",
      headerTitleAlign: "center",
      headerTitleStyle: {
        fontWeight: "300",
        fontSize: 15,
        color: "pink",
      },
      headerLeft: () => (
        <TouchableOpacity
          onPress={() => navigation.navigate("Matches")}
          style={{ marginLeft: 10 }}
        >
          <HomeIcon style={{ color: "white" }} />
        </TouchableOpacity>
      ),
      headerRight: () => (
        <TouchableOpacity oonPress={() => navigation.navigate("Test")} style={{ marginRight: 10 }}>
          <TrafficIcon style={{ color: "white" }} />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);
  ////<<<NAVIGATION

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={bgImage} style={styles.image}>
        <ScrollView
          contentContainerStyle={{
            alignItems: "center",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
            
          }}
          horizontal={true}
        >
          {state.currentMatch.images.length > 0 &&
            state.currentMatch.images.map((image, index) => (
              <View key={index} style={{ padding: 5 }}>
                <Image
                  key={index}
                  source={{ uri: `${image.source}` }}
                  resizeMode="center"
                />
                <Text>{image.image}</Text>
                <Text>{image.source}</Text>
              </View>
            ))}
        </ScrollView>

        <CassettePlayer />
        {/* //ACTION SHEET */}
        <MatchProfile />
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  image: {
    flex: 1,
    justifyContent: "center",
    resizeMode: "cover",
    height: "100%",
    alignItems: "center",
    position: "absolute",

    // left: 0,
    // top: 0,
  },

  //  header: {
  //      width: '100%',
  //      height: 50,
  //  },

  // tab: {
  //   flex: 1,
  //   backgroundColor: "fff",
  //   borderTopLeftRadius: 30,
  //   borderTopRightRadius: 30,

  // },
  // opentab: {
  //   alignSelf: "center",
  //   flex: 1,
  //   backgroundColor: "transparent",
  //   borderRadius: 10,
  //   justifyContent: "center",
  // },
});

export default Cassette;

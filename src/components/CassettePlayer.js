// Title (no status bar) home icon << current playlist (e.g. Thoughtful) >> return to matchprofile
//current track bold center
//track 1 (+1) of ? (reels.length -1)
//back button?? left and views with number left (search icon) right
//slider
//player controls
//dislike and like
//matchName (part of matchprofile)

import React from "react";
import { View, Text } from "react-native";
import { Tile } from "react-native-elements";
import "react-native-gesture-handler";
// import TrackPlayer, { Event } from 'react-native-track-player';
import { useMatchContext } from "../utils/GlobalState";

const CassettePlayer = ({ children }) => {
  const [state, dispatch] = useMatchContext();
  const img1 = require("../assets/Profiles/Jess/Jess1of2.jpeg");
  const img2 = require("../assets/Profiles/Jack/Jack1of2.jpeg");

  return (
    <View>
      <Text> {state.currentMatch.matchName}</Text>
      <Tile
        imageSrc={"uri:" + img2}
        resizeMode="cover"
        title="Lorem ipsum"
        caption="Some Caption Text"
      />
      
      <Tile
        imageSrc={"uri:" + img1}
        title="Lorem ipsum dolor sit amet, consectetur"
        icon={{ name: "play-circle", type: "font-awesome" }} // optional
        contentContainerStyle={{ height: 70 }}
      >
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text>Caption</Text>
          <Text>Caption</Text>
        </View>
      </Tile>
    </View>
  );
};

export default CassettePlayer;

//////IMAGE BACKGROUND
//BLUR UNTIL PEAK
// const image = { uri: '' };

// <View style={styles.container}>
//     <ImageBackground source={image} resizeMode="cover" style={styles.image}>
//       <Text style={styles.text}>Inside</Text>
//     </ImageBackground>
//   </View>
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   image: {
//     flex: 1,
//     justifyContent: "center"
//   },
//   text: {
//     color: "white",
//     fontSize: 42,
//     lineHeight: 84,
//     fontWeight: "bold",
//     textAlign: "center",
//     backgroundColor: "#000000c0"
//   }
// });
//////imagebackground

//Player
// import React from 'react';
// import {SafeAreaView, StyleSheet} from 'react-native';
// import List from './list';

// import {usePlayer} from '_globals/state/player';
// import {Div} from 'react-native-magnus';

// import {useWindowDimensions} from 'react-native';
// import Player from './BottomSheet';
// import TrackPlayer, {useTrackPlayerEvents} from 'react-native-track-player';
// const Playtrack = ({navigation}) => {
//   // current played track
//   //
//   const [state, {setSelectedTrack}] = usePlayer();
//   const {width} = useWindowDimensions();

//   const playerRef = React.useRef(null);
//   useTrackPlayerEvents(['playback-track-changed'], async (event) => {
//     if (event.type === TrackPlayer.TrackPlayerEvents.PLAYBACK_TRACK_CHANGED) {
//       const track = await TrackPlayer.getTrack(event.nextTrack);
//       const selectedTrack = track || {};
//       setSelectedTrack(selectedTrack);
//     }
//   });
//   return (
//     <SafeAreaView style={styles.container}>
//       <Div flex={1} bg="primary">
//         <List playerRef={playerRef} />
//         <Player ref={playerRef} />
//       </Div>
//     </SafeAreaView>
//   );
// };

// export default Playtrack;
// const styles = StyleSheet.create({
//   // Screen
//   container: {
//     flex: 1,
//   },
// });

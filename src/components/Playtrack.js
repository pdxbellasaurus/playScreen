//PLAYER COMPONENT 

// Title (no status bar) home icon << current playlist (e.g. Thoughtful) >> return to matchprofile
//current track bold center
//track 1 (+1) of ? (reels.length -1)
//back button?? left and views with number left (search icon) right
//slider
//player controls
//dislike and like
//matchName (part of matchprofile) 


// import { Tile } from 'react-native-elements';



// <Tile
//   imageSrc={require('./img/path')}
//   title="Lorem ipsum"
//   featured
//   caption="Some Caption Text"
// />;

// <Tile
//   imageSrc={require('./img/path')}
//   title="Lorem ipsum dolor sit amet, consectetur"
//   icon={{ name: 'play-circle', type: 'font-awesome' }} // optional
//   contentContainerStyle={{ height: 70 }}
// >
//   <View
//     style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}
//   >
//     <Text>Caption</Text>
//     <Text>Caption</Text>
//   </View>
// </Tile>;




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

//NOT WORKING
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableWithoutFeedback,
  Pressable,
} from "react-native";
import { Slider } from "react-native-elements";
import "react-native-gesture-handler";
import TrackPlayer, {
  Capability,
  Event,
  State,
  usePlaybackState,
  useProgress,
  useTrackPlayerEvents,
} from "react-native-track-player";
import { useMatchContext } from "../utils/GlobalState";
import SendReportIcon from "../assets/Icons/SendReportIcon";
import UndoIcon from "../assets/Icons/UndoIcon";
import UnblurSeenIcon from "../assets/Icons/UnblurSeenIcon";
import {
  PlayIcon,
  PauseIcon,
  SkipIcon,
  SkippedPressedIcon,
  PreviousIcon,
  NextIcon,
  NextFadedIcon,
  LikeIcon,
  LikePressedIcon,
} from "../assets/Icons/PlayerIcons";
import { SET_CURRENT_TRACKS } from "../utils/actions";

const { width } = Dimensions.get("window");

const tracks = [
  {
    id: 1,
    url: require("../../assets/audio/My Best Joke.m4a"), 
    title: "My Best Joke",
    album: "Funny",
    duration: 22,
  },
];

const setupIfNecessary = async () => {
  const [state, dispatch] = useMatchContext();


  const currentTrack = await TrackPlayer.getCurrentTrack();
  if (currentTrack !== null) {
    return;
  }
  await TrackPlayer.setupPlayer({});
  TrackPlayer.updateOptions({
    stopWithApp: true,
    capabilities: [
      Capability.Play,
      Capability.Pause,
      Capability.SkipToNext,
      Capability.SkipToPrevious,
      Capability.Stop,
    ],

    playIcon: { PlayIcon },
    pauseIcon: { PauseIcon },
    stopIcon: { PauseIcon },
    previousIcon: { PreviousIcon },
    nextIcon: { NextIcon },
    icon: { SendReportIcon },
  });
  
  await TrackPlayer.add( {tracks} );
  TrackPlayer.setRepeatMode(RepeatMode.Queue);

  console.log(tracks)
  console.log("PLAYER INITILIZED AND TRACKS ADDED");
  // return true;
};

const togglePlayback = async (playbackState: State) => {
  const currentTrack = await TrackPlayer.getCurrentTrack();
  if (currentTrack == null) {
  } else {
    if (playbackState !== State.Playing) {
      await TrackPlayer.play();
    } else {
      await TrackPlayer.pause();
    }
  }
};

const CassettePlayer = ({ children }) => {
  const [state, dispatch] = useMatchContext();
  const playbackState = usePlaybackState();
  const progress = useProgress();

// const [trackIndex, setTrackIndex] = useState(0);
  const [trackTitle, setTrackTitle] = useState("");
  const [trackAlbum, setTrackAlbum] = useState("");
  const [duration, setDuration] = useState(0);


  useEffect(() => {
    setupIfNecessary();
    // getTracks();
  });

  useTrackPlayerEvents([Event.PlaybackTrackChanged], async (event) => {
    if (
      event.type === Event.PlaybackTrackChanged &&
      event.nextTrack !== undefined
    ) {
      const track = await TrackPlayer.getTrack(event.nextTrack);
      const { title, album, duration } = track || {};
      setTrackTitle(title);
      setTrackAlbum(album);
      setDuration(duration);
    }
    await TrackPlayer.seekTo(0);
  });

  return (
    <View style={styles.container}>
      {/* <Text>track playlist{trackAlbum}</Text> */}
      <View >
        <Text style={styles.title}>Track Title: {trackTitle}</Text>
        {/* TODO: getIndex of tracks +1 */}
        <Text style={styles.length}>#/{tracks.length} </Text>
      </View>
      <View style={styles.row}>
        {/* TODO: Add onPress Undo function */}
        <View  style={styles.peak} >
        <UndoIcon/>
        </View>
        
        {/* TODO: State: if blurred/unseen peakcount ELSE unblurred/peaked with Seen/unseen */}
        <View style={{marginRight: 15}}>
        <UnblurSeenIcon />
        </View>
       
      </View>

       <Slider
        value={progress.position}
        thumbTintColor="white"
        maximumTrackTintColor="gray"
        minimumTrackTintColor="white"
        thumbStyle={{ height: 15, width: 15 }}
        minimumValue={0}
        maximumValue={progress.duration}
        onSlidingComplete={async (value) => {
          await TrackPlayer.seekTo(value);
        }}
      />

      <View style={styles.row } >
        <Text style={styles.duration}>
          {new Date(progress.position * 1000).toISOString().substr(14, 5)}
        </Text>
        <Text  style={{color: "#FFDB43"}}> 
          {new Date((progress.duration - progress.position) * 1000)
            .toISOString()
            .substr(14, 5)}
        </Text>
      </View>


      <View style={[styles.row, styles.even]}>
        <TouchableWithoutFeedback onPress={() => TrackPlayer.skipToPrevious()}>
          {/* TODO: Add logic within index
        first in index ? <PreviousFadedIcon /> : <PreviousIcon /> */}
          <PreviousIcon />
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback onPress={() => togglePlayback(playbackState)}>
          {playbackState === State.Playing ? <PauseIcon /> : <PlayIcon />}
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback onPress={() => TrackPlayer.skipToNext()}>
          {/* TODO: Add logic, within index
            last in index ? <NextFadedIcon /> : <NextIcon /> */}
                    <NextIcon />
        </TouchableWithoutFeedback>
      </View>
      <View style={[styles.row, styles.even]}>
        {/* TODO: Add Action to skip and render if skipped*/}
        {/* pressed ? <SkippedPressedIcon /> : <SkipIcon />; */}
        <SkipIcon />
        {/* TODO: Add like function and render to like pressed*/}
        {/* pressed ? <LikePressedIcon /> : <LikeIcon />; */}
        <LikeIcon />
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
  },

  title: { 
    fontSize: 20,
    color: "black",
    alignSelf: "center",
  },
  length: {
    fontSize: 20,
    color: "black",
    alignSelf: "center",
    marginBottom: 20,
  },
  duration: {
    flex: 1,
    justifyContent: "space-between",
    fontSize: 15,
    color: "#FFDB43",
  },
  row: {
    flexDirection: "row",
    marginBottom: 20,
    alignItems: "center",
       width: "100%",
  },
  peak: {
    flex: 1,
    justifyContent: "space-between",
    marginLeft: 15,
  },

  even: {
    marginBottom: 30,
    justifyContent: "space-evenly",
  },
});

export default CassettePlayer;

//CURRENTLY CRASHING ON ANDROID
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Animated,
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

const CassettePlayer = ({ children }) => {
  const [state, dispatch] = useMatchContext();
  const playbackState = usePlaybackState();
  const progress = useProgress();

  const [trackTitle, setTrackTitle] = useState("");
  const [trackAlbum, setTrackAlbum] = useState("");
  const [duration, setDuration] = useState(0);
 

  // TODO: update to currentmatch tracks and title
  const tracks = [
    {
      id: 1,
      url: require("../assets/Profiles/Dominique//My Best Joke.m4a"),
      title: "My Best Joke",
      album: "Funny",
      duration: 22,
    },
  ];
 
  const playerInit = async () => {
    useEffect(() => {
      const startPlayer = async () => {
        let isInit = await playerInit();
        setPlayerInit(isInit);
      };
      startPlayer();
    }, []);

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

    await TrackPlayer.add({ tracks });
    console.log("PLAYER INITILIZED AND TRACKS ADDED");
    return true;
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
      <Text>{trackAlbum}</Text>
      <View style={styles.row}>
        <Text>{trackTitle}</Text>
        {/* TODO: getIndex of tracks +1 */}
        <Text>#/{tracks.length} </Text>
      </View>
      <View style={styles.row}>
        {/* TODO: Add Action */}
        <UndoIcon />
        {/* TODO: if blurred/unseen peakcount ELSE unblurred/peaked with Seen/unseen */}
        <UnblurSeenIcon />
      </View>

      <Slider
        value={progress.position}
        minimumValue={0}
        maximumValue={progress.duration}
        onSlidingComplete={async (value) => {
          await TrackPlayer.seekTo(value);
        }}
      />
      <View>
        <Text>
          {new Date(progress.position * 1000).toISOString().substr(14, 5)}
        </Text>
        <Text>
          {new Date((progress.duration - progress.position) * 1000)
            .toISOString()
            .substr(14, 5)}
        </Text>
      </View>

      <View style={styles.row}>
        <TouchableWithoutFeedback onPress={() => TrackPlayer.skipToPrevious()}>
          <PreviousIcon />
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback onPress={() => togglePlayback(playbackState)}>
          {playbackState === State.Playing ? <PauseIcon /> : <PlayIcon />}
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback onPress={() => TrackPlayer.skipToNext()}>
          <NextIcon />
        </TouchableWithoutFeedback>
      </View>
      <View style={styles.row}>
        {/* TODO: Add Action to skip*/}
        <SkipIcon />
        {/* TODO: Add like function and conditional render to like pressed*/}
        <LikeIcon />
      </View>

      <View style={styles.row}>
        <Pressable onPress={() => this.pressed}>
          {({ pressed }) => {
            pressed ? <SkippedPressedIcon /> : <SkipIcon />;
          }}
        </Pressable>

        <Pressable onPress={() => this.pressed}>
          {({ pressed }) => {
            pressed ? <LikePressedIcon /> : <LikeIcon />;
          }}
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  text: {
    fontSize: 30,
    color: "white",
    textAlign: "center",
  },
  row: {
    flexDirection: "row",
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CassettePlayer;

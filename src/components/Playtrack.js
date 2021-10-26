//PLAYER COMPONENT 
import React, {useEffect, useState} from 'react';
import {
  Image,
  SafeAreaView,
 
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { Slider } from 'react-native-elements';
import TrackPlayer, {
  Capability,
  Event,
  RepeatMode,
  State,
  usePlaybackState,
  useProgress,
  useTrackPlayerEvents,
} from 'react-native-track-player';
import { togglePlayback } from '../utils/playback';

import {PlayIcon, PauseIcon, SkipIcon, SkippedPressedIcon, PreviousIcon, NextIcon, NextFadedIcon} from '../assets/Icons/PlayerIcons';


// import playlistData from './react/data/playlist.json';

import localTrack from '../assets/Profiles/Jess/Favorite Movie.m4a';

// const playlistData = [

// ]

const setupIfNecessary = async () => {
  // if app was relaunched and music was already playing, we don't setup again.
  const currentTrack = await TrackPlayer.getCurrentTrack();
  if (currentTrack !== null) {
    return;
  }

  await TrackPlayer.setupPlayer({});
  await TrackPlayer.updateOptions({
    stopWithApp: true,
    capabilities: [
      Capability.Play,
      Capability.Pause,
      Capability.SkipToNext,
      Capability.SkipToPrevious,
      Capability.Stop,
    ],
    compactCapabilities: [Capability.Play, Capability.Pause],
    playIcon: PlayIcon,
    pauseIcon: PauseIcon,
    // stopIcon: require('./stop-icon.png'),
    previousIcon: PreviousIcon,
    nextIcon: NextIcon,
    // icon: require('./notification-icon.png')

  });

  await TrackPlayer.add(playlistData);
  await TrackPlayer.add({
    url: localTrack,
    title: 'Pure (Demo)',
    artist: 'David Chavez',
    artwork: 'https://i.scdn.co/image/e5c7b168be89098eb686e02152aaee9d3a24e5b6',
    duration: 28,
  });

  TrackPlayer.setRepeatMode(RepeatMode.Queue);
};

const CassettePlayerOld = () => {
  const playbackState = usePlaybackState();
  const progress = useProgress();

  const [trackArtwork, setTrackArtwork] = useState(null) ;
  const [trackTitle, setTrackTitle] = useState('');
  const [trackArtist, setTrackArtist] = useState('');

  useTrackPlayerEvents([Event.PlaybackTrackChanged], async event => {
    if (
      event.type === Event.PlaybackTrackChanged &&
      event.nextTrack !== undefined
    ) {
      const track = await TrackPlayer.getTrack(event.nextTrack);
      const {title, artist, artwork} = track || {};
      setTrackTitle(title);
      setTrackArtist(artist);
      setTrackArtwork(artwork);
    }
  });

  useEffect(() => {
    setupIfNecessary();
  }, []);

  return (
    <SafeAreaView style={styles.screenContainer}>
      {/* <StatusBar barStyle={'light-content'} /> */}
      <View style={styles.contentContainer}>
        <View style={styles.topBarContainer}>
          <TouchableWithoutFeedback>
            <Text style={styles.queueButton}>Queue</Text>
          </TouchableWithoutFeedback>
        </View>
        
        <Text style={styles.titleText}>{trackTitle}</Text>
        <Text style={styles.artistText}>{trackArtist}</Text>
        <View
        style=
        {{ flex: 1, alignItems: 'stretch', justifyContent: 'center' }}>
        <Slider 
        //   style={styles.progressContainer}
          value={progress.position}
          minimumValue={0}
          maximumValue={progress.duration}
          thumbStyle={{ height: 10, width: 10,  }}
          thumbTintColor="#EC634A"
          minimumTrackTintColor="#FFD479"
          maximumTrackTintColor="#FFFFFF"
          onSlidingComplete={async value => {
            await TrackPlayer.seekTo(value);
          }}
        />
        </View>
        <View style={styles.progressLabelContainer}>
          <Text style={styles.progressLabelText}>
            {new Date(progress.position * 1000).toISOString().substr(14, 5)}
          </Text>
          <Text style={styles.progressLabelText}>
            {new Date((progress.duration - progress.position) * 1000)
              .toISOString()
              .substr(14, 5)}
          </Text>
        </View>
      </View>
      <View style={styles.actionRowContainer}>
        <TouchableWithoutFeedback onPress={() => TrackPlayer.skipToPrevious()}>
          <Text style={styles.secondaryActionButton}>Prev</Text>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => togglePlayback(playbackState)}>
          <Text style={styles.primaryActionButton}>
            {playbackState === State.Playing ? 'Pause' : 'Play'}
          </Text>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => TrackPlayer.skipToNext()}>
          <Text style={styles.secondaryActionButton}>Next</Text>
        </TouchableWithoutFeedback>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: '#212121',
    alignItems: 'center',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
  topBarContainer: {
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: 20,
    justifyContent: 'flex-end',
  },
  queueButton: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFD479',
  },
  artwork: {
    width: 240,
    height: 240,
    marginTop: 30,
    backgroundColor: 'grey',
  },
  titleText: {
    fontSize: 18,
    fontWeight: '600',
    color: 'white',
    marginTop: 30,
  },
  artistText: {
    fontSize: 16,
    fontWeight: '200',
    color: 'white',
  },
  progressContainer: {
    height: 40,
    width: 380,
    marginTop: 25,
    flexDirection: 'row',
  },
  progressLabelContainer: {
    width: 370,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  progressLabelText: {
    color: 'white',
    fontVariant: ['tabular-nums'],
  },
  actionRowContainer: {
    width: '60%',
    flexDirection: 'row',
    marginBottom: 100,
    justifyContent: 'space-between',
  },
  primaryActionButton: {
    fontSize: 18,
    fontWeight: '600',
    color: '#FFD479',
  },
  secondaryActionButton: {
    fontSize: 14,
    color: '#FFD479',
  },
});

export default CassettePlayerOld;



const player = async () => {
    await TrackPlayer.setupPlayer();
    await TrackPlayer.add({
      id: match.id,
      url: match.highlightsLink,
      title: matchName,
      artist: 'Track Artist',
      artwork: require('../assets/ind-vs-eng.jpeg'),
    });
    TrackPlayer.play();
  };




  import React, {useEffect, useState} from 'react';
import {Text, Button, View, Image} from 'react-native';
import TrackPlayer, {
  TrackPlayerEvents,
  STATE_PLAYING,
} from 'react-native-track-player';
import {
  useTrackPlayerProgress,
  useTrackPlayerEvents,
} from 'react-native-track-player/lib/hooks';
import Slider from '@react-native-community/slider';
import styles from './styles';



const playerInit = async () => {
  await TrackPlayer.setupPlayer();
  TrackPlayer.updateOptions({
    stopWithApp: true,
    capabilities: [
      TrackPlayer.CAPABILITY_PLAY,
      TrackPlayer.CAPABILITY_PAUSE,
      TrackPlayer.CAPABILITY_JUMP_FORWARD,
      TrackPlayer.CAPABILITY_JUMP_BACKWARD,
    ],
  });
  await TrackPlayer.add({tracks});
  return true;
};




================
function ProgressBar() {
    const progress = useTrackPlayerProgress();
  
    return (
      <View>
      <View style={styles.progress}>
        <View style={{ flex: progress.position,backgroundColor: "black"}} />
        <View
          style={{
            flex: progress.duration - progress.position,
            backgroundColor: "grey"
          }}
        />
      </View>
     
      </View>
    );
  }
  
  function ControlButton({ title, onPress, disable }) {
    return (
      <TouchableOpacity disabled={disable} style={styles.controlButtonContainer} onPress={onPress}>
      {title}
      </TouchableOpacity>
    );
  }
  
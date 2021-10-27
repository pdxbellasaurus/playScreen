//ACTION/BOTTOM SHEET COMPILED WITH HEADER
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MatchAttributes } from "./MatchPlaylist";
import { MatchTracks } from "./MatchPlaylist";
import { useMatchContext } from "../utils/GlobalState";
import ProfileIcon from "../assets/Icons/ProfileIcon";
import BottomSheet from "reanimated-bottom-sheet";

const MatchProfile = ({ children }) => {
  const [state, dispatch] = useMatchContext();
  btmSheet = React.createRef();

  const renderInner = () => (
    <View style={styles.sheet}>
      <MatchAttributes />
      <MatchTracks />
    </View>
  );

  const renderHeader = () => (
    <View style={styles.header}>
      <View style={styles.sheetHeader}>
        <Text style={styles.text}>{state.currentMatch.matchName}</Text>

        <View style={{ paddingTop: 15, flexDirection: "row" }}>
          <View style={styles.divider} />
          <ProfileIcon style={{ color: "white", alignSelf: "center" }} />
          <View style={styles.divider} />
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.btmContainer}>
      <BottomSheet
        ref={btmSheet}
        snapPoints={[600, 350, 40]}
        renderContent={renderInner}
        renderHeader={renderHeader}
        initialSnap={1}
      />
    </View>
  );
};

export default MatchProfile;

const styles = StyleSheet.create({
  btmContainer: {
    flex: 1,
    backgroundColor: "#3b444b",
    alignItems: "center",
  },

  sheet: {
    backgroundColor: "#000",
    color: "fff",
    height: 600,
    padding: 20,
    opacity: 0.8,
  },

  header: {
    backgroundColor: "#000",
    color: "fff",
    paddingTop: 5,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    opacity: 0.8,
  },

  sheetHeader: {
    alignItems: "center",
  },

  text: {
    color: "white",
  },

  divider: {
    backgroundColor: "#c0c0c0",
    height: 1,
    flex: 1,
    alignSelf: "center",
  },

  title: {
    fontSize: 20,
    height: 30,
    color: "white",
  },
});

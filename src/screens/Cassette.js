//PLAYER AND BOTTOM UP

// import React, { useState } from "react";
// import React from "react";
// import { StyleSheet, Text, View } from "react-native";
// import { SET_CURRENT_MATCH } from "../utils/actions";

import React, { createRef, useEffect } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
  ScrollView,
  Dimensions,
  ImageBackground,
} from "react-native";
import { Button } from "react-native-elements";
import ActionSheet from "react-native-actions-sheet";
import { useMatchContext } from "../utils/GlobalState";

import MatchProfile from "../components/MatchProfile";
import CassettePlayer from "../components/CassettePlayer";
import CassetteHeader from "../components/CassetteHeader";
// import { State } from "react-native-gesture-handler";
const { height } = Dimensions.get("window");

const actionSheetRef = createRef();

//MatchPlaylist = bottom sheet include the person name, attributes and track list to play
//Playtrack
//player
//backround image blurred until peak

const Cassette = ({ props }) => {
  const [state, dispatch] = useMatchContext();

  useEffect(() => {
    actionSheetRef.current?.show();
    // console.log(state.currentMatch)
  });

  let actionSheet;
  // actionSheetRef.current?.setModalVisible(true);

  const matchImage =
    "https://reactnativecode.com/wp-content/uploads/2018/02/Default_Image_Thumbnail.png";

  return (
    <View style={styles.container}>
      <ImageBackground source={{ uri: matchImage }} style={{ height: 600 }}>        
        <CassetteHeader />
        <CassettePlayer />
      </ImageBackground>
      <TouchableOpacity
        onPress={() => {
          actionSheetRef.current?.setModalVisible();
        }}
        style={{
          alignSelf: "center",
          flex: 1,
          backgroundColor: "#f5f5f5",
          borderRadius: 30,
        }}
      >
        <Text>{state.currentMatch.matchName}</Text>
      </TouchableOpacity>

      <View />

      <SafeAreaView>
        <ActionSheet
          onClose={() => {
            console.log("ACTION SHEET CLOSED");
            // actionSheetRef.current?.setModalVisible();
          }}
          ref={actionSheetRef}
          headerAlwaysVisible
          bottomOffset={500}
          statusBarTranslucent={false}
          // bounceOnOpen={true}
          drawUnderStatusBar={false}
          bounciness={4}
          gestureEnabled={true}
          // enabledContentGestureInteraction={false}
          closeOnTouchBackdrop={false}
          defaultOverlayOpacity={0}
          CustomHeaderComponent={
            <Button
              title={state.currentMatch.matchName}
              disabled
              type="clear"
            />
          }
          // headerAlwaysVisible={true}
          closeable={false}
        >
          <View
            style={{
              paddingHorizontal: 12,
            }}
          >
            <ScrollView
              nestedScrollEnabled={true}
              // closeable={false}
              onMomentumScrollEnd={() => {
                actionSheetRef.current?.handleChildScrollEnd();
              }}
              style={styles.scrollview}
            >
              <MatchProfile />
            </ScrollView>
          </View>
        </ActionSheet>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  top: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    borderWidth: 5,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    alignSelf: "center",
  },
});

export default Cassette;

// CURRENTLY DOES NOT STAY OPEN ON HEADER - TODO: CHANGE LIBRARIES TO MORE FEATURES
import React from "react";
import { View, SafeAreaView, ScrollView, StyleSheet} from "react-native";

import { Button } from "react-native-elements";
import ActionSheet from "react-native-actions-sheet";

const MatchActionSheet = ({ children }) => {
  <SafeAreaView>
    <ActionSheet
    style={styles.container}
      onClose={() => {
        console.log("ACTION SHEET CLOSED");
        // actionSheetRef.current?.setModalVisible();
      }}
      ref={actionSheetRef}
      closeable={false}
      headerAlwaysVisible
      bottomOffset={500}
      statusBarTranslucent={false}
      drawUnderStatusBar={false}
      bounciness={4}
      gestureEnabled={true}
      closeOnTouchBackdrop={false}
      defaultOverlayOpacity={0}
      CustomHeaderComponent={
        <Button title={state.currentMatch.matchName} disabled type="clear" style={styles.header} />
      }
    >
      <View
        style={{
          paddingHorizontal: 12,
        }}
      >
        <ScrollView
          nestedScrollEnabled={true}
          onMomentumScrollEnd={() => {
            actionSheetRef.current?.handleChildScrollEnd();
          }}
          style={styles.scrollview}
        >
          <MatchProfile />
        </ScrollView>
      </View>
    </ActionSheet>
  </SafeAreaView>;
};

const styles = StyleSheet.create({
    container: {
     flex: 1,
    padding: 20,
    backgroundColor: '#135282',
    paddingTop: 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 5,
    shadowOpacity: 0.4,

    },
    header: {
        width: '100%',
        height: 50,
    }

  });



export default MatchActionSheet;



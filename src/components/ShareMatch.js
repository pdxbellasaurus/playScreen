import React from 'react';
import { Share, View } from 'react-native';
import ShareIcon from "../assets/Icons/ShareIcon";

const ShareMatch = () => {
  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          'Check out who I matched with',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <View style={{ marginTop: 50 }}>
      <ShareIcon onPress={onShare} title="Share" />
    </View>
  );
};

export default ShareMatch;
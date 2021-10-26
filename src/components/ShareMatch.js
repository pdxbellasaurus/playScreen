import React from 'react';
import { Share, View } from 'react-native';
import ShareIcon from "../assets/Icons/ShareIcon";

const ShareMatch = ({children}) => {
  // TODO: Add share action to globalstate
  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          'My match has the perfect mix tape! Listen to them here.',
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
    <View>
      <ShareIcon onPress={onShare} alt="Share" />
    </View>
  );
};

export default ShareMatch;
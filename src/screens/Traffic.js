import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useMatchContext } from "../utils/GlobalState";
import ShareMatch from "../components/ShareMatch";
import SendReportIcon from "../assets/Icons/SendReportIcon";

const Traffic = ({ children }) => {
  const [state, dispatch] = useMatchContext();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Current Track</Text>
      <Text style={styles.subtitle}>CurrentMatch</Text>

      <View style={[styles.row, { margin: "30%" }]}>
        <SendReportIcon style={{ marginLeft: 30 }} />

        <Text style={{ marginLeft: 30, fontSize: 20, color: "white" }}>
          Report
        </Text>
      </View>

      <View style={{ marginLeft: "33%", marginTop: 40 }}>
        <TouchableOpacity onPress={ShareMatch} style={styles.row}>
          <ShareMatch />
          <Text style={{ marginLeft: 30, fontSize: 20, color: "white" }}>
            Share
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#135282",
  },

  title: {
    marginTop: 100,
    fontSize: 20,
    color: "white",
    alignSelf: "center",    
  },

  subtitle: {
    fontSize: 15,
    color: "white",
    alignSelf: "center",
  },

  row: {
    flexDirection: "row",
    marginBottom: 20,
    alignItems: "center",
    width: "100%",
  },
});

export default Traffic;

import React from "react";
import { View, StyleSheet, Platform } from "react-native";
import Colors from "../constants/colors";
import TitleText from "./TitleText";
const Header = (props) => {
  return (
    <View style={styles.header}>
      <TitleText style={styles.headerTitle}>{props.title}</TitleText>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 90,
    padding: 36,
    backgroundColor: Platform.OS === "android" ? Colors.primary : "gold",
    alignItems: "center",
    justifyContent: "center",
  },
  headerTitle: {
    height: 30,
    color: "#ffffff",
    fontSize: 18,
  },
});

export default Header;

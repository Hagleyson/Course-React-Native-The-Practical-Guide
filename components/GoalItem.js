import React from "react";
import { StyleSheet, Text, View } from "react-native";

const GoalItem = (props) => {
  return (
    <View style={styles.listItem}>
      <Text>{props.item.item.value}</Text>
    </View>
  );
};

export default GoalItem;
const styles = StyleSheet.create({
  listItem: {
    marginVertical: 10,
    padding: 10,
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1,
  },
});

import React from "react";
import { StyleSheet, Text, TouchableNativeFeedback, View } from "react-native";
//olhar variações do touchable
const GoalItem = (props) => {
  return (
    <TouchableNativeFeedback activeOpacity={0.8} onPress={props.onDelete}>
      <View style={styles.listItem} onPress>
        <Text>{props.item.item.value}</Text>
      </View>
    </TouchableNativeFeedback>
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

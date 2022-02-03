import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
//olhar variações do touchable
const GoalItem = (props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={props.onDelete.bind(null, props.item.item.id)}
    >
      <View style={styles.listItem} onPress>
        <Text>{props.item.item.value}</Text>
      </View>
    </TouchableOpacity>
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

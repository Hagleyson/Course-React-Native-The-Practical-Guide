import React from "react";

import { View, Text, StyleSheet, Button } from "react-native";

const CategoryMeal = (props) => {
  return (
    <View style={styles.screen}>
      <Text>The Category Meal Screen!</Text>
      <Button
        title="GO to Details"
        onPress={() => {
          /*props.navigation.push("MealDetail")
           *
           */
          props.navigation.navigate("MealDetail");
        }}
      />
      <Button
        title="GO back"
        onPress={() => {
          // props.navigation.goBack();
          props.navigation.pop();
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
  },
});

export default CategoryMeal;

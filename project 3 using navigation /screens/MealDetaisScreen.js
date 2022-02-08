import React from "react";

import { View, Text, StyleSheet, Button } from "react-native";
import { MEALS } from "../data/dummy-data";

const MealDetailScreen = (props) => {
  const mealId = props.navigation.getParam("mealID");

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  return (
    <View style={styles.screen}>
      <Text>{selectedMeal.title}</Text>
      <Button
        title="Go Back to Categories"
        onPress={() => {
          //volta para o primeiro parente
          props.navigation.popToTop();
        }}
      />
    </View>
  );
};
MealDetailScreen.navigationOptions = (navigationData) => {
  const mealsId = navigationData.navigation.getParam("mealID");
  const selectedMeal = MEALS.find((meal) => meal.id === mealsId);
  return {
    headerTitle: selectedMeal.title,
  };
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MealDetailScreen;

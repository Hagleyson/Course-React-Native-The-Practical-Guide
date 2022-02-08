import React from "react";

import { View, Text, StyleSheet, Button } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/HeaderButton";

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
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Favorite"
          iconName="ios-star"
          onPress={() => console.log("ok")}
        />
      </HeaderButtons>
    ),
    //headerRight: () => <Text>Hagleyson</Text>,
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

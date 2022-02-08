import React from "react";

import { View, StyleSheet, FlatList } from "react-native";
import MealItem from "../components/MealItem";
import { CATEGORIES, MEALS } from "../data/dummy-data";

const CategoryMeal = (props) => {
  const catId = props.navigation.getParam("categoryId");

  const renderMealItem = (itemData) => {
    return (
      <MealItem
        title={itemData.item.title}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
        onSelect={() => {}}
        image={itemData.item.imageUrl}
      />
    );
  };
  const displayedMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(catId) >= 0
  );

  return (
    <View style={styles.screen}>
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={displayedMeals}
        renderItem={renderMealItem}
        style={{ width: "100%" }}
      />
      {/* <Text>The Category Meal Screen!</Text>
      <Text>{selectedCategory.title}</Text>
      <Button
        title="GO to Details"
        onPress={() => {
          props.navigation.push("MealDetail")          
          props.navigation.navigate("MealDetail");
        }}
      /> */}
      {/* <Button
        title="GO back"
        onPress={() => {
          // props.navigation.goBack();
          props.navigation.pop();
        }}
      /> */}
    </View>
  );
};
CategoryMeal.navigationOptions = (navigationData) => {
  const catId = navigationData.navigation.getParam("categoryId");
  const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);
  return {
    headerTitle: selectedCategory.title,
  };
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
});

export default CategoryMeal;

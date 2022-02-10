import React from "react";
import { useSelector } from "react-redux";
import MealList from "../components/MealsList";
import { CATEGORIES } from "../data/dummy-data";

const CategoryMeal = (props) => {
  const catId = props.navigation.getParam("categoryId");
  const availableMeals = useSelector((state) => state.meals.filteredMeals);

  const displayedMeals = availableMeals.filter(
    (meal) => meal.categoryIds.indexOf(catId) >= 0
  );

  return <MealList listData={displayedMeals} navigation={props.navigation} />;
};
/* <Text>The Category Meal Screen!</Text>
      <Text>{selectedCategory.title}</Text>
      <Button
        title="GO to Details"
        onPress={() => {
          props.navigation.push("MealDetail")          
          props.navigation.navigate("MealDetail");
        }}
      /> */
/* <Button
        title="GO back"
        onPress={() => {
          // props.navigation.goBack();
          props.navigation.pop();
        }}
      /> */

CategoryMeal.navigationOptions = (navigationData) => {
  const catId = navigationData.navigation.getParam("categoryId");
  const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);
  return {
    headerTitle: selectedCategory.title,
  };
};
export default CategoryMeal;

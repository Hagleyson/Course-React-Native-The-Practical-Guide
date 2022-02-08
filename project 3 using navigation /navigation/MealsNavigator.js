import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMeal from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetaisScreen";

const MealsNavigator = createStackNavigator({
  Categories: CategoriesScreen,
  CategoryMeals: CategoryMeal,
  MealDetail: MealDetailScreen,
});

export default createAppContainer(MealsNavigator);

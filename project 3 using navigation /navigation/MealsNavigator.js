import { Platform } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { createDrawerNavigator } from "react-navigation-drawer";

import { Ionicons } from "@expo/vector-icons";

import Colors from "../constants/Colors";

import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMeal from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetaisScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import FilterScreen from "../screens/FiltersScreen";
const defaulStackNavOptions = {
  // mode: "card",
  // initialRouteName: "MealDetail",
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: Platform.OS === "android" ? Colors.primaryColor : "",
    },
    headerTintColor: Platform.OS === "android" ? "white" : Colors.primaryColor,
  },
};

const MealsNavigator = createStackNavigator(
  {
    Categories: CategoriesScreen,
    CategoryMeals: {
      screen: CategoryMeal,
    },
    MealDetail: MealDetailScreen,
  },
  defaulStackNavOptions
);

const FavNavigator = createStackNavigator(
  {
    Favorite: {
      screen: FavoritesScreen,
    },
    MealDetail: MealDetailScreen,
  },
  defaulStackNavOptions
);

const tabScreenConfig = {
  Meals: {
    screen: MealsNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return (
          <Ionicons name="ios-restaurant" size={25} color={tabInfo.tintColor} />
        );
      },
      tabBarColor: Colors.primaryColor,
    },
  },
  FavoritesScreen: {
    screen: FavNavigator,

    navigationOptions: {
      tabBarLabel: "Favorites",
      tabBarIcon: (tabInfo) => {
        return <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />;
      },
      tabBarColor: Colors.accentColor,
    },
  },
};

const MealsFavTabNavigator =
  Platform.OS === "android"
    ? createMaterialBottomTabNavigator(tabScreenConfig, {
        activeColor: "white",
        shifting: true,
      })
    : createBottomTabNavigator({
        tabScreenConfig,
        tabBarOptions: {
          activeTintColor: "white",
        },
      });

const FiltersNavigator = createStackNavigator({
  Filters: FilterScreen,
});

const MainNavigator = createDrawerNavigator(
  {
    MealsFavs: MealsFavTabNavigator,
    Filters: FiltersNavigator,
  },
  {}
);

export default createAppContainer(MainNavigator);

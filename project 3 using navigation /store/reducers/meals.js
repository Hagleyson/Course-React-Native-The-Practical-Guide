import { MEALS } from "../../data/dummy-data";
import { SET_FILTERS, TOGGLE_FAVORITE } from "../actions/meals";

const initialState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favoriteMeals: [],
};

const mealsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVORITE:
      const existingIndex = state.favoriteMeals.findIndex(
        (meal) => action.mealId === meal.id
      );
      if (existingIndex >= 0) {
        const updatedFavMeals = [...state.favoriteMeals];
        updatedFavMeals.splice(existingIndex, 1);
        return { ...state, favoriteMeals: updatedFavMeals };
      } else {
        const meal = state.meals.find((meal) => meal.id === action.mealId);
        return { ...state, favoriteMeals: state.favoriteMeals.concat(meal) };
      }
    case SET_FILTERS:
      const appliedfilters = action.filters;
      const filteredMeals = state.meals.filter((meal) => {
        if (appliedfilters.glutenFree && !meal.isGlutenFree) {
          return false;
        }
        if (appliedfilters.lactoseFree && !meal.lactoseFree) {
          return false;
        }
        if (appliedfilters.vegan && !meal.vegan) {
          return false;
        }
        if (appliedfilters.isVegetarian && !meal.isVegetarian) {
          return false;
        }
        return true;
      });
      return { ...state, filteredMeals };
    default:
      return state;
  }
};
export default mealsReducer;

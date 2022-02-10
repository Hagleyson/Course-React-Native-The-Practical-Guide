import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

import ProductsReducer from "./store/reducers/products";
import ShopNavigator from "./navigation/ShopNavigator";
import { Text } from "react-native";

import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import { useState } from "react";
import { composeWithDevTools } from "redux-devtools-extension";
import cartReducer from "./store/reducers/cart";

const rootReducer = combineReducers({
  products: ProductsReducer,
  cart: cartReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

const fetchFonts = () => {
  return Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => {
          setFontLoaded(true);
        }}
        onError={() => {}}
      />
    );
  }

  return (
    <Provider store={store}>
      <ShopNavigator />
    </Provider>
  );
}

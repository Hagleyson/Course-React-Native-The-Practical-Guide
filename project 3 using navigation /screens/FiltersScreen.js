import React, { useEffect, useState, useCallback } from "react";

import { View, Text, StyleSheet, Switch, Platform } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";
import Colors from "../constants/Colors";

const FilterSwitch = (props) => {
  return (
    <View style={styles.filterItem}>
      <Text>{props.title}</Text>
      <Switch
        trackColor={{ false: Colors.accentColor, true: Colors.primaryColor }}
        thumbColor={Platform.OS === "android" ? Colors.primaryColor : ""}
        value={props.value}
        onValueChange={props.onValueChange}
      />
    </View>
  );
};

const FiltersScreen = (props) => {
  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);

  const saveFilters = useCallback(() => {
    const appliedFilters = {
      glutenFree: isGlutenFree,
      lactoseFree: isLactoseFree,
      vegan: isVegan,
      isVegetarian: isVegetarian,
    };
    console.log(appliedFilters);
  }, [isGlutenFree, isLactoseFree, isVegan, isVegetarian]);

  useEffect(() => {
    props.navigation.setParams({ save: saveFilters });
  }, [saveFilters]);
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Available Filters / Restrictions</Text>
      <View style={styles.filterContainer}>
        <FilterSwitch
          title="Gluten-free"
          value={isGlutenFree}
          onValueChange={(newValue) => setIsGlutenFree(newValue)}
        />
        <FilterSwitch
          title="Lactose-free"
          value={isLactoseFree}
          onValueChange={(newValue) => setIsLactoseFree(newValue)}
        />
        <FilterSwitch
          title="Vegan"
          value={isVegan}
          onValueChange={(newValue) => setIsVegan(newValue)}
        />
        <FilterSwitch
          title="Vegetarian"
          value={isVegetarian}
          onValueChange={(newValue) => setIsVegetarian(newValue)}
        />
      </View>
    </View>
  );
};

FiltersScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Filter Meals",
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Menu"
          iconName="ios-menu"
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        ></Item>
      </HeaderButtons>
    ),
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Save"
          iconName="ios-save"
          onPress={navData.navigation.getParam("save")}
        ></Item>
      </HeaderButtons>
    ),
  };
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 22,
    margin: 20,
    textAlign: "center",
  },
  filterContainer: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",
  },
  filterItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
});

export default FiltersScreen;

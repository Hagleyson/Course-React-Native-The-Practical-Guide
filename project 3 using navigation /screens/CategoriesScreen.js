import React from "react";

import { View, Text, StyleSheet, Button } from "react-native";

const CategoriesScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>The Categories Screen!</Text>
      <Button
        title="Go to Meals!"
        onPress={() => {
          /*
          props.navigation.replace("CategoryMeals");
          muito usado para  login
          */
          props.navigation.navigate("CategoryMeals");
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

export default CategoriesScreen;

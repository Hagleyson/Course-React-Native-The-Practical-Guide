import React from "react";

import { View, Text, StyleSheet, Button } from "react-native";

const MealDetailScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>The MealDetail Screen !</Text>
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

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
  },
});

export default MealDetailScreen;
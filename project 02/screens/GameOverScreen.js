import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";
import Colors from "../constants/colors";
import BodyText from "../components/BodyText";
import TitleText from "../components/TitleText";
import backgroundImage from "../assets/success.png";
const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <TitleText>The Game is Over!</TitleText>
      <BodyText>Number of rounds: {props.roundsNumbers}</BodyText>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/success.png")}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <BodyText>Number was: {props.userNumber}</BodyText>
      <Button
        title="NEW GAME"
        onPress={props.onRestartGame}
        color={Colors.primary}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: 300,
    height: 300,
    marginVertical: 10,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: "black",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
export default GameOverScreen;

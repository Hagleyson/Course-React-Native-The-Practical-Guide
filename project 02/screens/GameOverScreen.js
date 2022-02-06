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
      <Image source={backgroundImage} />
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
    justifyContent: "center",
    alignItems: "center",
  },
});
export default GameOverScreen;

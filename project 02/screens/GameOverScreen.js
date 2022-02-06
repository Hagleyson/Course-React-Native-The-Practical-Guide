import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";
import Colors from "../constants/colors";
import BodyText from "../components/BodyText";
import TitleText from "../components/TitleText";
import backgroundImage from "../assets/success.png";
import colors from "../constants/colors";
import MainButton from "../components/MainButton";
const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <TitleText>The Game is Over!</TitleText>
      <BodyText>Number of rounds: {props.roundsNumbers}</BodyText>
      <View style={styles.imageContainer}>
        <Image
          // source={require("../assets/success.png")}
          fadeDuration={2000}
          source={{
            uri: "https://image.freepik.com/fotos-gratis/montanha-nevoenta-na-natureza-nordica-do-norte_21730-13527.jpg",
          }}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <View style={styles.resultContainer}>
        <BodyText style={styles.resultText}>
          You phone needed{" "}
          <Text style={styles.highlight}> {props.roundsNumbers}</Text> rounds to
          guess the number{" "}
          <Text style={styles.highlight}>{props.userNumber}</Text>.
        </BodyText>
      </View>

      <MainButton onPress={props.onRestartGame}>NEW GAME</MainButton>
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
  resultContainer: {
    width: "80%",
    marginVertical: 20,
  },
  resultText: {
    textAlign: "center",
    fontSize: 20,
  },
  highlight: {
    color: colors.accent,
    fontFamily: "open-sans-bold",
    textAlign: "center",
  },
});
export default GameOverScreen;

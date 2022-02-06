import React, { useEffect, useRef, useState } from "react";

import { View, Text, StyleSheet, Alert, ScrollView } from "react-native";
import Card from "../components/Card";
import MainButton from "../components/MainButton";
import NumberContainer from "../components/NumberContainer";
import defaultStyle from "../constants/default-style";
import { Ionicons } from "@expo/vector-icons";
import BodyText from "../components/BodyText";

const generateRandomBetween = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const rndNum = Math.floor(Math.random() * (max - min) + min);
  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
};

const renderListItem = (guess, numOfRound) => {
  return (
    <View key={guess} style={styles.listItem}>
      <BodyText>#{numOfRound}</BodyText>
      <BodyText>{guess}</BodyText>
    </View>
  );
};

const GameScreen = (props) => {
  const initialGuess = generateRandomBetween(1, 100, props.userChoice);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [pastGuesses, setPastGuess] = useState([initialGuess]);
  const currentLow = useRef(1);
  const currentHigh = useRef(100);

  const { userChoice, onGameOver } = props;

  useEffect(() => {
    if (currentGuess === userChoice) {
      onGameOver(pastGuesses.length);
    }
  }, [pastGuesses]);

  const nextGuessHandler = (direction) => {
    if (
      (direction === "lower" && currentGuess < props.userChoice) ||
      (direction === "greater" && currentGuess > props.userChoice)
    ) {
      Alert.alert("Don't", "You know that this is wrong...", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    }
    if (direction === "lower") {
      currentHigh.current = currentGuess;
    }
    if (direction === "greater") {
      currentLow.current = currentGuess + 1;
    }

    const nextNumber = generateRandomBetween(
      currentLow.current,
      currentHigh.current,
      currentGuess
    );
    setCurrentGuess(nextNumber);
    // setRounds((curRounds) => curRounds + 1);
    setPastGuess((curPastGuesses) => [nextNumber, ...curPastGuesses]);
  };

  return (
    <View style={styles.screen}>
      <Text style={defaultStyle.bodyText}>Opponent's Guess</Text>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={styles.buttonsContainer}>
        <MainButton onPress={nextGuessHandler.bind(this, "lower")}>
          <Ionicons name="md-remove" size={24} color={"white"} />
        </MainButton>
        <MainButton onPress={nextGuessHandler.bind(this, "greater")}>
          <Ionicons name="md-add" size={24} color={"white"} />
        </MainButton>
      </Card>
      <View style={styles.list}>
        <ScrollView>
          {pastGuesses.map((guess, idx) =>
            renderListItem(guess, pastGuesses.length - idx)
          )}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    width: "100%",
    padding: 10,
    alignItems: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
    width: "80%",
  },
  list: {
    flex: 1,
    width: "80%",
  },
  listItem: {
    borderColor: "#ccc",
    borderWidth: 2,
    borderRadius: 10,
    padding: 15,
    marginVertical: 10,
    backgroundColor: "white",
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around",
  },
});

export default GameScreen;

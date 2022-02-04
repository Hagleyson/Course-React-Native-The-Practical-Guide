import { StyleSheet, View } from "react-native";
import Header from "./components/Header";
import StartGameScreen from "./screens/StartGameScreen";

export default function App() {
  return (
    <View style={styles.screen}>
      <Header title="Guess a Number" />
      <StartGameScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    height: "100%",
    paddingTop: 20,
    justifyContent: "flex-start",
    alignItems: "center",
  },
});

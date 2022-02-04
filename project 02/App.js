import { StyleSheet, View } from "react-native";
import Header from "./components/Header";

export default function App() {
  return (
    <View style={styles.screen}>
      <Header title="Guess a Number" />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    height: "100%",
    paddingTop: 20,
    backgroundColor: "black",
    justifyContent: "flex-start",
    alignItems: "center",
  },
});

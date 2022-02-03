import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, StyleSheet, TextInput, View, Text } from "react-native";

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState("");
  const [couseGoal, setCouseGoal] = useState([]);

  function goalInputHandler(enteredText) {
    setEnteredGoal(enteredText);
  }

  const addGoalHanlder = () => {
    setCouseGoal((currentGoals) => [enteredGoal, ...currentGoals]);
    setEnteredGoal("");
  };

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goal"
          style={styles.input}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <Button style={{ width: "20%" }} title="add" onPress={addGoalHanlder} />
      </View>
      <View>
        {couseGoal.map((goal, idx) => (
          <Text key={idx}>{goal}</Text>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    padding: 10,
    width: "80%",
    borderColor: "black",
    borderWidth: 1,
  },
});

import React, { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";

const GoallInput = (props) => {
  const [enteredGoal, setEnteredGoal] = useState("");

  function goalInputHandler(enteredText) {
    setEnteredGoal(enteredText);
  }
  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Course Goal"
        style={styles.input}
        onChangeText={goalInputHandler}
        value={enteredGoal}
      />
      <Button
        style={{ width: "20%" }}
        title="add"
        onPress={props.onPress.bind(null, enteredGoal)}
      />
    </View>
  );
};
export default GoallInput;
const styles = StyleSheet.create({
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

import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, StyleSheet, View, FlatList } from "react-native";
import GoalItem from "./components/GoalItem";
import GoallInput from "./components/GoallInput";

export default function App() {
  const [couseGoal, setCouseGoal] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addGoalHanlder = (enteredGoal) => {
    setCouseGoal((currentGoals) => [
      { id: Math.random().toString(), value: enteredGoal },
      ...currentGoals,
    ]);
    setIsAddMode(false);
  };
  const removeGoalHandler = (goalId) => {
    setCouseGoal((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== goalId);
    });
  };
  return (
    <View style={styles.screen}>
      <Button title="Add New Goal" onPress={() => setIsAddMode(true)} />
      <GoallInput
        visible={isAddMode}
        onPress={addGoalHanlder}
        onCancel={() => setIsAddMode(false)}
      />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={couseGoal}
        renderItem={(itemData) => (
          <GoalItem onDelete={removeGoalHandler} item={itemData} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
});

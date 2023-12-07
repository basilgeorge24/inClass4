import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import React, { useState } from "react";

//any aditional imports
import Task from "./components/Task";

export default function App() {
  // input area
  const [task, setTask] = useState();

  // to store all tasks
  const [taskItems, setTaskItems] = useState([]);

  // event listener
  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task]);
    setTask(null);
  };

  //event listener for deleting task
  const completeTask = () => {
    let copyItems = [...taskItems];
    //remove the specific task as selected by the user
    copyItems.splice(index, 1);
    //update original array byu rewrting it wit copied array
    setTaskItems(copyItems);
  };
  return (
    <View style={styles.container}>
      {/* list all the To-Do items */}
      <View style={styles.taskWrapper}>
        <Text style={styles.sectionTitle}>My To Do Items</Text>
        {/* Container for all the tasks to be reneders */}
        <View style={styles.items}>
          {taskItems.map((item, index) => {
            return (
              <TouchableOpacity
                key={index}
                onPress={() => {
                  completeTask(index);
                }}
              >
                <Task text={item} />
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
      {/* user input for todo tasks */}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
        <TextInput
          style={styles.input}
          placeholder={"Add your to do item here"}
          value=""
          onChangeText={(text) => setTask(text)}
        />
        <TouchableOpacity onPress={() => handleAddTask}>
          <View style={styles.addWrapper}>
            <Text>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EAED",
  },
  taskWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  items: {
    marginTop: 30,
  },
  writeTaskWrapper: {
    position: "absolute",
    bottom: 60,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: "#fff",
    borderRadius: 60,
    borderColor: "#C0C0C0",
    borderWidth: 1,
    width: 250,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: "#fff",
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#C0C0C0",
    borderWidth: 1,
  },
});

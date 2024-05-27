import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useState, useEffect } from "react";

import { useRouter } from "expo-router";

const explore = () => {
    const router = useRouter();
  const [todos, setTodos] = useState([]);
  const today = moment().format("MMM Do");
  const [isModalVisible, setModalVisible] = useState(false);
  const [category, setCategory] = useState("All");
  const [todo, setTodo] = useState("");
  const [pendingTodos, setPendingTodos] = useState([]);
  const [completedTodos, setCompletedTodos] = useState([]);
  const [marked, setMarked] = useState(false);
  const suggestions = [
    {
      id: "0",
      todo: "Apunte Psicologia:",
    },
    {
      id: "1",
      todo: "Apunte Fisica: ",
    },
    {
      id: "2",
      todo: "Apunte Quimica: ",
    },
    {
      id: "3",
      todo: "Apunte Matematicas: ",
    },
    {
      id: "4",
      todo: "Apunte Lenguaje: ",
    },
    {
      id: "5",
      todo: "Apunte religion: ",
    },
  ];
  /*const addTodo = async () => {
    try {
      const todoData = {
        title: todo,
        category: category,
      };

      axios
        .post("http://localhost:3000/todos/6583eea7c5bc35503ef0f5ae", todoData)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log("error", error);
        });

      await getUserTodos();
      setModalVisible(false);
      setTodo("");
    } catch (error) {
      console.log("error", error);
    }
  };*/
  useEffect(() => {
    getUserTodos();
  }, [marked, isModalVisible]);
  /*const getUserTodos = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3000/users/6583eea7c5bc35503ef0f5ae/todos`
      );

      console.log(response.data.todos);
      setTodos(response.data.todos);

      const fetchedTodos = response.data.todos || [];
      const pending = fetchedTodos.filter(
        (todo) => todo.status !== "completed"
      );

      const completed = fetchedTodos.filter(
        (todo) => todo.status === "completed"
      );

      setPendingTodos(pending);
      setCompletedTodos(completed);
    } catch (error) {
      console.log("error", error);
    }
  };*/
  /*const markTodoAsCompleted = async (todoId) => {
    try {
      setMarked(true);
      const response = await axios.patch(
        `http://localhost:3000/todos/${todoId}/complete`
      );
      console.log(response.data);
    } catch (error) {
      console.log("error", error);
    }
  };*/
  console.log("completed", completedTodos);
  console.log("pending", pendingTodos);
  return (
    <> 
      <View
        style={{
          marginHorizontal: 10,
          marginVertical: 10,
          flexDirection: "row",
          alignItems: "center",
          gap: 12,
        }}
      >
        
      </View>

      

    </>
  );
};

export default explore;

const styles = StyleSheet.create({});

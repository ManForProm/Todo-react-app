import { FloatingActionButton } from "@/components/FloatingActionButton";
import { createTask, Task } from "@/models/Task";
import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useState } from "react";
import { View } from "react-native";
import { TaskList } from "./(screens)/TaskList";

// Sample data structure for tasks
const initialTasks: Task[] = [
  createTask(
    "Complete the report",
    "Finish the financial report for Q3.",
    new Date("2024-09-30T10:00:00"),
    "123 Business St, Office 4A",
    "In Progress"
  ),
  createTask(
    "Team Meeting",
    "Discuss the new project timeline.",
    new Date("2024-08-11T10:00:00"),
    "456 Conference Room",
    "Completed"
  ),
  createTask(
    "Client Follow-up",
    "Call the client for feedback on the last deliverable.",
    new Date("2024-07-03T14:00:00"),
    "Remote",
    "Cancelled"
  ),
  createTask(
    "Code Review",
    "Review the code changes for the latest feature.",
    new Date("2024-06-24T16:00:00"),
    "123 Developer Hub",
    "In Progress"
  ),
  createTask(
    "Product Demo",
    "Demo the product to the sales team.",
    new Date("2024-03-30T11:00:00"),
    "789 Sales Dept",
    "Completed"
  ),
  createTask(
    "Budget Planning",
    "Plan the budget for the next quarter.",
    new Date("2024-03-30T10:00:00"),
    "Finance Office",
    "Cancelled"
  ),
  createTask(
    "Code Review",
    "Review the code changes for the latest feature.",
    new Date("2024-06-24T16:00:00"),
    "123 Developer Hub",
    "In Progress"
  ),
  createTask(
    "Product Demo",
    "Demo the product to the sales team.",
    new Date("2024-03-30T11:00:00"),
    "789 Sales Dept",
    "Completed"
  ),
  createTask(
    "Budget Planning",
    "Plan the budget for the next quarter.",
    new Date("2024-03-30T10:00:00"),
    "Finance Office",
    "Cancelled"
  ),
];

// Define the types for the stack's route parameters
type RootStackParamList = {
  TaskList: undefined;
  AddTask: { onAddTask: (newTask: Task) => void };
};

// Define types for the navigation prop
type TaskListScreenNavigationProp = StackNavigationProp<RootStackParamList, 'TaskList'>;

type AddTaskScreenRouteProp = RouteProp<RootStackParamList, 'AddTask'>;

// Props for the TaskListScreen
type TaskListScreenProps = {
  navigation: TaskListScreenNavigationProp;
};

export default function TaskListScreen({ navigation }: TaskListScreenProps) {
  const [tasks, setTasks] = useState(initialTasks);

  const handleAddTask = (newTask: Task) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };
  return (
    <View style={{ flex: 1 }}>
      <TaskList tasks={tasks} />
      <FloatingActionButton
        onPress={() =>
          navigation.navigate("AddTask", { onAddTask: handleAddTask })
        }
      />
    </View>
  );
}

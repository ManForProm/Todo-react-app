import { getStatusColors, Task } from "@/models/Task";
import React, { useState } from "react";
import {
  Animated,
  FlatList,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useAnimatedRef } from "react-native-reanimated";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

interface TaskListProps {
  tasks: Array<Task>;
}

export function TaskList({ tasks }: TaskListProps) {
  const [sortBy, setSortBy] = useState<"date" | "status">("date");
  const statusColors = getStatusColors();
  const scrollRef = useAnimatedRef<Animated.ScrollView>();

  // Function to sort tasks based on selected criteria
  const sortedTasks = [...tasks].sort((a, b) => {
    if (sortBy === "date") {
      return b.date.getTime() - a.date.getTime();
    }
    return a.status.localeCompare(b.status);
  });

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ThemedView style={styles.sortOptions}>
        <TouchableOpacity onPress={() => setSortBy("date")}>
          <ThemedText type="defaultSemiBold" style={styles.sortButton}>
            Sort by Date
          </ThemedText>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSortBy("status")}>
          <ThemedText type="defaultSemiBold" style={styles.sortButton}>
            Sort by Status
          </ThemedText>
        </TouchableOpacity>
      </ThemedView>
        <FlatList
          data={sortedTasks}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <ThemedView
              style={[
                styles.taskContainer,
                { borderColor: statusColors[item.status].light },
              ]}
            >
              <ThemedText lightColor="" type="title">
                {item.title}
              </ThemedText>
              <ThemedText type="default">{item.date.toDateString()}</ThemedText>
              <ThemedText
                lightColor={statusColors[item.status].light}
                darkColor={statusColors[item.status].dark}
                type="subtitle"
              >
                {item.status}
              </ThemedText>
            </ThemedView>
          )}
        />
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sortOptions: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 10,
    marginHorizontal: 10,
    padding: 12,
  },
  sortButton: {
    padding: 8,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
  },
  taskContainer: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  scrollView: {
    backgroundColor: "pink",
    marginHorizontal: 20,
  },
});

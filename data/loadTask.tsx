import { Task } from "@/models/Task";
import AsyncStorage from '@react-native-async-storage/async-storage';

const loadTasks = async (): Promise<Task[]> => {
    try {
      const jsonValue = await AsyncStorage.getItem('@tasks');
      return jsonValue != null ? JSON.parse(jsonValue) : [];
    } catch (e) {
      console.error('Failed to load tasks', e);
      return [];
    }
  };
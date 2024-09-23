import { Task } from '@/models/Task';
import AsyncStorage from '@react-native-async-storage/async-storage';

const saveTasks = async (tasks: Task[]) => {
  try {
    const jsonValue = JSON.stringify(tasks);
    await AsyncStorage.setItem('@tasks', jsonValue);
  } catch (e) {
    console.error('Failed to save tasks', e);
  }
};
import 'react-native-get-random-values';
import { v4 as uuidv4 } from "uuid";

export type TaskStatus = 'In Progress' | 'Completed' | 'Cancelled';

// Task model
export interface Task {
  id: string;
  title: string;
  description: string;
  date: Date;
  location: string;
  status: TaskStatus;
}

export function createTask(
  title: string,
  description: string,
  date: Date,
  location: string,
  status: TaskStatus = 'In Progress'
): Task {
  return {
    id: uuidv4(),
    title,
    description,
    date,
    location,
    status,
  };
}

  export function getStatusColors() {
    return {
      'In Progress': { light: '#FFD700', dark: '#FFA500' }, // Example: Yellow/Orange
      'Completed': { light: '#32CD32', dark: '#006400' },   // Example: Light Green/Dark Green
      'Cancelled': { light: '#FF4500', dark: '#8B0000' },   // Example: Orange Red/Dark Red
    };
  }
import { Task, TaskStatus } from "@/models/Task";

export function updateTaskStatus(tasks: Task[], taskId: string, newStatus: TaskStatus): Task[] {
    return tasks.map(task =>
      task.id === taskId ? { ...task, status: newStatus } : task
    );
  }
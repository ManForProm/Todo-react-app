# Task Management App

This is a Task Management App built with React Native. The app allows users to create, manage, and track their tasks with ease. The application supports both Android and iOS platforms.

## Features

- **Task Creation:** Users can add new tasks with details such as title, description, date, time, and location.
- **Task Management:** Users can view the list of tasks, including their status (e.g., In Progress, Completed, Cancelled).
- **Date and Time Pickers:** Separate date and time pickers are provided for Android, while iOS supports a combined datetime picker.
- **Local Storage:** Task data is stored locally on the device.

## Technologies Used

- **React Native**: For building the mobile application.
- **Expo**: For development and testing.
- **TypeScript**: Ensuring type safety and better development experience.
- **React Navigation**: For handling navigation within the app.
- **@react-native-community/datetimepicker**: For selecting dates and times.
- **Jest**: For unit testing components and logic.

## Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/your-username/your-repo-name.git
    cd your-repo-name
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Run the app**:
    - For Android:
      ```bash
      npx expo start --android
      ```
    - For iOS:
      ```bash
      npx expo start --ios
      ```

## Usage

- **Add Task**: Tap on the "+" button to navigate to the Add Task screen, fill in the details, and save the task.
- **View Tasks**: The main screen lists all the tasks with their status. Tasks are sorted by date and time.
- **Edit/Delete Tasks**: Future updates may include functionality for editing and deleting tasks.

## File Structure

```plaintext
.
├── assets
│   └── fonts
├── components
│   └── FloatingActionButton.tsx
├── models
│   └── Task.ts
├── screens
│   ├── AddTaskScreen.tsx
│   └── TaskListScreen.tsx
├── hooks
│   └── useColorScheme.ts
├── App.tsx
└── README.md
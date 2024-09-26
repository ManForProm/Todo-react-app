import { createTask } from '@/models/Task';
import DateTimePicker from '@react-native-community/datetimepicker';
import { RouteProp, useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Button, Platform, StyleSheet, TextInput, View } from 'react-native';

type AddTaskScreenRouteProp = {
  onAddTask: (task: any) => void; // Define the expected params type
};

type AddTaskScreenProps = {
  route: RouteProp<{ params: AddTaskScreenRouteProp }, 'params'>; // Properly type the route
};

export default function AddTaskScreen({ route }: AddTaskScreenProps) {
  const navigation = useNavigation();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());
  const [location, setLocation] = useState('');
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);

  const handleDateChange = (event: Event, selectedDate?: Date) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const handleTimeChange = (event: Event, selectedTime?: Date) => {
    const currentTime = selectedTime || time;
    setShowTimePicker(Platform.OS === 'ios');
    setTime(currentTime);
  };

  const handleAddTask = () => {
    // Combine date and time into a single Date object
    const combinedDateTime = new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate(),
      time.getHours(),
      time.getMinutes()
    );

    const newTask = createTask(title, description, combinedDateTime, location, 'In Progress');
    route.params.onAddTask(newTask); // Use the onAddTask function from route.params
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Task Title"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={styles.input}
        placeholder="Task Description"
        value={description}
        onChangeText={setDescription}
      />

      {/* Date Picker */}
      <Button title="Select Date" onPress={() => setShowDatePicker(true)} />
      {showDatePicker && (
        <DateTimePicker
          value={date}
          mode="date"
          display="default"
          onChange={handleDateChange}
        />
      )}

      {/* Time Picker */}
      <Button title="Select Time" onPress={() => setShowTimePicker(true)} />
      {showTimePicker && (
        <DateTimePicker
          value={time}
          mode="time"
          display="default"
          onChange={handleTimeChange}
        />
      )}

      <TextInput
        style={styles.input}
        placeholder="Location"
        value={location}
        onChangeText={setLocation}
      />
      <Button title="Add Task" onPress={handleAddTask} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
  },
});
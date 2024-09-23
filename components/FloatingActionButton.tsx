import { MaterialIcons } from '@expo/vector-icons'; // You can use any icon library you prefer
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface FloatingActionButtonProps {
  onPress: () => void;
  icon?: string;
  color?: string;
  backgroundColor?: string;
  label?: string;
}

export const FloatingActionButton: React.FC<FloatingActionButtonProps> = ({
  onPress,
  icon = 'add', // Default icon
  color = '#fff', // Default icon color
  backgroundColor = '#6200ea', // Default background color
  label,
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.button, { backgroundColor }]}
        onPress={onPress}
        activeOpacity={0.8}
      >
        <MaterialIcons name={icon} size={24} color={color} />
      </TouchableOpacity>
      {label && <Text style={styles.label}>{label}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    alignItems: 'center',
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 5,
  },
  label: {
    marginTop: 8,
    color: '#6200ea',
    fontSize: 14,
  },
});
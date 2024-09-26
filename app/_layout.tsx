import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";
import NotFoundScreen from "./+not-found";

import { useColorScheme } from "@/hooks/useColorScheme";
import AddTaskScreen from "./AddTask";
import TaskListScreen from "./main";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const Stack = createStackNavigator();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack.Navigator>
        {/* Replace '(tabs)' with an actual component */}
        <Stack.Screen
          name="main"
          component={TaskListScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
         name="AddTask"
         component={AddTaskScreen} 
         options={{ headerShown: false }}/>
        <Stack.Screen
          name="NotFound"
          component={NotFoundScreen} // Add a component for not found screen
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </ThemeProvider>
  );
}

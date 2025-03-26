import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useColorScheme } from "react-native";

// custom imports
import { Colors } from "@/constants/Colors";

export default function StackLayout() {
  const colorScheme = useColorScheme();

  return (
    <>
      <StatusBar style={colorScheme === "light" ? "dark" : "light"} />
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="home"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="note"
          options={{
            headerShown: false,
          }}
        />
      </Stack>
    </>
  );
}

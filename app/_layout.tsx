import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useColorScheme } from "react-native";

// custom imports
import { Colors } from "@/constants/Colors";

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <>
      <StatusBar style={colorScheme === "light" ? "dark" : "light"} />
      <Stack
        screenOptions={{
          headerShown: true,
          headerStyle: { backgroundColor: "#222" },
          headerTintColor: "#f9f8f1",
        }}
      >
        <Stack.Screen name="/index" />
        <Stack.Screen name="/note" />
      </Stack>
    </>
  );
}

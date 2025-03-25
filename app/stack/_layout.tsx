import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useColorScheme } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";

// custom imports
import { Colors } from "@/constants/Colors";

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <>
      <StatusBar style={colorScheme === "light" ? "dark" : "light"} />
      <Stack
        screenOptions={{
          headerShown: false,
          headerStyle: { backgroundColor: "#222" },
          headerTintColor: "#f9f8f1",
        }}
      >
        <Stack.Screen name="/stack/index" />
        <Stack.Screen name="/stack/note" />
      </Stack>
    </>
  );
}

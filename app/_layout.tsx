import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
  return (
    <>
      <StatusBar style="light" />
      <Stack
        screenOptions={{
          headerShown: true,
          headerStyle: { backgroundColor: "#222" },
          headerTintColor: "#f9f8f1",
        }}
      >
        <Stack.Screen name="/" />
        <Stack.Screen name="/note" />
      </Stack>
    </>
  );
}

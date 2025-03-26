import { StatusBar } from "expo-status-bar";
import { useColorScheme } from "react-native";
import { Drawer } from "expo-router/drawer";
import { Text } from "react-native";

// custom imports
import { Colors } from "@/constants/Colors";
import NoteList from "@/components/NoteList";

export default function Root() {
  const colorScheme = useColorScheme();
  return (
    <Drawer
      screenOptions={{
        drawerStyle: {
          backgroundColor:
            colorScheme === "light"
              ? Colors.light.primary
              : Colors.dark.primary,
        },
        swipeEdgeWidth: 500,
      }}
      drawerContent={() => <NoteList />}
    >
      <Drawer.Screen
        name="stack"
        options={{
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="index"
        options={{
          headerShown: false,
        }}
      />
    </Drawer>
  );
}

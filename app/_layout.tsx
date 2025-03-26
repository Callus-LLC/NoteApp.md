import { StatusBar } from "expo-status-bar";
import { useColorScheme } from "react-native";
import { Drawer } from "expo-router/drawer";
import { Text } from "react-native";

// custom imports
import { Colors } from "@/constants/Colors";
import DrawerContent from "@/components/drawer/DrawerContent";
import { NoteListProvider } from "@/context/NoteListContext";

export default function Root() {
  const colorScheme = useColorScheme();
  return (
    <NoteListProvider>
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
        drawerContent={() => <DrawerContent />}
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
    </NoteListProvider>
  );
}

import { Drawer } from "expo-router/drawer";
import { useContext } from "react";

// custom imports
import { Colors } from "@/constants/Colors";
import DrawerContent from "@/components/drawer/DrawerContent";
import { NoteListProvider } from "@/context/NoteListContext";
import {
  ColorSchemeContext,
  ColorSchemeProvider,
} from "@/context/ColorSchemeContext";
import { FontSizeProvider } from "@/context/FontSizeContext";

export default function Root() {
  const { colorScheme, setColorScheme } = useContext(ColorSchemeContext); // get theme
  return (
    <FontSizeProvider>
      <ColorSchemeProvider>
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
      </ColorSchemeProvider>
    </FontSizeProvider>
  );
}

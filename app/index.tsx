import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  Pressable,
  useColorScheme,
} from "react-native";
import { Stack, Link, Redirect } from "expo-router";
import MaterialIcons from "@expo/vector-icons/MaterialIcons"; // for icons

// custom imports
import CreateNoteButton from "@/components/notePage/CreateNoteButton"; // create note button import (takes 1 argument)
import { Colors } from "@/constants/Colors";

export default function Index() {
  const colorScheme = useColorScheme();
  const styles = createStyles(colorScheme);
  return (
    <View style={styles.screen}>
      <Stack.Screen name="/index" options={{ headerShown: false }} />
      <Redirect href="/stack/home" />
    </View>
  );
}

type ColorScheme = "light" | "dark" | undefined | null;

function createStyles(colorScheme: ColorScheme) {
  return StyleSheet.create({
    screen: {
      backgroundColor:
        colorScheme === "light" ? Colors.light.primary : Colors.dark.primary,
      height: "100%",
      width: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      justifyContent: "center",
    },

    header: {
      fontSize: 40,
      fontWeight: "bold",
      color:
        colorScheme === "light"
          ? Colors.light.secondary
          : Colors.dark.secondary,
    },

    headerSecondary: {
      fontSize: 20,
      fontWeight: "300",
      fontStyle: "italic",
      marginBottom: 30,
      maxWidth: 300,
    },
  });
}

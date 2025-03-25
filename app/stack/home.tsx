import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  Pressable,
  useColorScheme,
} from "react-native";
import { Stack, Link } from "expo-router";
import MaterialIcons from "@expo/vector-icons/MaterialIcons"; // for icons

// custom imports
import CreateNoteButton from "@/components/CreateNoteButton"; // create note button import (takes 1 argument)
import { Colors } from "@/constants/Colors";

export default function Home() {
  const colorScheme = useColorScheme(); // get theme

  const styles = createStyles(colorScheme);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack.Screen name="/index" options={{ headerShown: false }} />

      <View style={styles.screen}>
        <Text style={styles.header}>Welcome to NoteApp.md</Text>
        <Text
          style={[
            styles.headerSecondary,
            {
              color: Colors.light.tertiary,
            },
          ]}
        >
          Your new minimalist note-taking app assistant
        </Text>
        <Link href={"/stack/note"} asChild>
          <CreateNoteButton title="Create a note"></CreateNoteButton>
        </Link>
      </View>
    </SafeAreaView>
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
      padding: 20,
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

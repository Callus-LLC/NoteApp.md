import { Text, View, SafeAreaView, StyleSheet } from "react-native";
import { Stack } from "expo-router";
import { useContext } from "react";

// custom imports
import CreateNoteButton from "@/components/drawer/noteList/CreateNoteButton"; // create note button import (takes 1 argument)
import { Colors } from "@/constants/Colors";
import { ColorSchemeContext } from "@/context/ColorSchemeContext";
import { FontSizeContext } from "@/context/FontSizeContext";
import FontSizeType from "@/types/FontSizeType";

export default function Home() {
  const { colorScheme, setColorScheme } = useContext(ColorSchemeContext); // get theme
  const { fontSize, setFontSize } = useContext(FontSizeContext); // get font size
  const styles = createStyles(colorScheme, fontSize);

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

        <CreateNoteButton title="Create a note"></CreateNoteButton>
      </View>
    </SafeAreaView>
  );
}

type ColorScheme = "light" | "dark" | undefined | null;

function createStyles(colorScheme: ColorScheme, fontSize: FontSizeType) {
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
      fontSize: fontSize * 2,
      fontWeight: "bold",
      color:
        colorScheme === "light"
          ? Colors.light.secondary
          : Colors.dark.secondary,
    },

    headerSecondary: {
      fontSize: fontSize * 1.2,
      fontWeight: "300",
      fontStyle: "italic",
      marginBottom: 30,
      maxWidth: 300,
    },
  });
}

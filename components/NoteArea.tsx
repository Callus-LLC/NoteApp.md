import {
  TextInput,
  StyleSheet,
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useState } from "react";
import { useColorScheme } from "react-native";

// custom imports
import { Colors } from "@/constants/Colors";

const NoteArea = () => {
  const colorScheme = useColorScheme();

  const styles = createStyles(colorScheme);

  return <View style={styles.noteContainer}></View>;
};

type ColorScheme = "light" | "dark" | undefined | null;

function createStyles(colorScheme: ColorScheme) {
  return StyleSheet.create({
    noteContainer: {
      borderColor:
        colorScheme === "light"
          ? Colors.light.secondary
          : Colors.dark.secondary,
      borderWidth: 1,
      borderStyle: "solid",
      height: "80%",
      width: "80%",
      marginHorizontal: "auto",
      marginTop: 20,
      backgroundColor: "red",
    },

    scrollView: {
      flex: 1,
      width: "100%",
      height: "100%",
    },
  });
}

export default NoteArea;

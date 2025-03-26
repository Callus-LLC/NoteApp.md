import React from "react";
import { View, StyleSheet, useColorScheme } from "react-native";

// custom import
import { Colors } from "@/constants/Colors";
import NoteList from "@/components/noteList/NoteList";

const DrawerContent = () => {
  const colorScheme = useColorScheme();
  const styles = createStyles(colorScheme);
  return (
    <View style={styles.container}>
      <NoteList></NoteList>
    </View>
  );
};

type ColorScheme = "light" | "dark" | undefined | null;

function createStyles(colorScheme: ColorScheme) {
  return StyleSheet.create({
    container: {
      backgroundColor:
        colorScheme === "light" ? Colors.light.primary : Colors.dark.primary,
      width: "100%",
      height: "100%",
    },
  });
}

export default DrawerContent;

import { TextInput, StyleSheet, useColorScheme } from "react-native";
import { useState } from "react";

// custom imports
import { Colors } from "@/constants/Colors";

const TitleInput = () => {
  const colorScheme = useColorScheme();
  const [titleText, setTitleText] = useState("Untitled Note");

  const styles = createStyles(colorScheme);

  return (
    <TextInput
      // @ts-ignore
      style={styles.titleInput}
      maxLength={45}
      placeholder="Untitled note"
      placeholderTextColor={
        colorScheme === "light"
          ? Colors.light.quaternary
          : Colors.dark.quaternary
      }
      value={titleText}
      onChangeText={(text) => setTitleText(text)}
    ></TextInput>
  );
};

// type declaration
type ColorScheme = "light" | "dark" | undefined | null;

function createStyles(colorScheme: ColorScheme) {
  return {
    titleInput: {
      backgroundColor:
        colorScheme === "light" ? Colors.light.primary : Colors.dark.primary,
      borderColor:
        colorScheme === "light"
          ? Colors.light.secondary
          : Colors.dark.secondary,
      color:
        colorScheme === "light"
          ? Colors.light.secondary
          : Colors.dark.secondary,
      width: "60%",
      paddingHorizontal: 10,
      marginRight: "auto",
      marginLeft: 10,
      height: 50,
      fontSize: 22,
    },
  };
}

export default TitleInput;

import { TextInput, StyleSheet } from "react-native";
import { useContext, useState } from "react";

// custom imports
import { Colors } from "@/constants/Colors";
import { ColorSchemeContext } from "@/context/ColorSchemeContext";

const TitleInput = ({ title = "Untitled Note" }: { title: string }) => {
  const { colorScheme, setColorScheme } = useContext(ColorSchemeContext); // get theme
  const [titleText, setTitleText] = useState(title);

  const styles = createStyles(colorScheme);

  return (
    <TextInput
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
  return StyleSheet.create({
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
      width: "70%",
      paddingHorizontal: 10,
      marginRight: "auto",
      marginLeft: 10,
      height: 50,
      fontSize: 22,
    },
  });
}

export default TitleInput;

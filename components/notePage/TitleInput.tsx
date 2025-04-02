import { TextInput, StyleSheet, View } from "react-native";
import { useContext, useState } from "react";

// custom imports
import { Colors } from "@/constants/Colors";
import { ColorSchemeContext } from "@/context/ColorSchemeContext";
import { FontSizeContext } from "@/context/FontSizeContext";
import FontSizeType from "@/types/FontSizeType";

const TitleInput = ({ title = "Untitled Note" }: { title: string }) => {
  const { colorScheme } = useContext(ColorSchemeContext); // get theme
  const { fontSize } = useContext(FontSizeContext); // get font size
  const [titleText, setTitleText] = useState(title);

  const styles = createStyles(colorScheme, fontSize); // create styles based on theme

  return (
    <View style={styles.titleContainer}>
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
    </View>
  );
};

// type declaration
type ColorScheme = "light" | "dark" | undefined | null;

function createStyles(colorScheme: ColorScheme, fontSize: FontSizeType) {
  return StyleSheet.create({
    titleInput: {
      flex: 1,
      color:
        colorScheme === "light"
          ? Colors.light.secondary
          : Colors.dark.secondary,
      fontSize: fontSize < 24 ? fontSize * 1.5 : fontSize * 1.1,
      marginVertical: "auto",
    },

    titleContainer: {
      width: "70%",
      paddingHorizontal: 10,
      marginRight: "auto",
      marginLeft: 10,
      height: 50,
    },
  });
}

export default TitleInput;

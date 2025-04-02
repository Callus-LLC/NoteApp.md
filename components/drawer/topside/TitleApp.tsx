import { Text, View, StyleSheet } from "react-native";
import { useContext } from "react";

// custom import
import { Colors } from "@/constants/Colors";
import { FontSizeContext } from "@/context/FontSizeContext";
import FontSizeType from "@/types/FontSizeType";
import { ColorSchemeContext } from "@/context/ColorSchemeContext";

const TitleApp = () => {
  const { colorScheme } = useContext(ColorSchemeContext);
  const { fontSize } = useContext(FontSizeContext);

  const styles = createStyles(colorScheme, fontSize);

  return (
    <View style={styles.container}>
      <Text
        style={[
          styles.text,
          styles.heading,
          {
            color:
              colorScheme === "light"
                ? Colors.light.tertiary
                : Colors.dark.tertiary,
          },
        ]}
      >
        NoteApp.md
      </Text>
    </View>
  );
};

// type declaration
type ColorScheme = "light" | "dark" | undefined | null;

function createStyles(colorScheme: ColorScheme, fontSize: FontSizeType) {
  return StyleSheet.create({
    container: {
      width: "90%",
      height: 70,
      marginTop: 30,
    },

    text: {
      marginVertical: "auto",
      color:
        colorScheme === "light"
          ? Colors.light.secondary
          : Colors.dark.secondary,
      fontSize: fontSize,
    },

    heading: {
      fontSize: fontSize * 1.9,
      fontWeight: "bold",
      marginBottom: 10,
      marginLeft: 25,
    },
  });
}

export default TitleApp;

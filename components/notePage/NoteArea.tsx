import {
  TextInput,
  StyleSheet,
  View,
  Platform,
  Dimensions,
} from "react-native";
import { useContext, useState } from "react";
import { LinearGradient } from "expo-linear-gradient"; // import for static fade effect

// custom imports
import { Colors } from "@/constants/Colors";
import { ColorSchemeContext } from "@/context/ColorSchemeContext";
import { FontSizeContext } from "@/context/FontSizeContext";
import FontSizeType from "@/types/FontSizeType";

const NoteArea = ({ content }: { content: string }) => {
  const { colorScheme, setColorScheme } = useContext(ColorSchemeContext); // get theme
  const [height, setHeight] = useState(40); // Initial height
  const [text, setText] = useState(content !== undefined ? content : "");
  const { fontSize, setFontSize } = useContext(FontSizeContext); // get font size
  const styles = createStyles(colorScheme, Platform, fontSize);

  // window width
  const windowWidth = Dimensions.get("window").width;

  return (
    <View
      style={
        windowWidth > 400 ? styles.noteContainer : styles.noteContainerSmall
      }
    >
      <LinearGradient
        colors={[
          colorScheme === "light" ? Colors.light.quinary : Colors.dark.quinary,
          "transparent",
        ]} // Transparent to white fade
        style={styles.gradientTop}
      />

      <View>
        <TextInput
          style={styles.noteInputArea}
          multiline
          value={text}
          onChangeText={setText}
          onChange={(e) => (e.nativeEvent.text = text)}
          onContentSizeChange={
            (event) => setHeight(event.nativeEvent.contentSize.height) // Adjust height dynamically
          }
          editable
          placeholder="This is where ideas begin..."
          placeholderTextColor={
            colorScheme === "light"
              ? Colors.light.quaternary
              : Colors.dark.quaternary
          }
          keyboardType="default"
        ></TextInput>
      </View>

      <LinearGradient
        colors={[
          "transparent",
          colorScheme === "light" ? Colors.light.quinary : Colors.dark.quinary,
        ]} // Transparent to white fade
        style={styles.gradientBottom}
      />
    </View>
  );
};

// styles
type ColorScheme = "light" | "dark" | undefined | null;
type PlatformType = any;

function createStyles(
  colorScheme: ColorScheme,
  platform: PlatformType,
  fontSize: FontSizeType
) {
  return StyleSheet.create({
    noteContainer: {
      borderColor:
        colorScheme === "light"
          ? Colors.light.secondary
          : Colors.dark.secondary,
      borderWidth: 1,
      borderStyle: "solid",
      borderRadius: 20,
      backgroundColor:
        colorScheme === "light" ? Colors.light.quinary : Colors.dark.quinary,
      height: "85%",
      width: "85%",
      marginHorizontal: "auto",
      marginTop: 20,
      overflow: "hidden",
      elevation:
        platform.OS === "android"
          ? colorScheme === "light"
            ? 5
            : 10
          : undefined,
    },

    noteContainerSmall: {
      borderColor:
        colorScheme === "light"
          ? Colors.light.secondary
          : Colors.dark.secondary,
      borderWidth: 1,
      borderStyle: "solid",
      borderRadius: 20,
      backgroundColor:
        colorScheme === "light" ? Colors.light.quinary : Colors.dark.quinary,
      height: "85%",
      width: "92%",
      marginHorizontal: "auto",
      marginTop: 20,
      overflow: "hidden",
      elevation:
        platform.OS === "android"
          ? colorScheme === "light"
            ? 5
            : 10
          : undefined,
    },

    noteInputArea: {
      width: "90%",
      minHeight: 60,
      marginHorizontal: "auto",
      marginVertical: 20,
      fontSize: fontSize * 1.1,
      color:
        colorScheme === "light"
          ? Colors.light.secondary
          : Colors.dark.secondary,
      lineHeight: 30,
    },

    gradientBottom: {
      position: "absolute",
      bottom: 30,
      left: 0,
      right: 0,
      height: 10, // Height of the fade effect
    },

    gradientTop: {
      position: "absolute",
      left: 0,
      right: 0,
      top: 28,
      height: 10, // Height of the fade effect
      zIndex: 1,
    },
  });
}

export default NoteArea;

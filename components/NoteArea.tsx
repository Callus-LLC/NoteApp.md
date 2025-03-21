import {
  TextInput,
  StyleSheet,
  View,
  Platform,
  Dimensions,
} from "react-native";
import { useState } from "react";
import { useColorScheme } from "react-native";
import { LinearGradient } from "expo-linear-gradient"; // import for static fade effect

// custom imports
import { Colors } from "@/constants/Colors";

const NoteArea = () => {
  const colorScheme = useColorScheme();
  const [height, setHeight] = useState(40); // Initial height

  const styles = createStyles(colorScheme, Platform);

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

function createStyles(colorScheme: ColorScheme, platform: PlatformType) {
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
      fontSize: 18,
      color:
        colorScheme === "light"
          ? Colors.light.secondary
          : Colors.dark.secondary,
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

import React, { forwardRef, useContext } from "react";
import { View, Text, StyleSheet, TouchableNativeFeedback } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Link } from "expo-router";

// custom imports
import { Colors } from "@/constants/Colors";
import Data from "@/constants/data/NoteData";
import { ColorSchemeContext } from "@/context/ColorSchemeContext";
import { FontSizeContext } from "@/context/FontSizeContext";
import FontSizeType from "@/types/FontSizeType";

interface Props {
  title: string;
  onPress?: () => void;
}

const CreateNoteButton = forwardRef<View, Props>(({ title, onPress }, ref) => {
  const { colorScheme, setColorScheme } = useContext(ColorSchemeContext); // get theme
  const { fontSize, setFontSize } = useContext(FontSizeContext); // get font size

  const newId = Data[Data.length - 1].id + 1;

  // Move dynamic styles inside the component
  const dynamicStyles = StyleSheet.create({
    buttonContainer: {
      borderColor:
        colorScheme === "light"
          ? Colors.light.secondary
          : Colors.dark.secondary,
      backgroundColor:
        colorScheme === "light" ? Colors.light.primary : Colors.dark.primary,
    },
    buttonText: {
      color:
        colorScheme === "light"
          ? Colors.light.secondary
          : Colors.dark.secondary,
    },
  });

  const styles = createStyle(fontSize); // Create styles based on font size

  return (
    <View ref={ref} style={styles.buttonParentContainer}>
      <Link href={`/stack/note/${newId}`} asChild>
        <TouchableNativeFeedback
          background={TouchableNativeFeedback.Ripple("#2c5784", false)}
          onPress={onPress}
        >
          <View
            style={[
              styles.buttonContainer, // Base styles
              dynamicStyles.buttonContainer, // Dynamic styles
              { display: "flex", flexDirection: "row" }, // Inline only if necessary
            ]}
          >
            <Text style={[styles.buttonText, dynamicStyles.buttonText]}>
              {title}
            </Text>
            <MaterialIcons
              name="add"
              size={30}
              color={dynamicStyles.buttonText.color} // Using dynamic style here
            />
          </View>
        </TouchableNativeFeedback>
      </Link>
    </View>
  );
});

export default CreateNoteButton;

function createStyle(fontSize: FontSizeType) {
  return StyleSheet.create({
    buttonParentContainer: {
      borderRadius: 10,
      overflow: "hidden",
      width: "60%",
      maxWidth: 200,
      zIndex: 999,
    },
    buttonContainer: {
      width: "100%",
      height: 50,
      marginHorizontal: "auto",
      marginRight: "25%",
      borderWidth: 1,
      borderStyle: "solid",
      borderRadius: 10,
      alignItems: "center",
      justifyContent: "center",
    },
    buttonText: {
      marginBottom: "2%",
      fontSize: fontSize < 22 ? fontSize * 1.1 : fontSize * 0.9,
    },
  });
}

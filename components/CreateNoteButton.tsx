import React, { forwardRef } from "react";
import { View, Text, StyleSheet, TouchableNativeFeedback } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useColorScheme } from "react-native";

// custom imports
import { Colors } from "@/constants/Colors";

interface Props {
  title: string;
  onPress?: () => void;
}

const CreateNoteButton = forwardRef<View, Props>(({ title, onPress }, ref) => {
  const colorScheme = useColorScheme();

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

  return (
    <View ref={ref} style={styles.buttonParentContainer}>
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
    </View>
  );
});

export default CreateNoteButton;

const styles = StyleSheet.create({
  buttonParentContainer: {
    borderRadius: 10,
    overflow: "hidden",
    width: "60%",
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
    fontSize: 20,
  },
});
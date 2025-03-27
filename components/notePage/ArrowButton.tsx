import React, { forwardRef, useContext } from "react";
import { View, StyleSheet, TouchableNativeFeedback } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Link } from "expo-router";

// custom imports
import { Colors } from "@/constants/Colors";
import { ColorSchemeContext } from "@/context/ColorSchemeContext";

interface Props {
  onPress?: () => void;
}

const ArrowButton = forwardRef<View, Props>(({ onPress }, ref) => {
  const { colorScheme, setColorScheme } = useContext(ColorSchemeContext); // get theme

  const styles = createStyles(colorScheme);
  return (
    <View style={styles.titleArrowContainer}>
      <Link href="/stack/home" asChild>
        <TouchableNativeFeedback
          background={TouchableNativeFeedback.Ripple(
            colorScheme === "light"
              ? Colors.light.tertiary
              : Colors.dark.tertiary,
            false
          )}
          onPress={onPress}
        >
          <View>
            <MaterialIcons
              name="navigate-before"
              color={
                colorScheme === "light"
                  ? Colors.light.quaternary
                  : Colors.dark.quaternary
              }
              size={50}
            ></MaterialIcons>
          </View>
        </TouchableNativeFeedback>
      </Link>
    </View>
  );
});

type ColorScheme = "light" | "dark" | undefined | null;

function createStyles(colorScheme: ColorScheme) {
  return StyleSheet.create({
    titleArrowContainer: {
      width: 50,
      height: 50,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 50,
      overflow: "hidden",
    },
  });
}

export default ArrowButton;

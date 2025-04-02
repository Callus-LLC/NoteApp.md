import { View, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useContext } from "react";

// custom import
import { Colors } from "@/constants/Colors";
import { ColorSchemeContext } from "@/context/ColorSchemeContext";

export default function ImageProfile({
  size,
  little,
}: {
  size: number;
  little: boolean;
}) {
  const { colorScheme } = useContext(ColorSchemeContext);

  const styles = createStyles(colorScheme, size, little);
  return (
    <View style={styles.userImage}>
      <MaterialIcons
        name="person"
        size={size}
        color={
          colorScheme === "light" ? Colors.light.quinary : Colors.dark.quinary
        }
      ></MaterialIcons>
    </View>
  );
}

// type declaration
type ColorScheme = "light" | "dark" | undefined | null;

function createStyles(colorScheme: ColorScheme, size: number, little: boolean) {
  return StyleSheet.create({
    userImage: {
      borderRadius: size,
      width: size,
      height: size,
      backgroundColor:
        colorScheme === "light"
          ? Colors.light.quaternary
          : Colors.dark.quaternary,
      marginLeft: little ? 10 : 0,
      marginRight: little ? "5%" : 0,
      overflow: "hidden",
    },
  });
}

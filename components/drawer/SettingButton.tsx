import {
  View,
  StyleSheet,
  TouchableNativeFeedback,
  useWindowDimensions,
} from "react-native";
import { Link } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";
import { useContext } from "react";

// custom import
import { Colors } from "@/constants/Colors";
import { ColorSchemeContext } from "@/context/ColorSchemeContext";

const ParameterButton = () => {
  const { colorScheme, setColorScheme } = useContext(ColorSchemeContext); // get theme
  const width = useWindowDimensions().width;
  const styles = createStyles(colorScheme, width);

  return (
    <View style={styles.container}>
      <Link href="/stack/settings" asChild>
        <TouchableNativeFeedback
          background={TouchableNativeFeedback.Ripple(
            colorScheme === "light"
              ? Colors.light.tertiary
              : Colors.dark.tertiary,
            false
          )}
        >
          <View style={styles.innerContainer}>
            <MaterialIcons
              style={styles.icon}
              name="settings"
              size={40}
              color={
                colorScheme === "light"
                  ? Colors.light.secondary
                  : Colors.dark.secondary
              }
            ></MaterialIcons>
          </View>
        </TouchableNativeFeedback>
      </Link>
    </View>
  );
};

type ColorScheme = "light" | "dark" | undefined | null;

function createStyles(colorScheme: ColorScheme, width: number) {
  return StyleSheet.create({
    container: {
      position: "absolute",
      bottom: 20,
      right: width >= 400 ? "20%" : "6%",
      borderRadius: 50,
      overflow: "hidden",
      backgroundColor: "transparent",
    },

    innerContainer: {
      width: 50,
      height: 51,
      borderRadius: 50,
    },

    icon: {
      margin: "auto",
    },
  });
}

export default ParameterButton;

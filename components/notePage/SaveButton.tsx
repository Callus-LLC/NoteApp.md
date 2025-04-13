import {
  Text,
  View,
  StyleSheet,
  TouchableNativeFeedback,
  Platform,
  Dimensions,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useContext } from "react";

// custom imports
import { Colors } from "@/constants/Colors";
import { ColorSchemeContext } from "@/context/ColorSchemeContext";
import { FontSizeContext } from "@/context/FontSizeContext";
import FontSizeType from "@/types/FontSizeType";

interface Props {
  onPress?: () => void;
}

const SaveButton = ({ onPress }: Props) => {
  const { colorScheme, setColorScheme } = useContext(ColorSchemeContext); // get theme
  const { fontSize, setFontSize } = useContext(FontSizeContext); // get font size
  const styles = CreateStyles(colorScheme, Platform, fontSize);

  // window width
  const windowWidth = Dimensions.get("window").width;

  return (
    <View style={windowWidth > 450 ? styles.container : styles.containerSmall}>
      <TouchableNativeFeedback
        background={TouchableNativeFeedback.Ripple("#2c5784", false)}
        onPress={onPress}
      >
        {windowWidth > 450 ? (
          <View style={styles.innerContainer}>
            <MaterialIcons
              name="save"
              size={30}
              color={
                colorScheme === "light"
                  ? Colors.light.secondary
                  : Colors.dark.secondary
              }
            />
            <Text style={styles.text}>Save</Text>
          </View>
        ) : (
          <View style={styles.innerContainerSmall}>
            <MaterialIcons
              name="save"
              size={25}
              color={
                colorScheme === "light"
                  ? Colors.light.secondary
                  : Colors.dark.secondary
              }
            />
          </View>
        )}
      </TouchableNativeFeedback>
    </View>
  );
};

type ColorScheme = "light" | "dark" | undefined | null;

function CreateStyles(
  colorScheme: ColorScheme,
  platform: any,
  fontSize: FontSizeType
) {
  return StyleSheet.create({
    container: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
      borderRadius: 10,
      width: 100,
      height: 45,
      elevation:
        platform.OS === "android"
          ? colorScheme === "light"
            ? 5
            : 10
          : undefined,
      marginRight: "5%",
    },

    containerSmall: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
      borderRadius: 50,
      width: 40,
      height: 40,
      elevation:
        platform.OS === "android"
          ? colorScheme === "light"
            ? 5
            : 10
          : undefined,
      marginRight: "5%",
    },

    text: {
      color:
        colorScheme === "light"
          ? Colors.light.secondary
          : Colors.dark.secondary,
      fontSize: fontSize * 0.9,
      fontWeight: "bold",
      marginLeft: 5,
    },

    innerContainer: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor:
        colorScheme === "light" ? Colors.light.quinary : Colors.dark.quinary,
      borderRadius: 10,
      width: 100,
      height: 50,
    },

    innerContainerSmall: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor:
        colorScheme === "light" ? Colors.light.quinary : Colors.dark.quinary,
      borderRadius: 50,
      width: 50,
      height: 50,
    },
  });
}

export default SaveButton;

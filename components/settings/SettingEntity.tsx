import {
  Text,
  View,
  StyleSheet,
  Switch,
  TouchableNativeFeedback,
  Platform,
  useWindowDimensions,
  TouchableOpacity,
} from "react-native";
import { useState, useContext } from "react";
import { MaterialIcons } from "@expo/vector-icons";

// custom imports
import { Colors } from "@/constants/Colors";
import ModalCenter from "@/components/general/ModalCenter";
import { ColorSchemeContext } from "@/context/ColorSchemeContext";
import { FontSizeContext } from "@/context/FontSizeContext";
import FontSizeType from "@/types/FontSizeType";

type Props = {
  title: string;
  text: string;
  mode: "edit" | "toggle" | "dropdown";
  fction?: (condition: boolean) => void;
  defaultValue?: string | boolean | number;
};

const defaultFction = (condition: boolean) => {
  console.log(condition);
};

const ParamEntity = ({
  title,
  defaultValue = false,
  text,
  fction = defaultFction,
  mode = "toggle",
}: Props) => {
  // begining of the function
  const [isEnabled, setIsEnabled] = useState(defaultValue as boolean);
  const { colorScheme, setColorScheme } = useContext(ColorSchemeContext); // get theme
  const { fontSize, setFontSize } = useContext(FontSizeContext); // get font size

  const width = useWindowDimensions().width;

  const styles = createStyles(colorScheme, Platform, width, fontSize);
  const toggleSwitch = () => setIsEnabled(!isEnabled);

  return (
    <View style={styles.container}>
      <TouchableNativeFeedback
        background={TouchableNativeFeedback.Ripple(
          colorScheme === "light" ? Colors.light.tertiary : Colors.dark.primary,
          false
        )}
      >
        <View style={styles.innerContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.titleText}>{title}</Text>
            <Text style={styles.text}>{text}</Text>
          </View>

          {mode === "toggle" && (
            <Switch
              style={styles.toggleButton}
              trackColor={{
                false:
                  colorScheme === "light"
                    ? Colors.light.secondary
                    : Colors.dark.quaternary,
                true:
                  colorScheme === "light"
                    ? Colors.light.tertiary
                    : Colors.dark.tertiary,
              }}
              thumbColor={
                colorScheme === "light"
                  ? Colors.light.quaternary
                  : Colors.dark.secondary
              }
              onValueChange={toggleSwitch}
              value={isEnabled}
              onChange={(e) => fction(!isEnabled)}
            ></Switch>
          )}

          {mode === "edit" && (
            <TouchableOpacity style={styles.editIcon} activeOpacity={0.5}>
              <MaterialIcons
                name="edit"
                size={40}
                color={
                  colorScheme === "light"
                    ? Colors.light.secondary
                    : Colors.dark.secondary
                }
              ></MaterialIcons>
            </TouchableOpacity>
          )}

          {mode === "dropdown" && (
            <TouchableOpacity style={styles.editIcon} activeOpacity={0.5}>
              <MaterialIcons
                name="change-circle"
                size={40}
                color={
                  colorScheme === "light"
                    ? Colors.light.secondary
                    : Colors.dark.secondary
                }
              ></MaterialIcons>
            </TouchableOpacity>
          )}
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};

type ColorScheme = "light" | "dark" | undefined | null;

function createStyles(
  colorScheme: ColorScheme,
  platform: any,
  width: number,
  textSize: FontSizeType
) {
  return StyleSheet.create({
    container: {
      width: width >= 400 ? "85%" : "95%",
      height: 100,
      marginBottom: 20,
      backgroundColor:
        colorScheme === "light" ? Colors.light.quinary : Colors.dark.quinary,
      borderRadius: 10,
      overflow: "hidden",
      marginHorizontal: "auto",
      elevation:
        platform.OS === "android"
          ? colorScheme === "light"
            ? 5
            : 10
          : undefined,
    },

    innerContainer: {
      width: "100%",
      height: "100%",
      padding: 20,
      display: "flex",
      flexDirection: "row",
    },

    text: {
      color:
        colorScheme === "light"
          ? Colors.light.quaternary
          : Colors.dark.quaternary,
      fontSize: textSize * 0.9,
    },

    titleText: {
      color:
        colorScheme === "light" ? Colors.light.tertiary : Colors.dark.tertiary,
      fontSize: textSize * 1.1,
      fontWeight: "500",
    },

    textContainer: {
      width: "70%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },

    toggleButton: {
      width: "15%",
      height: "80%",
      marginVertical: "auto",
      marginLeft: "auto",
      marginRight: width >= 400 ? "5%" : 0,
      transform: [{ scaleX: 1.3 }, { scaleY: 1.3 }],
    },

    editIcon: {
      width: "20%",
      height: "80%",
      marginVertical: "auto",
      marginLeft: "auto",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  });
}

export default ParamEntity;

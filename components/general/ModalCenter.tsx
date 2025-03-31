import { useContext, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Switch,
  TouchableNativeFeedback,
  Platform,
  useWindowDimensions,
  TouchableOpacity,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";

// custom imports
import { Colors } from "@/constants/Colors";
import { ColorSchemeContext } from "@/context/ColorSchemeContext";
import { FontSizeContext } from "@/context/FontSizeContext";
import FontSizeType from "@/types/FontSizeType";

type Props = {
  title: string;
  placeholder?: string;
  mode: "edit" | "toggle" | "dropdown";
  fction?: (condition: boolean) => void;
  value: string | boolean | number;
  setValue: any;
  sideNote?: string;
};

const defaultFction = (condition: boolean) => {
  console.log(condition);
};

const ModalCenter = ({
  title,
  placeholder = "Enter your text",
  fction = defaultFction,
  mode = "toggle",
  value,
  setValue,
  sideNote,
}: Props) => {
  const { colorScheme, setColorScheme } = useContext(ColorSchemeContext); // get theme
  const { fontSize, setFontSize } = useContext(FontSizeContext); // get font size
  const width = useWindowDimensions().width; // get width of the screen
  const styles = createStyles(colorScheme, Platform, fontSize, width); // create styles based on theme

  return (
    <View style={styles.container}>
      <Text style={[styles.text, styles.title]}>{title}</Text>

      {/* For mode === dropdown */}
      {mode === "dropdown" && (
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={value}
            onValueChange={(itemValue) => setValue(itemValue)}
            style={[styles.picker, styles.text]}
          >
            <Picker.Item label="👉 14" value={14} />
            <Picker.Item label="👉 16" value={16} />
            <Picker.Item label="👉 18" value={18} />
            <Picker.Item label="👉 20" value={20} />
            <Picker.Item label="👉 22" value={22} />
            <Picker.Item label="👉 24" value={24} />
            <Picker.Item label="👉 26" value={26} />
          </Picker>
        </View>
      )}
      <View style={styles.sideNoteContainer}>
        <MaterialIcons
          style={styles.sideNoteIcon}
          name="warning"
          size={fontSize * 2.4}
          color={
            colorScheme === "light"
              ? Colors.light.quaternary
              : Colors.dark.quaternary
          }
        ></MaterialIcons>
        <Text style={styles.sideNoteText}>{sideNote}</Text>
      </View>
    </View>
  );
};

// type declaration

type ColorScheme = "light" | "dark" | undefined | null;

function createStyles(
  colorScheme: ColorScheme,
  platform: any,
  textSize: FontSizeType,
  width: number
) {
  return StyleSheet.create({
    container: {
      width: width > 400 ? "90%" : "100%",
      height: width > 400 ? "40%" : "60%",
      borderRadius: 50,
      overflow: "hidden",
      backgroundColor:
        colorScheme === "light" ? Colors.light.quinary : Colors.dark.quinary,
      position: "absolute",
      zIndex: 100,
      top: width > 400 ? "15%" : "5%",
      left: width > 400 ? "5%" : 0,
      borderStyle: "solid",
      borderWidth: 1,
      borderColor:
        colorScheme === "light"
          ? Colors.light.secondary
          : Colors.dark.quaternary,
      elevation:
        platform.OS === "android"
          ? colorScheme === "light"
            ? 5
            : 10
          : undefined,
    },

    text: {
      fontSize: textSize,
      color:
        colorScheme === "light"
          ? Colors.light.secondary
          : Colors.dark.secondary,
    },

    title: {
      fontSize: textSize * 1.5,
      fontWeight: "bold",
      marginBottom: 10,
      marginTop: "10%",
      marginLeft: "5%",
    },

    sideNoteText: {
      fontSize: textSize,
      color:
        colorScheme === "light"
          ? Colors.light.quaternary
          : Colors.dark.quaternary,
      marginVertical: "auto",
      paddingLeft: 20,
    },

    sideNoteIcon: {
      marginVertical: "auto",
    },

    sideNoteContainer: {
      width: "90%",
      height: "30%",
      marginTop: "auto",
      marginBottom: "10%",
      paddingRight: "10%",
      marginHorizontal: "auto",
      display: "flex",
      flexDirection: "row",
    },

    pickerContainer: {
      height: 60,
      width: "70%",
      marginHorizontal: "auto",
      marginTop: "10%",
      backgroundColor:
        colorScheme === "light" ? Colors.light.quinary : Colors.dark.quinary,
      borderStyle: "solid",
      borderWidth: 1,
      borderColor:
        colorScheme === "light"
          ? Colors.light.secondary
          : Colors.dark.quaternary,
      borderRadius: 0,
    },

    picker: {
      height: "100%",
      width: "100%",
      backgroundColor:
        colorScheme === "light" ? Colors.light.quinary : Colors.dark.quinary,
    },
  });
}

export default ModalCenter;

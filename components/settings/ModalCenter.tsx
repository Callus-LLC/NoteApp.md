import React, { useContext, useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  Platform,
  useWindowDimensions,
  TouchableOpacity,
  Animated,
  Easing,
  TextInput,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";

// custom imports
import { Colors } from "@/constants/Colors";
import { ColorSchemeContext } from "@/context/ColorSchemeContext";
import { FontSizeContext } from "@/context/FontSizeContext";
import FontSizeType from "@/types/FontSizeType";

type Props = {
  visible: boolean;
  title: string;
  placeholder?: string;
  mode: "edit" | "toggle" | "dropdown";
  fction?: (condition: boolean) => void;
  value: string | boolean | number;
  setValue: any;
  sideNote?: string;
  choices?: { [key: string]: string | number | boolean } | undefined;
};

const defaultFction = (
  condition: boolean,
  choiceSelection?: { [key: string]: string | number | boolean }
) => {
  console.log(condition);
};

const ModalCenter = ({
  visible,
  title,
  placeholder = "Enter your text",
  fction = defaultFction,
  mode = "toggle",
  value,
  setValue,
  sideNote,
  choices,
}: Props) => {
  const { colorScheme } = useContext(ColorSchemeContext);
  const { fontSize } = useContext(FontSizeContext);
  const { height, width } = useWindowDimensions();
  const styles = createStyles(colorScheme, Platform, fontSize, width);

  // Control mounting of the component for animation
  const [showComponent, setShowComponent] = useState(visible);
  // Animated value for vertical slide. Start below the screen (e.g., 300 pixels)
  const slideAnim = useRef(new Animated.Value(300)).current;

  useEffect(() => {
    if (visible) {
      setShowComponent(true);
      // Animate sliding up to its final position (translateY: 0)
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 500,
        easing: Easing.out(Easing.exp),
        useNativeDriver: true,
      }).start();
    } else {
      // Animate sliding down out of view then unmount
      Animated.timing(slideAnim, {
        toValue: height,
        duration: 300,
        useNativeDriver: true,
        easing: Easing.in(Easing.exp),
      }).start(() => {
        setShowComponent(false);
      });
    }
  }, [visible, slideAnim]);

  if (!showComponent) {
    return null;
  }

  return (
    <Animated.View
      style={[styles.container, { transform: [{ translateY: slideAnim }] }]}
    >
      <Text style={[styles.text, styles.title]}>{title}</Text>
      <View style={styles.iconContainerParent}>
        <TouchableOpacity onPress={() => fction(false)}>
          <View>
            <MaterialIcons
              style={styles.icon}
              name="close"
              size={40}
              color={
                colorScheme === "light"
                  ? Colors.light.quaternary
                  : Colors.dark.secondary
              }
            />
          </View>
        </TouchableOpacity>
      </View>

      {/* For mode === dropdown */}
      {mode === "dropdown" && (
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={value}
            onValueChange={(itemValue) => setValue(itemValue)}
            style={[styles.picker, styles.text]}
          >
            {Object.entries(choices || {}).map(([key, val]) => (
              <Picker.Item
                label={key}
                value={val}
                key={key}
                style={[styles.text]}
              />
            ))}
          </Picker>
        </View>
      )}

      {/* For mode === edit */}
      {mode === "edit" && (
        <View style={styles.pickerContainer}>
          <TextInput
            placeholder={placeholder}
            value={value?.toString()}
            onChangeText={(text) => setValue(text)}
            style={[styles.picker, styles.text]}
          />
        </View>
      )}

      {/* For mode === toggle */}
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
        />
        <Text style={styles.sideNoteText}>{sideNote}</Text>
      </View>
    </Animated.View>
  );
};

function createStyles(
  colorScheme: "light" | "dark" | undefined | null,
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
      marginTop: "7%",
      marginLeft: "5%",
    },
    iconContainerParent: {
      width: 50,
      height: 50,
      borderRadius: 50,
      overflow: "hidden",
      position: "absolute",
      top: "10%",
      right: "5%",
    },
    icon: {
      margin: "auto",
      elevation:
        platform.OS === "android"
          ? colorScheme === "light"
            ? 5
            : 10
          : undefined,
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
      flexDirection: "row",
      alignItems: "center",
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

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
  fction: (condition: boolean) => void;
  value: string | boolean | number;
  setValue: (val: string | boolean | number) => void;
  sideNote?: string;
  choices?: { [key: string]: string | number | boolean } | undefined;
};

const ModalCenter = ({
  visible,
  title,
  placeholder = "Enter your text",
  fction,
  mode = "toggle",
  value,
  setValue,
  sideNote,
  choices,
}: Props) => {
  const { colorScheme } = useContext(ColorSchemeContext);
  const { fontSize, setFontSize } = useContext(FontSizeContext);
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
        toValue: width > 400 ? 0 : 80,
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
  }, [visible]);

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
            onValueChange={(itemValue) =>
              value === fontSize
                ? setFontSize(itemValue as FontSizeType)
                : setValue(itemValue)
            }
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
        <View style={styles.editContainer}>
          <TextInput
            keyboardType="visible-password"
            placeholder={placeholder}
            placeholderTextColor={
              colorScheme === "light"
                ? Colors.light.quaternary
                : Colors.dark.quaternary
            }
            value={value?.toString()}
            onChangeText={(text) => setValue(text)}
            style={[styles.edit, styles.text]}
          />
          <TouchableOpacity activeOpacity={0.8} style={styles.editButton}>
            <MaterialIcons
              name="send"
              size={30}
              color={
                colorScheme === "light"
                  ? Colors.light.primary
                  : Colors.dark.secondary
              }
            ></MaterialIcons>
          </TouchableOpacity>
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
      width: width > 400 ? "90%" : "112%",
      minHeight: 400,
      height: width > 400 ? "40%" : "80%",
      borderRadius: 50,
      overflow: "hidden",
      backgroundColor:
        colorScheme === "light" ? Colors.light.quinary : Colors.dark.quinary,
      position: "absolute",
      zIndex: 100,
      top: width > 400 ? "15%" : "5%",
      left: width > 400 ? "5%" : "-6%",
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
      marginLeft: width > 400 ? "5%" : "10%",
      paddingRight: width > 400 ? "30%" : "40%",
      color:
        colorScheme === "light" ? Colors.light.tertiary : Colors.dark.tertiary,
    },

    iconContainerParent: {
      width: 50,
      height: 50,
      borderRadius: 50,
      overflow: "hidden",
      position: "absolute",
      top: width > 400 ? "10%" : "6%",
      right: width > 400 ? "5%" : "10%",
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
      paddingHorizontal: 20,
    },

    sideNoteIcon: {
      marginVertical: "auto",
    },

    sideNoteContainer: {
      width: "90%",
      height: "30%",
      marginTop: "auto",
      marginBottom: width > 400 ? "10%" : "50%",
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

    editContainer: {
      height: 60,
      width: "80%",
      display: "flex",
      flexDirection: "row",
      marginHorizontal: "auto",
      marginTop: "10%",
      backgroundColor:
        colorScheme === "light" ? Colors.light.quinary : Colors.dark.quinary,
      borderStyle: "solid",
      borderWidth: 1,
      borderColor:
        colorScheme === "light"
          ? Colors.light.secondary
          : Colors.dark.secondary,
      borderRadius: 50,
    },

    edit: {
      width: "70%",
      height: "90%",
      marginVertical: "auto",
      marginLeft: 10,
    },

    editButton: {
      borderRadius: 50,
      width: 50,
      height: 50,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginVertical: "auto",
      marginLeft: "auto",
      marginRight: 5,
      backgroundColor:
        colorScheme === "light" ? Colors.light.tertiary : Colors.dark.tertiary,
    },
  });
}

export default ModalCenter;

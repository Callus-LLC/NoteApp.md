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

// custom imports
import { Colors } from "@/constants/Colors";
import { ColorSchemeContext } from "@/context/ColorSchemeContext";

const ModalCenter = () => {
  const { colorScheme, setColorScheme } = useContext(ColorSchemeContext); // get theme
  return <View></View>;
};

export default ModalCenter;

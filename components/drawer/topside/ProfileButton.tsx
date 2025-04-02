import {
  Text,
  TouchableNativeFeedback,
  View,
  StyleSheet,
  useWindowDimensions,
} from "react-native";
import { useContext } from "react";
import { Link } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";

// custom import
import { Colors } from "@/constants/Colors";
import { FontSizeContext } from "@/context/FontSizeContext";
import FontSizeType from "@/types/FontSizeType";
import { ColorSchemeContext } from "@/context/ColorSchemeContext";
import UserData from "@/constants/data/UserData";
import ImageProfile from "../profile/ImageProfile";

export default function ProfileButton() {
  const { colorScheme } = useContext(ColorSchemeContext);
  const { fontSize } = useContext(FontSizeContext);
  const { username } = UserData;
  const width = useWindowDimensions().width;

  const styles = createStyles(colorScheme, fontSize, width);
  return (
    <View style={styles.container}>
      <Link href="/stack/profile" asChild>
        <TouchableNativeFeedback
          background={TouchableNativeFeedback.Ripple(
            colorScheme === "light"
              ? Colors.light.tertiary
              : Colors.dark.tertiary,
            false
          )}
        >
          <View style={styles.innerContainer}>
            <ImageProfile size={50} little={true}></ImageProfile>
            <Text style={styles.text}>
              {username.length <= 15
                ? username
                : fontSize <= 22
                ? username.slice(0, 15).trim() + "..."
                : username.slice(0, 12).trim() + "..."}
            </Text>
            <MaterialIcons
              style={styles.arrowIcon}
              name="arrow-forward-ios"
              color={
                colorScheme === "light"
                  ? Colors.light.quaternary
                  : Colors.dark.quaternary
              }
              size={25}
            ></MaterialIcons>
          </View>
        </TouchableNativeFeedback>
      </Link>
    </View>
  );
}

// type declaration
type ColorScheme = "light" | "dark" | undefined | null;

function createStyles(
  colorScheme: ColorScheme,
  fontSize: FontSizeType,
  width: number
) {
  return StyleSheet.create({
    container: {
      width: "90%",
      height: 70,
      marginHorizontal: "auto",
      borderRadius: 50,
      marginVertical: 5,
      overflow: "hidden",
    },

    innerContainer: {
      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
    },

    userImage: {
      borderRadius: 50,
      width: 50,
      height: 50,
      backgroundColor:
        colorScheme === "light" ? Colors.light.primary : Colors.dark.quaternary,
      marginLeft: 10,
      marginRight: "5%",
      overflow: "hidden",
    },

    text: {
      fontSize: fontSize,
      color:
        colorScheme === "light"
          ? Colors.light.secondary
          : Colors.dark.secondary,
      fontWeight: "500",
    },

    arrowIcon: {
      marginLeft: "auto",
      marginRight: width >= 400 ? "12%" : 10,
    },
  });
}

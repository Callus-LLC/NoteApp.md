import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  TouchableNativeFeedback,
  Platform,
  useWindowDimensions,
} from "react-native";
import { Stack } from "expo-router";
import { useContext } from "react";

// custom imports
import { Colors } from "@/constants/Colors";
import { ColorSchemeContext } from "@/context/ColorSchemeContext";
import { FontSizeContext } from "@/context/FontSizeContext";
import FontSizeType from "@/types/FontSizeType";
import ImageProfile from "@/components/drawer/profile/ImageProfile";
import UserData from "@/constants/data/UserData";
import Data from "@/constants/data/NoteData";

export default function Profile() {
  const { colorScheme, setColorScheme } = useContext(ColorSchemeContext); // get theme
  const { fontSize, setFontSize } = useContext(FontSizeContext); // get font size
  const { username, date } = UserData;
  const nbNotes = Data.length;
  const width = useWindowDimensions().width;
  const styles = createStyles(colorScheme, fontSize, Platform, width);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack.Screen name="/index" options={{ headerShown: false }} />
      <View style={styles.screen}>
        <Text style={styles.header}>Profile</Text>
        <View style={styles.headingBar}></View>
        <View style={styles.passport}>
          <View style={styles.imageProfileContainer}>
            <TouchableNativeFeedback
              background={TouchableNativeFeedback.Ripple(
                colorScheme === "light"
                  ? Colors.light.tertiary
                  : Colors.dark.tertiary,
                true
              )}
            >
              <View style={styles.imageProfileInnerContainer}>
                <ImageProfile size={200} little={false}></ImageProfile>
              </View>
            </TouchableNativeFeedback>
          </View>
          <View style={styles.infoContainer}>
            <View style={styles.infoEntity}>
              <Text style={styles.infoEntityText}>{username}</Text>
            </View>
            <View style={styles.infoEntity}>
              <Text style={styles.infoEntityText}>Member since: {date}</Text>
            </View>
            <View style={styles.infoEntity}>
              <Text style={styles.infoEntityText}>Notes: {nbNotes}</Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

type ColorScheme = "light" | "dark" | undefined | null;

function createStyles(
  colorScheme: ColorScheme,
  fontSize: FontSizeType,
  platform: any,
  width: number
) {
  return StyleSheet.create({
    screen: {
      backgroundColor:
        colorScheme === "light" ? Colors.light.primary : Colors.dark.primary,
      height: "100%",
      width: "100%",
      padding: 20,
    },

    header: {
      fontSize: fontSize * 2.5,
      fontWeight: "bold",
      color:
        colorScheme === "light"
          ? Colors.light.secondary
          : Colors.dark.secondary,
      marginTop: 50,
      marginLeft: 10,
    },

    headerSecondary: {
      fontSize: fontSize * 1.2,
      fontWeight: "300",
      fontStyle: "italic",
      marginBottom: 30,
      maxWidth: 300,
    },

    headingBar: {
      width: "60%",
      minWidth: 300,
      height: 1,
      backgroundColor:
        colorScheme === "light"
          ? Colors.light.quaternary
          : Colors.dark.quaternary,
      marginTop: 10,
    },

    imageProfileInnerContainer: {
      width: 200,
      height: 200,
      margin: "auto",
      overflow: "hidden",
    },

    imageProfileContainer: {
      overflow: "hidden",
      width: 220,
      height: 220,
      borderRadius: 200,
      marginVertical: "auto",
      marginHorizontal: width <= 600 ? "auto" : 0,
      backgroundColor:
        colorScheme === "light" ? Colors.light.quinary : Colors.dark.quinary,
      elevation:
        platform.OS === "android"
          ? colorScheme === "light"
            ? 5
            : 10
          : undefined,
    },

    passport: {
      width: width <= 600 ? "100%" : "90%",
      height: width <= 600 ? 500 : 300,
      padding: "5%",
      backgroundColor:
        colorScheme === "light" ? Colors.light.quinary : Colors.dark.quinary,
      elevation:
        platform.OS === "android"
          ? colorScheme === "light"
            ? 5
            : 10
          : undefined,
      marginTop: 20,
      borderRadius: 10,
      marginHorizontal: "auto",
      display: "flex",
      flexDirection: width <= 600 ? "column" : "row",
    },

    infoContainer: {
      width: width <= 600 ? "100%" : "50%",
      height: width <= 600 ? "50%" : "100%",
      marginLeft: "auto",
      paddingVertical: 20,
      paddingHorizontal: 10,
    },

    infoEntity: {
      width: "100%",
      height: "30%",
      padding: 0,
      borderBottomColor:
        colorScheme === "light"
          ? Colors.light.quaternary
          : Colors.dark.quaternary,
      borderStyle: "solid",
      borderBottomWidth: 1,
    },

    infoEntityText: {
      color:
        colorScheme === "light"
          ? Colors.light.secondary
          : Colors.dark.secondary,
      fontSize: fontSize,
      marginVertical: "auto",
    },
  });
}

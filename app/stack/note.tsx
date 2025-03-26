import { View, StyleSheet, useColorScheme, Dimensions } from "react-native";
import { Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

// custom imports
import ArrowButton from "@/components/ArrowButton";
import { Colors } from "@/constants/Colors";
import TitleInput from "@/components/TitleInput";
import NoteArea from "@/components/NoteArea";
import SaveButton from "@/components/SaveButton";

export default function Index() {
  const colorScheme = useColorScheme();

  const styles = createStyles(colorScheme);

  // // screen width
  // const windowWidth = Dimensions.get("window").width;

  // handle press save button
  const handlePressSave = () => {
    alert("Your note has been saved!");
  };
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor:
          colorScheme === "light" ? Colors.light.primary : Colors.dark.primary,
      }}
    >
      <Stack.Screen name="/note" options={{ headerShown: false }} />
      <View style={styles.titleContainer}>
        <View style={styles.titleTopPartContainer}>
          <ArrowButton></ArrowButton>

          <TitleInput></TitleInput>
          <SaveButton onPress={handlePressSave}></SaveButton>
        </View>

        <View style={styles.titleBottomBar}></View>
      </View>
      <NoteArea></NoteArea>
    </SafeAreaView>
  );
}

// type declaration
type ColorScheme = "light" | "dark" | undefined | null;

// styles
function createStyles(colorScheme: ColorScheme) {
  return StyleSheet.create({
    screen: {
      backgroundColor:
        colorScheme === "light" ? Colors.light.primary : Colors.dark.primary,
      height: "100%",
      width: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },

    header: {
      fontSize: 40,
      fontWeight: "bold",
      color: "#f9f8f1",
      marginBottom: 50,
      marginRight: "25%",
    },

    titleContainer: {
      backgroundColor:
        colorScheme === "light" ? Colors.light.primary : Colors.dark.primary,
      width: "100%",
    },

    titleBottomBar: {
      height: 1,
      width: "90%",
      backgroundColor:
        colorScheme === "light"
          ? Colors.light.quaternary
          : Colors.dark.quaternary,
      marginHorizontal: "auto",
      marginTop: 10,
    },

    titleTopPartContainer: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      paddingHorizontal: "6%",
    },

    titleArrowContainer: {
      width: 50,
      height: 50,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 50,
      overflow: "hidden",
    },
  });
}

import { View, StyleSheet } from "react-native";
import { useContext } from "react";

// custom import
import { Colors } from "@/constants/Colors";
import NoteList from "@/components/drawer/noteList/NoteList";
import CreateNoteButton from "@/components/drawer/downside/CreateNoteButton";
import ParameterButton from "./downside/SettingButton";
import ProfileButton from "@/components/drawer/topside/ProfileButton";
import TitleApp from "@/components/drawer/topside/TitleApp";

import { ColorSchemeContext } from "@/context/ColorSchemeContext";

const DrawerContent = () => {
  const { colorScheme, setColorScheme } = useContext(ColorSchemeContext); // get theme
  const styles = createStyles(colorScheme);

  return (
    <View style={styles.container}>
      <TitleApp></TitleApp>
      <ProfileButton></ProfileButton>
      <NoteList></NoteList>
      <View style={styles.buttonContainer}>
        <CreateNoteButton title="Create new note"></CreateNoteButton>
      </View>
      <ParameterButton></ParameterButton>
    </View>
  );
};

type ColorScheme = "light" | "dark" | undefined | null;

function createStyles(colorScheme: ColorScheme) {
  return StyleSheet.create({
    container: {
      backgroundColor:
        colorScheme === "light" ? Colors.light.primary : Colors.dark.primary,
      width: "100%",
      height: "100%",
    },

    buttonContainer: {
      position: "absolute",
      bottom: 20,
      left: 20,
      width: 350,
    },
  });
}

export default DrawerContent;

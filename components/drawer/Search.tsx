import React, { useState, useContext } from "react";
import {
  View,
  TextInput,
  useColorScheme,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from "react-native";

// custom import
import { Colors } from "@/constants/Colors";
import searchNoteUtils from "@/utils/searchNoteUtil";
import Data from "@/constants/Data";
import { NoteListContext } from "@/context/NoteListContext";

const Search = () => {
  const colorScheme = useColorScheme();
  const styles = createStyles(colorScheme, Platform);
  const [text, setText] = useState("");
  const { noteList, setNoteList } = useContext(NoteListContext);

  return (
    <TouchableOpacity activeOpacity={0.5}>
      <View style={styles.container}>
        <TextInput
          style={styles.inputArea}
          placeholder="Search a note..."
          placeholderTextColor={
            colorScheme === "light"
              ? Colors.light.quaternary
              : Colors.dark.quaternary
          }
          value={text}
          onChangeText={setText}
          onChange={
            text.length > 0 // bug at this level
              ? (e) => setNoteList(searchNoteUtils(e.nativeEvent.text, Data))
              : (e) => setNoteList(Data)
          }
          keyboardType="default"
        ></TextInput>
      </View>
    </TouchableOpacity>
  );
};
// type declaration
type ColorScheme = "light" | "dark" | undefined | null;
type PlatformType = any;

function createStyles(colorScheme: ColorScheme, platform: PlatformType) {
  return StyleSheet.create({
    container: {
      marginTop: 10,
      backgroundColor:
        colorScheme === "light" ? Colors.light.quinary : Colors.dark.quinary,
      height: 50,
      width: "90%",
      marginHorizontal: "auto",
      borderRadius: 30,
      borderWidth: 1,
      borderColor:
        colorScheme === "light"
          ? Colors.light.secondary
          : Colors.dark.secondary,
      elevation:
        platform.OS === "android"
          ? colorScheme === "light"
            ? 5
            : 10
          : undefined,
    },

    inputArea: {
      marginVertical: "auto",
      marginLeft: 10,
      color:
        colorScheme === "light"
          ? Colors.light.secondary
          : Colors.dark.secondary,
    },
  });
}

export default Search;

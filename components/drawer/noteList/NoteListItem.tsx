import { StyleSheet, Text, View, TouchableNativeFeedback } from "react-native";
import { Link } from "expo-router";
import { useContext } from "react";

// custom imports
import { Colors } from "@/constants/Colors";
import { ColorSchemeContext } from "@/context/ColorSchemeContext";
import { FontSizeContext } from "@/context/FontSizeContext";
import FontSizeType from "@/types/FontSizeType";

type NoteListItemProps = {
  title: string;
  onPress?: () => void;
  id: number;
};

const NoteListItem = ({ title, onPress, id }: NoteListItemProps) => {
  const { colorScheme, setColorScheme } = useContext(ColorSchemeContext); // get theme
  const { fontSize, setFontSize } = useContext(FontSizeContext); // get font size
  const styles = createStyles(colorScheme, fontSize);

  const checkTitleLength = (text: string) => {
    const newText = text.length <= 30 ? text : text.slice(0, 30) + "...";
    return newText;
  };

  return (
    <View style={styles.containerMajor}>
      <Link href={`/stack/note/${id}`} asChild>
        <TouchableNativeFeedback
          background={TouchableNativeFeedback.Ripple(
            colorScheme === "light"
              ? Colors.light.tertiary
              : Colors.dark.tertiary,
            false
          )}
          onPress={onPress}
        >
          <View style={styles.container}>
            <Text style={[styles.text, styles.noteText]}>
              {checkTitleLength(title)}
            </Text>
          </View>
        </TouchableNativeFeedback>
      </Link>
    </View>
  );
};

// type declaration
type ColorScheme = "light" | "dark" | undefined | null;

function createStyles(colorScheme: ColorScheme, fontSize: FontSizeType) {
  return StyleSheet.create({
    containerMajor: {
      width: "100%",
      backgroundColor:
        colorScheme === "light" ? Colors.light.primary : Colors.dark.primary,
      overflow: "hidden",
    },

    container: {
      width: "100%",
      padding: 5,
      minHeight: 50,
    },

    text: {
      color:
        colorScheme === "light"
          ? Colors.light.secondary
          : Colors.dark.secondary,
      fontSize: fontSize,
    },

    noteText: {
      marginLeft: 20,
      marginVertical: "auto",
    },
  });
}

export default NoteListItem;

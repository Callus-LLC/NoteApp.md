import {
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableNativeFeedback,
} from "react-native";
import { Colors } from "@/constants/Colors";
import { Link } from "expo-router";

type NoteListItemProps = {
  title: string;
  onPress?: () => void;
};

const NoteListItem = ({ title, onPress }: NoteListItemProps) => {
  const colorScheme = useColorScheme();
  const styles = createStyles(colorScheme);

  const checkTitleLength = (text: string) => {
    const newText = text.length <= 30 ? text : text.slice(0, 30) + "...";
    return newText;
  };

  return (
    <View style={styles.containerMajor}>
      <Link href={"/stack/note"} asChild>
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

function createStyles(colorScheme: ColorScheme) {
  return StyleSheet.create({
    containerMajor: {
      width: "100%",
      backgroundColor:
        colorScheme === "light" ? Colors.light.primary : Colors.dark.primary,
      // borderRadius: 10,
      // borderColor:
      //   colorScheme === "light"
      //     ? Colors.light.secondary
      //     : Colors.dark.secondary,
      // borderLeftWidth: 1,
      // borderStyle: "solid",
      overflow: "hidden",
    },

    container: {
      width: "100%",
      padding: 5,
      height: 50,
    },

    text: {
      color:
        colorScheme === "light"
          ? Colors.light.secondary
          : Colors.dark.secondary,
      fontSize: 18,
    },

    noteText: {
      marginLeft: 20,
      marginVertical: "auto",
    },
  });
}

export default NoteListItem;

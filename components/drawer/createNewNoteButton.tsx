import {
  View,
  useColorScheme,
  StyleSheet,
  TouchableNativeFeedback,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Link } from "expo-router";

// custom imports
import { Colors } from "@/constants/Colors";
import Data from "@/constants/Data";

const CreateNewNoteButton = () => {
  const colorScheme = useColorScheme();
  const styles = createStyles(colorScheme);

  const newId = Data[Data.length - 1].id + 1;

  return (
    <View style={styles.container}>
      <Link href={`/stack/note/${newId}`} asChild>
        <TouchableNativeFeedback
          background={TouchableNativeFeedback.Ripple(
            colorScheme === "light"
              ? Colors.light.secondary
              : Colors.dark.secondary,
            false
          )}
        >
          <View style={styles.innerContainer}>
            <MaterialIcons
              style={styles.icon}
              name="add"
              size={35}
              color={
                colorScheme === "light"
                  ? Colors.light.primary
                  : Colors.dark.secondary
              }
            ></MaterialIcons>
          </View>
        </TouchableNativeFeedback>
      </Link>
    </View>
  );
};

// styles
type ColorScheme = "light" | "dark" | undefined | null;

const createStyles = (colorScheme: ColorScheme) => {
  return StyleSheet.create({
    container: {
      overflow: "hidden",
      borderRadius: 50,
      width: "40%",
      height: "7%",
      minHeight: 50,
      position: "absolute",
      bottom: 20,
      left: 20,
      zIndex: 1,
    },

    innerContainer: {
      margin: "auto",
      padding: 0,
      width: "100%",
      height: "100%",
      borderRadius: 50,
      backgroundColor:
        colorScheme === "light" ? Colors.light.tertiary : Colors.dark.tertiary,
    },

    icon: {
      margin: "auto",
    },
  });
};

export default CreateNewNoteButton;

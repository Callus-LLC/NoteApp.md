import {
  Button,
  View,
  Text,
  StyleSheet,
  TouchableNativeFeedback,
} from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useColorScheme } from "react-native";

// custom imports
import { Colors } from "@/constants/Colors";
import { GetTheme } from "@/utils/GetTheme";

interface Props {
  title: string;
  onPress?: () => void;
}

export default function CreateNoteButton({ title, onPress }: Props) {
  // <-- destructuring

  return (
    <View style={styles.buttonParentContainer}>
      <TouchableNativeFeedback
        background={TouchableNativeFeedback.Ripple("#2c5784", false)}
        onPress={onPress} // important!
      >
        <View
          style={[
            { display: "flex", flexDirection: "row" },
            styles.buttonContainer,
          ]}
        >
          <Text style={styles.buttonText}>{title}</Text>
          <MaterialIcons
            name="add"
            size={30}
            color={
              GetTheme() === "light"
                ? Colors.light.secondary
                : Colors.dark.secondary
            }
          ></MaterialIcons>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonParentContainer: {
    borderRadius: 10,
    overflow: "hidden",
    width: "60%",
  },

  buttonContainer: {
    width: "100%",
    height: 50,
    marginHorizontal: "auto",
    marginRight: "25%",
    borderColor:
      GetTheme() === "light" ? Colors.light.primary : Colors.dark.secondary,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor:
      GetTheme() === "light" ? Colors.light.primary : Colors.dark.primary,
  },

  buttonText: {
    color:
      GetTheme() === "light" ? Colors.light.secondary : Colors.dark.secondary,
    fontSize: 20,
  },
});

import {
  Text,
  View,
  StyleSheet,
  TouchableNativeFeedback,
  Platform,
  Dimensions,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useColorScheme } from "react-native";

// custom imports
import { Colors } from "@/constants/Colors";

interface Props {
  onPress?: () => void;
}

const SaveButton = ({ onPress }: Props) => {
  const colorScheme = useColorScheme();

  const styles = CreateStyles(colorScheme, Platform);

  // window width
  const windowWidth = Dimensions.get("window").width;

  return (
    <View style={windowWidth > 400 ? styles.container : styles.containerSmall}>
      <TouchableNativeFeedback
        background={TouchableNativeFeedback.Ripple("#2c5784", false)}
        onPress={onPress}
      >
        {windowWidth > 400 ? (
          <View style={styles.innerContainer}>
            <MaterialIcons
              name="save"
              size={30}
              color={
                colorScheme === "light"
                  ? Colors.light.secondary
                  : Colors.dark.secondary
              }
            />
            <Text style={styles.text}>Save</Text>
          </View>
        ) : (
          <View style={styles.innerContainerSmall}>
            <MaterialIcons
              name="save"
              size={30}
              color={
                colorScheme === "light"
                  ? Colors.light.secondary
                  : Colors.dark.secondary
              }
            />
          </View>
        )}
      </TouchableNativeFeedback>
    </View>
  );
};

type ColorScheme = "light" | "dark" | undefined | null;

function CreateStyles(colorScheme: ColorScheme, platform: any) {
  return StyleSheet.create({
    container: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
      borderRadius: 10,
      width: 100,
      height: 50,
      elevation:
        platform.OS === "android"
          ? colorScheme === "light"
            ? 5
            : 10
          : undefined,
    },

    containerSmall: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
      borderRadius: 50,
      width: 50,
      height: 50,
      elevation:
        platform.OS === "android"
          ? colorScheme === "light"
            ? 5
            : 10
          : undefined,
    },

    text: {
      color:
        colorScheme === "light"
          ? Colors.light.secondary
          : Colors.dark.secondary,
      fontSize: 16,
      fontWeight: "bold",
      marginLeft: 5,
    },

    innerContainer: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor:
        colorScheme === "light" ? Colors.light.quinary : Colors.dark.quinary,
      borderRadius: 10,
      width: 100,
      height: 50,
    },

    innerContainerSmall: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor:
        colorScheme === "light" ? Colors.light.quinary : Colors.dark.quinary,
      borderRadius: 50,
      width: 50,
      height: 50,
    },
  });
}

export default SaveButton;

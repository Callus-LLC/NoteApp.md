import { Text, View, StyleSheet } from "react-native";
import { useContext } from "react";

// custom imports
import { Colors } from "@/constants/Colors";
import SettingEntity from "@/components/parameters/SettingEntity";
import { ColorSchemeContext } from "@/context/ColorSchemeContext";

const params = () => {
  const { colorScheme, setColorScheme } = useContext(ColorSchemeContext); // get theme

  const styles = createStyles(colorScheme);
  return (
    <View style={styles.screen}>
      <Text style={styles.heading}>Settings</Text>
      <View style={styles.headingBar}></View>

      <View style={styles.optionsContainer}>
        <SettingEntity
          mode="toggle"
          text="Toggle the button to change your theme."
          title="Dark Theme"
          fction={(condition) => setColorScheme(condition ? "dark" : "light")}
          defaultValue={colorScheme === "dark" ? true : false}
        />
        <SettingEntity
          mode="dropdown"
          text="Chose your prefered font size."
          title="Font Size"
        />
        <SettingEntity
          mode="toggle"
          text="Toggle the button to enable notifications."
          title="Notifications"
        />
        <SettingEntity
          mode="edit"
          text="Change your password."
          title="Password"
        />
      </View>
    </View>
  );
};

type ColorScheme = "light" | "dark" | undefined | null;

function createStyles(colorScheme: ColorScheme) {
  return StyleSheet.create({
    screen: {
      paddingHorizontal: "5%",
      paddingTop: 30,
      width: "100%",
      height: "100%",
      backgroundColor:
        colorScheme === "light" ? Colors.light.primary : Colors.dark.primary,
    },

    heading: {
      fontSize: 40,
      fontWeight: "bold",
      color:
        colorScheme === "light"
          ? Colors.light.secondary
          : Colors.dark.secondary,
      marginTop: 50,
      marginLeft: 10,
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

    optionsContainer: {
      width: "100%",
      height: "100%",
      marginTop: 20,
      gridTemplateColumns: "repeat(2, 1fr)",
    },
  });
}
export default params;

import { Text, View, StyleSheet, Appearance } from "react-native";
import { useContext, useEffect } from "react";

// custom imports
import { Colors } from "@/constants/Colors";
import SettingEntity from "@/components/settings/SettingEntity";
import { ColorSchemeContext } from "@/context/ColorSchemeContext";
import ModalCenter from "@/components/general/ModalCenter";
import { FontSizeContext } from "@/context/FontSizeContext";
import FontSizeType from "@/types/FontSizeType";

const Settings = () => {
  const { colorScheme, setColorScheme } = useContext(ColorSchemeContext); // get theme
  const { fontSize, setFontSize } = useContext(FontSizeContext); // get font size

  useEffect(() => {
    const subscription = Appearance.addChangeListener(({ colorScheme }) => {
      setColorScheme(colorScheme);
    });

    return () => subscription.remove(); // Cleanup on unmount
  }, []);

  const styles = createStyles(colorScheme, fontSize);

  return (
    <View style={styles.screen}>
      <Text style={[styles.text, styles.heading]}>Settings</Text>
      <View style={styles.headingBar}></View>

      <View style={styles.optionsContainer}>
        <ModalCenter
          title="Choose a font size"
          placeholder="Select a font."
          mode="dropdown"
          value={fontSize}
          setValue={setFontSize}
          sideNote="Choose a font size that suits you best. Be aware that this will affect the whole app."
        />
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

function createStyles(colorScheme: ColorScheme, textSize: FontSizeType) {
  return StyleSheet.create({
    screen: {
      paddingHorizontal: "5%",
      paddingTop: 30,
      width: "100%",
      height: "100%",
      backgroundColor:
        colorScheme === "light" ? Colors.light.primary : Colors.dark.primary,
    },

    text: {
      fontSize: textSize,
      color:
        colorScheme === "light"
          ? Colors.light.secondary
          : Colors.dark.secondary,
    },

    heading: {
      fontSize: textSize * 2.5,
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
export default Settings;

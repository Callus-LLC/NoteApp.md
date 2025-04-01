import { Text, View, StyleSheet, Appearance } from "react-native";
import { useContext, useEffect, useState } from "react";

// custom imports
import { Colors } from "@/constants/Colors";
import SettingEntity from "@/components/settings/SettingEntity";
import { ColorSchemeContext } from "@/context/ColorSchemeContext";
import ModalCenter from "@/components/settings/ModalCenter";
import { FontSizeContext } from "@/context/FontSizeContext";
import FontSizeType from "@/types/FontSizeType";

const Settings = () => {
  const { colorScheme, setColorScheme } = useContext(ColorSchemeContext); // get theme
  const { fontSize, setFontSize } = useContext(FontSizeContext); // get font size
  const [isModalVisisble, setIsModalVisible] = useState(false); // modal state
  const [choices, setChoices] = useState<{
    [key: string]: string | number | boolean;
  }>({});
  const [mode, setMode] = useState<"edit" | "dropdown">("dropdown"); // modal mode
  const [sideNote, setSideNote] = useState<string>(""); // side note for the modal
  const [placeholder, setPlaceholder] = useState<string>(""); // placeholder for the modal
  const [value, setValue] = useState<string | boolean | number>(""); // value for the modal
  const [title, setTitle] = useState<string>(""); // title for the modal

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
          visible={isModalVisisble}
          title={title}
          placeholder={placeholder}
          mode={mode}
          value={value}
          setValue={setValue}
          sideNote={sideNote}
          choices={choices}
          fction={(condition: boolean) => setIsModalVisible(condition)}
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
          fction={({
            condition,
            title,
            value,
            sideNote,
            choiceSelection,
            mode,
            placeholder,
          }) => {
            setIsModalVisible(condition);
            setChoices(choiceSelection || {});
          }}
          choices={{
            Small: 16,
            "Medium (recommended)": 18,
            Large: 20,
            "Extra Large": 24,
          }}
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
          fction={({
            condition,
            title,
            value,
            sideNote,
            choiceSelection,
            mode,
            placeholder,
          }) => {
            setIsModalVisible(condition);
            setMode(mode || "edit");
            setPlaceholder(placeholder || "Enter your password");
            setTitle(title || "Password");
            setSideNote(sideNote || "Be aware of not losing you password!");
            setValue(value);
          }}
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

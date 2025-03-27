import {
  DrawerNavigationState,
  ParamListBase,
  NavigationHelpers,
} from "@react-navigation/native";
import {
  StyleSheet,
  Text,
  useColorScheme,
  View,
  FlatList,
  useWindowDimensions,
} from "react-native";
import { useContext } from "react";
import { LinearGradient } from "expo-linear-gradient";

// custom imports
import NoteListItem from "@/components/drawer/noteList/NoteListItem";
import Search from "@/components/drawer/Search";
import { Colors } from "@/constants/Colors";
import { NoteListContext } from "@/context/NoteListContext";
import NoteListItemNotFound from "@/components/drawer/noteList/NoteListItemNotFound";
import { ColorSchemeContext } from "@/context/ColorSchemeContext";

interface NoteListProps {
  state: DrawerNavigationState<ParamListBase>;
  navigation: NavigationHelpers<ParamListBase>;
  descriptors: any; // Replace 'any' with the correct type if known
}
export default function NoteList() {
  const { colorScheme, setColorScheme } = useContext(ColorSchemeContext); // get theme
  const { height, width } = useWindowDimensions();
  const styles = createStyles(colorScheme, height);
  const { noteList, setNoteList } = useContext(NoteListContext);

  // const dataList =
  return (
    <View style={styles.container}>
      <Text
        style={[
          styles.text,
          styles.heading,
          {
            color:
              colorScheme === "light"
                ? Colors.light.tertiary
                : Colors.dark.tertiary,
          },
        ]}
      >
        NoteApp.md
      </Text>
      <Search></Search>
      <View style={styles.barContainer}>
        <Text style={styles.barText}>Notes</Text>
        <View style={styles.bar}></View>
      </View>
      <View style={styles.containerChild}>
        <LinearGradient
          colors={[
            colorScheme === "light"
              ? Colors.light.primary
              : Colors.dark.primary,
            "transparent",
          ]} // Transparent to white fade
          style={styles.gradientTop}
        />
        <FlatList
          data={
            noteList.length > 0
              ? noteList
              : [{ id: 0, title: "No such file found" }]
          }
          renderItem={({ item }) =>
            item.title !== "No such file found" ? (
              <NoteListItem title={item.title} id={item.id} />
            ) : (
              <NoteListItemNotFound></NoteListItemNotFound>
            )
          }
          keyExtractor={(note) => note.id.toString()}
        ></FlatList>
        <LinearGradient
          colors={[
            "transparent",
            colorScheme === "light"
              ? Colors.light.primary
              : Colors.dark.primary,
          ]} // Transparent to white fade
          style={styles.gradientBottom}
        />
      </View>
    </View>
  );
}

// type declaration
type ColorScheme = "light" | "dark" | undefined | null;

function createStyles(colorScheme: ColorScheme, y: number) {
  return StyleSheet.create({
    container: {
      width: "100%",
      height: y >= 800 ? "70%" : "65%",
      minHeight: 400,
      marginHorizontal: "auto",
      marginTop: 50,
      color:
        colorScheme === "light"
          ? Colors.light.secondary
          : Colors.dark.secondary,
    },

    containerChild: {
      minHeight: 300,
    },

    text: {
      color:
        colorScheme === "light"
          ? Colors.light.secondary
          : Colors.dark.secondary,
      fontSize: 18,
    },

    heading: {
      fontSize: 24,
      fontWeight: "bold",
      marginBottom: 10,
      marginLeft: 25,
    },

    underline: {
      textDecorationLine: "underline",
    },

    barContainer: {
      display: "flex",
      flexDirection: "row",
      marginTop: 10,
    },

    bar: {
      backgroundColor:
        colorScheme === "light"
          ? Colors.light.quaternary
          : Colors.dark.quaternary,
      width: "65%",
      height: 1,
      marginLeft: "auto",
      marginRight: "10%",
      marginVertical: "auto",
    },

    barText: {
      color:
        colorScheme === "light"
          ? Colors.light.quaternary
          : Colors.dark.quaternary,
      fontWeight: "500",
      fontSize: 14,
      marginVertical: "auto",
      marginLeft: "10%",
      marginRight: "auto",
    },

    gradientTop: {
      position: "absolute",
      left: 0,
      right: 0,
      top: 0,
      height: 10, // Height of the fade effect
      zIndex: 1,
    },

    gradientBottom: {
      position: "absolute",
      left: 0,
      right: 0,
      bottom: -1,
      height: 30, // Height of the fade effect
      zIndex: 1,
    },
  });
}

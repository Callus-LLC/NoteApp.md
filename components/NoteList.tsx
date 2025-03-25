import { Colors } from "@/constants/Colors";
import {
  DrawerNavigationState,
  ParamListBase,
  NavigationHelpers,
} from "@react-navigation/native";
import { StyleSheet, Text, useColorScheme, View, FlatList } from "react-native";
import NoteListItem from "@/components/NoteListItem";

interface NoteListProps {
  state: DrawerNavigationState<ParamListBase>;
  navigation: NavigationHelpers<ParamListBase>;
  descriptors: any; // Replace 'any' with the correct type if known
}

const DATA_NOTES = [
  {
    title: "This is a long title, so long that",
    id: 1,
  },
  {
    title: "Note 2",
    id: 2,
  },
  {
    title: "Note 3",
    id: 3,
  },
  {
    title: "Note 4",
    id: 4,
  },
  {
    title: "Note 5",
    id: 5,
  },
  {
    title: "Note 6",
    id: 6,
  },
  {
    title: "Note 7",
    id: 7,
  },
  {
    title: "Note 8",
    id: 8,
  },
  {
    title: "Note 9",
    id: 9,
  },
];

export default function NoteList() {
  const colorScheme = useColorScheme();
  const styles = createStyles(colorScheme);
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
      <View style={styles.barContainer}>
        <Text style={styles.barText}>Notes</Text>
        <View style={styles.bar}></View>
      </View>
      <View>
        <FlatList
          data={DATA_NOTES}
          renderItem={({ item }) => <NoteListItem title={item.title} />}
          keyExtractor={(note) => note.id.toString()}
        ></FlatList>
      </View>
    </View>
  );
}

// type declaration
type ColorScheme = "light" | "dark" | undefined | null;

function createStyles(colorScheme: ColorScheme) {
  return StyleSheet.create({
    container: {
      width: "100%",
      height: "80%",
      marginHorizontal: "auto",
      marginTop: 50,
      color:
        colorScheme === "light"
          ? Colors.light.secondary
          : Colors.dark.secondary,
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
  });
}

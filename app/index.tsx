import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  Pressable,
  useColorScheme,
} from "react-native";
import { Stack, Link } from "expo-router";
import MaterialIcons from "@expo/vector-icons/MaterialIcons"; // for icons

// custom imports
import CreateNoteButton from "@/components/CreateNoteButton"; // create note button import (takes 1 argument)
import { Colors } from "@/constants/Colors";

export default function Index() {
  const colorScheme = useColorScheme(); // get theme

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack.Screen name="/index" options={{ headerShown: false }} />

      <View
        style={[
          styles.screen,
          {
            backgroundColor:
              colorScheme === "light"
                ? Colors.light.primary
                : Colors.dark.primary,
          },
        ]}
      >
        <Text
          style={[
            styles.header,
            {
              color:
                colorScheme === "light"
                  ? Colors.light.secondary
                  : Colors.dark.secondary,
            },
          ]}
        >
          Welcome to NoteApp.md
        </Text>
        <Link href={"/note"} asChild>
          <CreateNoteButton title="Create a note"></CreateNoteButton>
        </Link>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    // backgroundColor:
    //   useColorScheme() === "light" ? Colors.light.primary : Colors.dark.primary,
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    padding: 20,
  },

  header: {
    fontSize: 40,
    fontWeight: "bold",
    // color:
    //   colorScheme === "light"
    //     ? Colors.light.secondary
    //     : Colors.dark.secondary,
    marginBottom: 20,
  },
});

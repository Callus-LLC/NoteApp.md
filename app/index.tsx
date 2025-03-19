import { Text, View, SafeAreaView, StyleSheet, Pressable } from "react-native";
import { Stack, Link } from "expo-router";
import MaterialIcons from "@expo/vector-icons/MaterialIcons"; // for icons

// custom imports
import CreateNoteButton from "@/components/CreateNoteButton"; // create note button import (takes 1 argument)

export default function Index() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack.Screen name="/" options={{ headerShown: false }} />

      <View style={styles.screen}>
        <Text style={styles.header}>Welcome to NoteApp.md</Text>
        <Link href={"/note"} asChild>
          <CreateNoteButton title="Create a note"></CreateNoteButton>
        </Link>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: "#222",
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
    color: "#f9f8f1",
    marginBottom: 20,
  },

  buttonText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#f9f8f1",
  },
});

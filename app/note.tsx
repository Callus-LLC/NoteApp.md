import { Text, View, SafeAreaView, StyleSheet } from "react-native";
import { Stack } from "expo-router";

// custom imports
import ButtonIndex from "@/components/CreateNoteButton";

export default function Index() {
  return (
    <SafeAreaView>
      <Stack.Screen name="/note" options={{ headerShown: false }} />

      <View style={styles.screen}>
        <Text style={styles.header}>This is your first note</Text>
        <ButtonIndex title="Delete note"></ButtonIndex>
        <ButtonIndex title="Save note"></ButtonIndex>
        <ButtonIndex title="Share note"></ButtonIndex>
        <ButtonIndex title="Go back"></ButtonIndex>
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
    alignItems: "center",
    justifyContent: "center",
  },

  header: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#f9f8f1",
    marginBottom: 50,
    marginRight: "25%",
  },
});

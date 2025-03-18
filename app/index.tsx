import { Text, View, SafeAreaView, StyleSheet } from "react-native";
import { Stack } from "expo-router";

// custom imports
import ButtonIndex from "@/components/ButtonIndex";

export default function Index() {
  return (
    <SafeAreaView>
      <Stack.Screen name="/" options={{ headerShown: false }} />

      <View style={styles.screen}>
        <Text style={styles.header}>Welcome to NoteApp.md</Text>
        <ButtonIndex title="Create a note"></ButtonIndex>
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
    marginRight: '25%',
  },
});

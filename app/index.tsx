import { Text, View, SafeAreaView, StyleSheet, Pressable } from "react-native";
import { Stack, Link } from "expo-router";
import MaterialIcons from '@expo/vector-icons/MaterialIcons'; // for icons

// custom imports
import ButtonIndex from "@/components/ButtonIndex";

export default function Index() {
  return (
    <SafeAreaView>
      <Stack.Screen name="/" options={{ headerTitle: "Home" }} />

      <View style={styles.screen}>
        <Text style={styles.header}>Welcome to NoteApp.md</Text>
        <Link href={"/note"} style={styles.linkContainer} asChild>
          <Pressable style={styles.buttonContainer}>
            <Text style={styles.buttonText}>Create a note</Text>
            <MaterialIcons name='add' size={30} color='#f9f8f1'></MaterialIcons>
          </Pressable>
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
    alignItems: "center",
    justifyContent: "center",
  },

  header: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#f9f8f1",
    marginBottom: 20,
    marginRight: "25%",
  },

  buttonText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#f9f8f1",
  },

  buttonContainer: {
    backgroundColor: "#550055",
    padding: 10,
    borderRadius: 5,
    width: "50%",
    marginRight: "48%",
    display: "flex",
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: "center"

  },

  linkContainer: {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    // borderStyle: 'solid',
    // borderWidth: 1,
    // borderColor: "white",
  },
});

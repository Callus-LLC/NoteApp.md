import {
  TextInput,
  StyleSheet,
  View,
  Platform,
  Dimensions,
  ScrollView, // Import ScrollView for scrollable content
} from "react-native";
import { useContext, useState } from "react";
import { LinearGradient } from "expo-linear-gradient"; // import for static fade effect
import markdownit from 'markdown-it'; // Markdown parser
import HTML from "react-native-render-html"; // To render HTML

// custom imports
import { Colors } from "@/constants/Colors";
import { ColorSchemeContext } from "@/context/ColorSchemeContext";
import { FontSizeContext } from "@/context/FontSizeContext";
import FontSizeType from "@/types/FontSizeType";

const NoteArea = ({ content }: { content: string }) => {
  const { colorScheme } = useContext(ColorSchemeContext); // get theme
  const [height, setHeight] = useState(40); // Initial height
  const [text, setText] = useState(content !== undefined ? content : "");
  const [displayedText, setDisplayedText] = useState(content !== undefined ? content : "");
  const { fontSize } = useContext(FontSizeContext); // get font size
  const styles = createStyles(colorScheme, Platform, fontSize);

  // window width
  const windowWidth = Dimensions.get("window").width;

  // Markdown parser initialization
  const md = markdownit({
    html: true,
    xhtmlOut: true,
    breaks: true,
    langPrefix: 'language-',
    linkify: true,
    typographer: true,
    quotes: '“”‘’',
    highlight: function () { return ''; }
  });

  const handleChange = (input: string) => {
    // Parse the input into HTML using markdown-it
    const displayed = md.render(input);

    // Log the parsed HTML to check if it's a valid string
    console.log('Parsed HTML:', displayed);

    // Set the displayed text as HTML
    setDisplayedText(displayed);
    setText(input); // Update the text value
  };

  // Debugging: ensure displayedText is a string
  console.log('Displayed Text:', typeof displayedText, displayedText);

  return (
    <View
      style={
        windowWidth > 400 ? styles.noteContainer : styles.noteContainerSmall
      }
    >
      <LinearGradient
        colors={[
          colorScheme === "light" ? Colors.light.quinary : Colors.dark.quinary,
          "transparent",
        ]}
        style={styles.gradientTop}
      />

      <View>
        <TextInput
          style={styles.noteInputArea}
          multiline
          value={text}
          onChangeText={handleChange} // Use onChangeText for React Native
          onContentSizeChange={
            (event) => setHeight(event.nativeEvent.contentSize.height) // Adjust height dynamically
          }
          editable
          placeholder="This is where ideas begin..."
          placeholderTextColor={
            colorScheme === "light"
              ? Colors.light.quaternary
              : Colors.dark.quaternary
          }
          keyboardType="default"
        />
      </View>

      {/* Markdown display container */}
      <View style={styles.markdownContainer}>
        <LinearGradient
          colors={[
            colorScheme === "light" ? Colors.light.quinary : Colors.dark.quinary,
            "transparent",
          ]}
          style={styles.gradientTop}
        />
        {/* Add ScrollView for scrollable Markdown content */}
        <ScrollView style={styles.scrollableMarkdownContent}>
          <HTML
            source={{ html: typeof displayedText === 'string' ? displayedText : '' }}
            contentWidth={windowWidth}
            tagsStyles={{
              h1: {
                fontSize: fontSize * 1.6,
                color: colorScheme === "light" ? Colors.light.secondary : Colors.dark.secondary,
                lineHeight: 30,
              },
              h2: {
                fontSize: fontSize * 1.4,
                color: colorScheme === "light" ? Colors.light.secondary : Colors.dark.secondary,
                lineHeight: 30,
              },
              p: {
                fontSize: fontSize,
                color: colorScheme === "light" ? Colors.light.secondary : Colors.dark.secondary,
                lineHeight: 30,
              },
              a: {
                color: colorScheme === "light" ? Colors.light.primary : Colors.dark.primary,
                textDecorationLine: 'underline',
              }
            }}
          />
        </ScrollView>
        <LinearGradient
          colors={[
            "transparent",
            colorScheme === "light" ? Colors.light.quinary : Colors.dark.quinary,
          ]}
          style={styles.gradientBottom}
        />
      </View>

      <LinearGradient
        colors={[
          "transparent",
          colorScheme === "light" ? Colors.light.quinary : Colors.dark.quinary,
        ]}
        style={styles.gradientBottom}
      />
    </View>
  );
};

// styles
type ColorScheme = "light" | "dark" | undefined | null;
type PlatformType = any;

function createStyles(
  colorScheme: ColorScheme,
  platform: PlatformType,
  fontSize: FontSizeType
) {
  return StyleSheet.create({
    noteContainer: {
      borderColor:
        colorScheme === "light"
          ? Colors.light.secondary
          : Colors.dark.secondary,
      borderWidth: 1,
      borderStyle: "solid",
      borderRadius: 20,
      backgroundColor:
        colorScheme === "light" ? Colors.light.quinary : Colors.dark.quinary,
      height: "85%",
      width: "85%",
      marginHorizontal: "auto",
      marginTop: 20,
      overflow: "hidden",
      elevation:
        platform.OS === "android"
          ? colorScheme === "light"
            ? 5
            : 10
          : undefined,
    },

    noteContainerSmall: {
      borderColor:
        colorScheme === "light"
          ? Colors.light.secondary
          : Colors.dark.secondary,
      borderWidth: 1,
      borderStyle: "solid",
      borderRadius: 20,
      backgroundColor:
        colorScheme === "light" ? Colors.light.quinary : Colors.dark.quinary,
      height: "85%",
      width: "92%",
      marginHorizontal: "auto",
      marginTop: 20,
      overflow: "hidden",
      elevation:
        platform.OS === "android"
          ? colorScheme === "light"
            ? 5
            : 10
          : undefined,
    },

    noteInputArea: {
      width: "90%",
      minHeight: 60,
      marginHorizontal: "auto",
      marginVertical: 20,
      fontSize: fontSize * 1.1,
      color:
        colorScheme === "light"
          ? Colors.light.secondary
          : Colors.dark.secondary,
      lineHeight: 30,
    },

    gradientBottom: {
      position: "absolute",
      bottom: 30,
      left: 0,
      right: 0,
      height: 10, // Height of the fade effect
    },

    gradientTop: {
      position: "absolute",
      left: 0,
      right: 0,
      top: 28,
      height: 10, // Height of the fade effect
      zIndex: 1,
    },

    // New styling for markdown container
    markdownContainer: {
      width: "90%",
      marginHorizontal: "auto",
      marginTop: 20,
      borderColor:
        colorScheme === "light"
          ? Colors.light.secondary
          : Colors.dark.secondary,
      borderWidth: 1,
      borderRadius: 20,
      backgroundColor:
        colorScheme === "light" ? Colors.light.quinary : Colors.dark.quinary,
      padding: 10,
    },

    scrollableMarkdownContent: {
      maxHeight: 200, // You can adjust this based on the content size
    }
  });
}

export default NoteArea;

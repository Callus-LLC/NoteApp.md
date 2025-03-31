import React, { createContext, useState, ReactNode, useEffect } from "react";
import { Appearance, useColorScheme } from "react-native";

// Define the type for the color scheme
type ColorSchemeType = "light" | "dark" | undefined | null;

// Define the context type
interface ColorSchemeContextType {
  colorScheme: ColorSchemeType;
  setColorScheme: React.Dispatch<React.SetStateAction<ColorSchemeType>>;
}

// Create the context with default values
export const ColorSchemeContext = createContext<ColorSchemeContextType>({
  colorScheme: "light",
  setColorScheme: () => {},
});

// Create a provider component
export const ColorSchemeProvider = ({ children }: { children: ReactNode }) => {
  const systemColorScheme = useColorScheme(); // Get the initial system theme
  const [colorScheme, setColorScheme] =
    useState<ColorSchemeType>(systemColorScheme);

  // Listen for system theme changes
  useEffect(() => {
    const subscription = Appearance.addChangeListener(({ colorScheme }) => {
      setColorScheme(colorScheme); // Update context when theme changes
    });

    return () => subscription.remove(); // Cleanup listener on unmount
  }, []);

  return (
    <ColorSchemeContext.Provider value={{ colorScheme, setColorScheme }}>
      {children}
    </ColorSchemeContext.Provider>
  );
};

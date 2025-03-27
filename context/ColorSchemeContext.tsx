import React, { createContext, useState, ReactNode } from "react";
import Data from "@/constants/Data";
import { useColorScheme } from "react-native";

// Define the type for your notes
type ColorSchemeType = "light" | "dark" | undefined | null;

// Define the context type
interface ColorSchemeContextType {
  colorScheme: ColorSchemeType;
  setColorScheme: React.Dispatch<React.SetStateAction<ColorSchemeType>>;
}
// const currentColor = useColorScheme();

// Create the context with proper typing
export const ColorSchemeContext = createContext<ColorSchemeContextType>({
  colorScheme: "light",
  setColorScheme: () => {},
});

// Create a provider component
export const ColorSchemeProvider = ({ children }: { children: ReactNode }) => {
  const currentColor = useColorScheme();
  const [colorScheme, setColorScheme] = useState<ColorSchemeType>(currentColor);

  return (
    <ColorSchemeContext.Provider value={{ colorScheme, setColorScheme }}>
      {children}
    </ColorSchemeContext.Provider>
  );
};

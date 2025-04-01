import React, { createContext, useState, ReactNode } from "react";
import Data from "@/constants/data/NoteData";
import { useColorScheme } from "react-native";
import FontSizeType from "@/types/FontSizeType";

// Define the context type
interface FontSizeContextType {
  fontSize: FontSizeType;
  setFontSize: React.Dispatch<React.SetStateAction<FontSizeType>>;
}

// Create the context with proper typing
export const FontSizeContext = createContext<FontSizeContextType>({
  fontSize: 18,
  setFontSize: () => {},
});

// Create a provider component
export const FontSizeProvider = ({ children }: { children: ReactNode }) => {
  const currentSize = 18;
  const [fontSize, setFontSize] = useState<FontSizeType>(currentSize);

  return (
    <FontSizeContext.Provider value={{ fontSize, setFontSize }}>
      {children}
    </FontSizeContext.Provider>
  );
};

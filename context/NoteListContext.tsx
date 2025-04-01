import React, { createContext, useState, ReactNode } from "react";
import Data from "@/constants/data/NoteData";

// Define the type for your notes
interface Note {
  title: string;
  id: number;
  match?: number;
}

// Define the context type
interface NoteListContextType {
  noteList: Note[];
  setNoteList: React.Dispatch<React.SetStateAction<Note[]>>;
}

// Create the context with proper typing
export const NoteListContext = createContext<NoteListContextType>({
  noteList: [], // Default empty array for noteList
  setNoteList: () => {}, // Default empty function for setNoteList (no-op function)
});

// Create a provider component
export const NoteListProvider = ({ children }: { children: ReactNode }) => {
  const [noteList, setNoteList] = useState<Note[]>(Data);

  return (
    <NoteListContext.Provider value={{ noteList, setNoteList }}>
      {children}
    </NoteListContext.Provider>
  );
};

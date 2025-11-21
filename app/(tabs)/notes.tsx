import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { ItemNote } from "@/components/ItemNote";
import ModalNotes from "@/components/ModalNotes";
import type { Note } from "@/types/notes";

export default function NotesScreen() {
  const inset = useSafeAreaInsets();

  const [notes, setNotes] = useState<Note[]>([]);

  const [textNote, setTextNote] = useState<string>("");
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const addNote = () => {
    if (!textNote) return;
    setNotes((prevNotes) => [
      ...prevNotes,
      { id: Date.now().toString(), text: textNote, completed: false },
    ]);
    setTextNote("");
  };

  const deleteNote = (id: string): void => {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
  };

  const toggleNote = (id: string): void => {
    const newNotes = notes.map((note) =>
      note.id === id ? { ...note, completed: !note.completed } : note
    );
    setNotes(newNotes);
  };

  return (
    <View style={{ ...styles.container, paddingTop: inset.top }}>
      <Text style={styles.title}>Список наши заміток</Text>

      <FlatList
        data={notes}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{
          backgroundColor: "white",
        }}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <ItemNote {...item} toggleNote={toggleNote} deleteNote={deleteNote} />
        )}
      />

      <TouchableOpacity
        style={styles.addButton}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.addButtonText}>Добавити замітку</Text>
      </TouchableOpacity>
      <ModalNotes
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        textNote={textNote}
        setTextNote={setTextNote}
        addNote={addNote}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "white",
  },
  title: {
    textAlign: "center",
    color: "green",
    marginBottom: 20,
    fontSize: 25,
  },
  addButton: {
    position: "absolute",
    bottom: 20,
    right: 20,
    left: 20,
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#007bff",
    alignItems: "center",
  },
  addButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

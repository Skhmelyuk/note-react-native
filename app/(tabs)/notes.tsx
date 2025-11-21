import { FlatList, Text, TouchableOpacity, View } from "react-native";

import { useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { createStyles } from "@/assets/styles/notes.styles";
import { ItemNote } from "@/components/ItemNote";
import ModalNotes from "@/components/ModalNotes";
import useTheme from "@/hooks/useTheme";
import type { Note } from "@/types/notes";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function NotesScreen() {
  const inset = useSafeAreaInsets();

  const { colors } = useTheme();
  const styles = createStyles(colors);

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
    <View style={styles.container}>
      <View style={{ ...styles.header, paddingTop: inset.top + 16 }}>
        <View style={styles.headerContent}>
          <Text style={styles.title}>Мої нотатки</Text>
          <Text style={styles.subtitle}>
            {notes.length === 0
              ? "Почніть додавати свої нотатки"
              : `Всього: ${notes.length} ${
                  notes.length === 1
                    ? "нотатка"
                    : notes.length < 5
                    ? "нотатки"
                    : "нотаток"
                }`}
          </Text>
        </View>

        <TouchableOpacity
          style={styles.addButton}
          onPress={() => setModalVisible(true)}
        >
          <Text style={styles.addButtonText}>
            <Ionicons name="add" size={24} color={colors.warning} />
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={notes}
        keyExtractor={(item) => item.id}
        contentContainerStyle={
          notes.length === 0 ? styles.emptyContainer : styles.listContainer
        }
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <ItemNote {...item} toggleNote={toggleNote} deleteNote={deleteNote} />
        )}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyIcon}>📝</Text>
            <Text style={styles.emptyText}>
              У вас поки немає нотаток.{"\n"}Натисніть кнопку вгорі, щоб додати
              першу!
            </Text>
          </View>
        }
      />

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

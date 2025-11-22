import { FlatList, Text, TouchableOpacity, View } from "react-native";

import { useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { createStyles } from "@/assets/styles/notes.styles";
import { ItemNote } from "@/components/ItemNote";
import ModalNotes from "@/components/ModalNotes";
import useTheme from "@/hooks/useTheme";
import Ionicons from "@expo/vector-icons/Ionicons";

import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { useMutation, useQuery } from "convex/react";

export default function NotesScreen() {
  const inset = useSafeAreaInsets();

  const { colors } = useTheme();
  const styles = createStyles(colors);

  const notes = useQuery(api.notes.getNotes) ?? [];
  const addNoteMutation = useMutation(api.notes.addNote);
  const removeNoteMutation = useMutation(api.notes.removeNote);
  const toggleNoteMutation = useMutation(api.notes.toggleNote);

  const [textNote, setTextNote] = useState<string>("");
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const addNote = () => {
    if (!textNote) return;
    addNoteMutation({ text: textNote });
    setTextNote("");
  };

  const deleteNote = (id: Id<"notes">): void => {
    removeNoteMutation({ id });
  };

  const toggleNote = (id: Id<"notes">): void => {
    toggleNoteMutation({ id });
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
        keyExtractor={(item) => item._id}
        contentContainerStyle={
          notes.length === 0 ? styles.emptyContainer : styles.listContainer
        }
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <ItemNote
            id={item._id}
            text={item.text}
            completed={item.completed}
            toggleNote={toggleNote}
            deleteNote={deleteNote}
          />
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

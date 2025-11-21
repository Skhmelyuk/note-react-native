import useTheme from "@/hooks/useTheme";
import { Modal, Text, TextInput, TouchableOpacity, View } from "react-native";
import { createStyles } from "./ModalNotes.styles";

interface ModalNotesProps {
  modalVisible: boolean;
  setModalVisible: (modalVisible: boolean) => void;
  textNote: string;
  setTextNote: (textNote: string) => void;
  addNote: () => void;
}

function ModalNotes({
  modalVisible,
  setModalVisible,
  textNote,
  setTextNote,
  addNote,
}: ModalNotesProps) {
  const { colors } = useTheme();
  const styles = createStyles(colors);
  return (
    <Modal animationType="fade" transparent={true} visible={modalVisible}>
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Додати нотатку</Text>
          <TextInput
            style={styles.modalInput}
            value={textNote}
            onChangeText={setTextNote}
            placeholder="Введіть текст нотатки..."
            placeholderTextColor={colors.textMuted}
            multiline={true}
            numberOfLines={3}
          />
          <View style={styles.modalButtonsContainer}>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={() => {
                addNote();
                setModalVisible(false);
              }}
            >
              <Text style={styles.modalButtonText}>Додати</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.modalCancelButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.modalCancelButtonText}>Відміна</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default ModalNotes;

import {
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

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
  return (
    <Modal animationType="fade" transparent={true} visible={modalVisible}>
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Hello World!</Text>
          <TextInput
            style={styles.modalInput}
            value={textNote}
            onChangeText={setTextNote}
            placeholder="Введіть текст"
            placeholderTextColor="#aaa"
            multiline={true}
            numberOfLines={2}
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
              <Text style={styles.modalButtonText}>Відміна</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContent: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    width: "80%",
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalTitle: {
    fontSize: 20,
    marginBottom: 20,
  },
  modalInput: {
    borderColor: "green",
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 20,
  },
  modalButtonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  modalCancelButton: {
    backgroundColor: "#ccc",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  modalButton: {
    backgroundColor: "#007bff",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  modalButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default ModalNotes;

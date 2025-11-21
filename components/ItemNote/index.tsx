import useTheme from "@/hooks/useTheme";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Text, TouchableOpacity, View } from "react-native";
import { createStyles } from "./ItemNote.styles";

type ItemNoteProps = {
  id: string;
  text: string;
  completed: boolean;
  deleteNote: (id: string) => void;
  toggleNote: (id: string) => void;
};

export const ItemNote = ({
  text,
  completed,
  id,
  deleteNote,
  toggleNote,
}: ItemNoteProps) => {
  const { colors } = useTheme();
  const styles = createStyles(colors);
  return (
    <View style={[styles.noteItem, completed && styles.noteItemCompleted]}>
      <View style={styles.noteContent}>
        <TouchableOpacity
          style={styles.checkboxContainer}
          onPress={() => toggleNote(id)}
        >
          <View style={[styles.checkbox, completed && styles.checkboxChecked]}>
            {completed && <Text style={styles.checkmark}>✓</Text>}
          </View>
        </TouchableOpacity>
        <Text style={[styles.noteText, completed && styles.noteTextCompleted]}>
          {text}
        </Text>
        <TouchableOpacity
          style={[styles.noteButton, styles.noteButtonDelete]}
          onPress={() => {
            deleteNote(id);
          }}
        >
          <Text style={styles.noteButtonText}>
            <Ionicons name="close-circle-outline" size={20} color="white" />
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

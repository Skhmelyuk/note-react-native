import { ColorTheme } from "@/hooks/useTheme";
import { StyleSheet } from "react-native";

export const createStyles = (colors: ColorTheme) => {
  return StyleSheet.create({
    noteItem: {
      backgroundColor: colors.surface,
      padding: 16,
      marginVertical: 8,
      marginHorizontal: 4,
      borderRadius: 16,
      shadowColor: colors.shadow,
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.15,
      shadowRadius: 8,
      elevation: 5,
      borderLeftWidth: 5,
      borderLeftColor: colors.primary,
      borderWidth: 1,
      borderColor: colors.border,
    },
    noteItemCompleted: {
      backgroundColor: colors.surface,
      borderLeftColor: colors.success,
      opacity: 0.75,
      borderColor: colors.success + "30",
    },
    noteContent: {
      flexDirection: "row",
      alignItems: "center",
      gap: 12,
    },
    checkboxContainer: {
      padding: 4,
    },
    checkbox: {
      width: 28,
      height: 28,
      borderRadius: 8,
      borderWidth: 2.5,
      borderColor: colors.primary,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: colors.surface,
    },
    checkboxChecked: {
      backgroundColor: colors.success,
      borderColor: colors.success,
    },
    checkmark: {
      color: colors.surface,
      fontSize: 18,
      fontWeight: "bold",
    },
    noteButton: {
      backgroundColor: colors.primary,
      paddingVertical: 8,
      paddingHorizontal: 12,
      borderRadius: 10,
      alignItems: "center",
      justifyContent: "center",
      shadowColor: colors.primary,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.3,
      shadowRadius: 4,
      elevation: 3,
      minWidth: 40,
      minHeight: 40,
    },
    noteButtonDelete: {
      backgroundColor: colors.danger,
      shadowColor: colors.danger,
    },
    noteButtonText: {
      color: colors.surface,
      fontSize: 20,
      fontWeight: "600",
    },
    noteText: {
      fontSize: 16,
      color: colors.text,
      flex: 1,
      lineHeight: 24,
      fontWeight: "500",
    },
    noteTextCompleted: {
      textDecorationLine: "line-through",
      color: colors.textMuted,
      opacity: 0.7,
    },
  });
};

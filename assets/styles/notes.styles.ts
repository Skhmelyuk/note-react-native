import { ColorTheme } from "@/hooks/useTheme";
import { StyleSheet } from "react-native";

export const createStyles = (colors: ColorTheme) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.bg,
    },
    header: {
      paddingHorizontal: 20,
      paddingVertical: 16,
      backgroundColor: colors.surface,
      borderBottomWidth: 1,
      borderBottomColor: colors.border,
      shadowColor: colors.shadow,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },
    headerContent: {
      flex: 1,
      alignItems: "center",
    },
    title: {
      fontSize: 28,
      fontWeight: "800",
      color: colors.text,
      textAlign: "center",
      letterSpacing: 0.5,
    },
    subtitle: {
      fontSize: 14,
      color: colors.textMuted,
      textAlign: "center",
      marginTop: 4,
      fontWeight: "500",
    },
    listContainer: {
      paddingHorizontal: 16,
      paddingTop: 12,
      paddingBottom: 20,
    },
    emptyContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      paddingHorizontal: 40,
      paddingTop: 60,
    },
    emptyText: {
      fontSize: 18,
      color: colors.textMuted,
      textAlign: "center",
      marginTop: 16,
      lineHeight: 26,
    },
    emptyIcon: {
      fontSize: 64,
      opacity: 0.3,
    },
    addButton: {
      backgroundColor: colors.primary,
      width: 48,
      height: 48,
      borderRadius: 24,
      alignItems: "center",
      justifyContent: "center",
      shadowColor: colors.primary,
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.3,
      shadowRadius: 8,
      elevation: 6,
    },
    addButtonText: {
      color: colors.surface,
      fontSize: 28,
      fontWeight: "700",
      lineHeight: 28,
    },
  });
};

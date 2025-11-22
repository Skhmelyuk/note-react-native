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
      paddingTop: 20,
      paddingBottom: 24,
    },
    title: {
      fontSize: 32,
      fontWeight: "700",
      color: colors.text,
    },
    content: {
      flex: 1,
      paddingHorizontal: 20,
    },
    section: {
      marginBottom: 32,
    },
    sectionTitle: {
      fontSize: 14,
      fontWeight: "600",
      color: colors.textMuted,
      textTransform: "uppercase",
      letterSpacing: 0.5,
      marginBottom: 12,
    },
    settingItem: {
      backgroundColor: colors.surface,
      borderRadius: 16,
      padding: 16,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      shadowColor: colors.shadow,
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.08,
      shadowRadius: 8,
      elevation: 3,
      marginBottom: 12,
    },
    settingLeft: {
      flexDirection: "row",
      alignItems: "center",
      flex: 1,
    },
    iconContainer: {
      width: 44,
      height: 44,
      borderRadius: 22,
      alignItems: "center",
      justifyContent: "center",
      marginRight: 12,
    },
    settingText: {
      flex: 1,
    },
    settingLabel: {
      fontSize: 16,
      fontWeight: "600",
      color: colors.text,
      marginBottom: 2,
    },
    settingDescription: {
      fontSize: 13,
      color: colors.textMuted,
      fontWeight: "500",
    },
    footer: {
      marginTop: "auto",
      paddingVertical: 24,
      alignItems: "center",
      gap: 4,
    },
    footerText: {
      fontSize: 12,
      color: colors.textMuted,
      fontWeight: "500",
    },
  });
};

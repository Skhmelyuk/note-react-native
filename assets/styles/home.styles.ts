import { ColorTheme } from "@/hooks/useTheme";
import { StyleSheet } from "react-native";

export const createStyles = (colors: ColorTheme) => {
  return StyleSheet.create({
    title: {
      marginBottom: 16,
    },
    button: {
      paddingBlock: 12,
      paddingHorizontal: 16,
      backgroundColor: colors.success,
      borderRadius: 10,
    },
    textButton: {
      color: colors.danger,
    },
  });
};

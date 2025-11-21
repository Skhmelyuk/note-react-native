import useTheme from "@/hooks/useTheme";
import { Text, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { createStyles } from "@/assets/styles/home.styles";

export default function HomeScreen() {
  const inset = useSafeAreaInsets();

  const { colors, toggleDarkMode } = useTheme();

  const styles = createStyles(colors);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingTop: inset.top,
        backgroundColor: colors.bg,
      }}
    >
      <Text style={styles.title}>Edit app/index.tsx to edit this screen.</Text>
      <TouchableOpacity style={styles.button} onPress={toggleDarkMode}>
        <Text style={styles.textButton}> Зміна теми </Text>
      </TouchableOpacity>
    </View>
  );
}

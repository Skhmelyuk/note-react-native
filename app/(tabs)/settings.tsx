import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { createStyles } from "@/assets/styles/setting.styles";
import useTheme from "@/hooks/useTheme";

function SettingScreen() {
  const { colors } = useTheme();
  const styles = createStyles(colors);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Settings</Text>
    </SafeAreaView>
  );
}

export default SettingScreen;

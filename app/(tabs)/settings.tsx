import Ionicons from "@expo/vector-icons/Ionicons";
import { Switch, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { createStyles } from "@/assets/styles/setting.styles";
import useTheme from "@/hooks/useTheme";

function SettingScreen() {
  const { colors, isDarkMode, toggleDarkMode } = useTheme();
  const styles = createStyles(colors);

  const handleDeleteAll = () => {};

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Налаштування</Text>
      </View>

      {/* Settings Sections */}
      <View style={styles.content}>
        {/* Appearance Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Зовнішній вигляд</Text>

          <View style={styles.settingItem}>
            <View style={styles.settingLeft}>
              <View
                style={[
                  styles.iconContainer,
                  { backgroundColor: colors.primary + "15" },
                ]}
              >
                <Ionicons
                  name={isDarkMode ? "moon" : "sunny"}
                  size={22}
                  color={colors.primary}
                />
              </View>
              <View style={styles.settingText}>
                <Text style={styles.settingLabel}>Темна тема</Text>
                <Text style={styles.settingDescription}>
                  {isDarkMode ? "Увімкнено" : "Вимкнено"}
                </Text>
              </View>
            </View>
            <Switch
              value={isDarkMode}
              onValueChange={toggleDarkMode}
              trackColor={{ false: colors.border, true: colors.primary + "50" }}
              thumbColor={isDarkMode ? colors.primary : colors.surface}
            />
          </View>
        </View>

        {/* Data Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Дані</Text>

          <TouchableOpacity
            style={styles.settingItem}
            onPress={handleDeleteAll}
            activeOpacity={0.7}
          >
            <View style={styles.settingLeft}>
              <View
                style={[
                  styles.iconContainer,
                  { backgroundColor: colors.danger + "15" },
                ]}
              >
                <Ionicons
                  name="trash-outline"
                  size={22}
                  color={colors.danger}
                />
              </View>
              <View style={styles.settingText}>
                <Text style={[styles.settingLabel, { color: colors.danger }]}>
                  Видалити всі нотатки
                </Text>
                <Text style={styles.settingDescription}>Незворотна дія</Text>
              </View>
            </View>
            <Ionicons
              name="chevron-forward"
              size={20}
              color={colors.textMuted}
            />
          </TouchableOpacity>
        </View>

        {/* App Info */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>Версія 1.0.0</Text>
          <Text style={styles.footerText}>© 2024 Notes App</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default SettingScreen;

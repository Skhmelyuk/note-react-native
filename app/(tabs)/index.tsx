import useTheme from "@/hooks/useTheme";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Text, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { createStyles } from "@/assets/styles/home.styles";

export default function HomeScreen() {
  const inset = useSafeAreaInsets();
  const { colors, toggleDarkMode, isDarkMode } = useTheme();
  const styles = createStyles(colors);

  // Статична статистика (без реальних даних)
  const totalNotes = 12;
  const completedNotes = 8;
  const activeNotes = 4;
  const completionRate = 67;

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={{ ...styles.header, paddingTop: inset.top + 16 }}>
        <View>
          <Text style={styles.greeting}>Статистика</Text>
          <Text style={styles.subtitle}>{totalNotes} нотаток</Text>
        </View>
        <TouchableOpacity style={styles.themeButton} onPress={toggleDarkMode}>
          <Ionicons
            name={isDarkMode ? "sunny" : "moon"}
            size={20}
            color={colors.text}
          />
        </TouchableOpacity>
      </View>

      {/* Stats Grid */}
      <View style={styles.statsGrid}>
        <View style={styles.statCard}>
          <View
            style={[
              styles.iconContainer,
              { backgroundColor: colors.primary + "15" },
            ]}
          >
            <Ionicons name="document-text" size={24} color={colors.primary} />
          </View>
          <Text style={styles.statValue}>{totalNotes}</Text>
          <Text style={styles.statLabel}>Всього</Text>
        </View>

        <View style={styles.statCard}>
          <View
            style={[
              styles.iconContainer,
              { backgroundColor: colors.warning + "15" },
            ]}
          >
            <MaterialIcons
              name="pending-actions"
              size={24}
              color={colors.warning}
            />
          </View>
          <Text style={styles.statValue}>{activeNotes}</Text>
          <Text style={styles.statLabel}>Активні</Text>
        </View>

        <View style={styles.statCard}>
          <View
            style={[
              styles.iconContainer,
              { backgroundColor: colors.success + "15" },
            ]}
          >
            <Ionicons name="checkmark-done" size={24} color={colors.success} />
          </View>
          <Text style={styles.statValue}>{completedNotes}</Text>
          <Text style={styles.statLabel}>Виконані</Text>
        </View>
      </View>

      {/* Progress Card */}
      <View style={styles.progressCard}>
        <View style={styles.progressHeader}>
          <Text style={styles.progressTitle}>Прогрес</Text>
          <Text style={styles.progressPercentage}>{completionRate}%</Text>
        </View>
        <View style={styles.progressBarContainer}>
          <View
            style={[
              styles.progressBar,
              {
                width: `${completionRate}%`,
                backgroundColor: colors.success,
              },
            ]}
          />
        </View>
      </View>

      {/* Quick Stats */}
      <View style={styles.quickStatsRow}>
        <View style={styles.quickStatItem}>
          <Text style={styles.quickStatValue}>{totalNotes}</Text>
          <Text style={styles.quickStatLabel}>Сьогодні</Text>
        </View>

        <View style={styles.quickStatDivider} />

        <View style={styles.quickStatItem}>
          <Text style={styles.quickStatValue}>Висока</Text>
          <Text style={styles.quickStatLabel}>Ефективність</Text>
        </View>

        <View style={styles.quickStatDivider} />

        <View style={styles.quickStatItem}>
          <Text style={styles.quickStatValue}>📝</Text>
          <Text style={styles.quickStatLabel}>Статус</Text>
        </View>
      </View>
    </View>
  );
}

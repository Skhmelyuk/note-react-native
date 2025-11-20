import { useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={styles.title}>Edit app/index.tsx to edit this screen.</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/notes" as any)}
      >
        <Text style={styles.textButton}> Перейти на наші нотатки </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    marginBottom: 16,
  },
  button: {
    paddingBlock: 12,
    paddingHorizontal: 16,
    backgroundColor: "blue",
    borderRadius: 10,
  },
  textButton: {
    color: "white",
  },
});

import React from "react";
import { ThemedView } from "@/components/ThemedView";
import { StyleSheet } from "react-native";
import { ThemedText } from "@/components/ThemedText";

export default function TabTwoScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText>검색화면!</ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
  },
});

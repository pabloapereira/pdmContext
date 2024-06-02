import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";


import { useThemeContent } from "../context/themeContext";

export default function home() {
  const { temaAtual, selectTheme } = useThemeContent();

  return (
    <View>
      <Text>home</Text>
      <Text>{temaAtual}</Text>
      <Button title="trocar" onPress={selectTheme}></Button>
    </View>
  );
}

import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useThemeContent } from "../context/themeContext";

export const Cabecalho = () => {
  const { temaAtual, selectTheme } = useThemeContent();
  const app = useThemeContent();

  return (
    <View>
      <Text>Header</Text>
      <TouchableOpacity onPress={app?.selectTheme}>
        <Text>alterar tema</Text>
      </TouchableOpacity>
    </View>
  );
};

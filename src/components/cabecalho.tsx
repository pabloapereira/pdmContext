// Cabecalho.tsx
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useThemeContent } from "../context/themeContext";

export const Cabecalho = () => {
  const { temaAtual, selectTheme } = useThemeContent();

  return (
    <View style={temaAtual.header}>
      <TouchableOpacity onPress={selectTheme} style={temaAtual.button}>
        <Text style={temaAtual.textButton}>Alterar tema</Text>
      </TouchableOpacity>
    </View>
  );
};

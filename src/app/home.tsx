import React from "react";
import { Button, StyleSheet, Text, View, TouchableOpacity} from "react-native";

import { useThemeContent } from "../context/themeContext";

export default function home() {
  const { temaAtual, selectTheme } = useThemeContent();

  const styles = StyleSheet.create({
    textButton: temaAtual.textButton,
    container: temaAtual.container,
    button: temaAtual.button
  });

  return (
    <View style={styles.container}>
      <Text style={styles.textButton}>Name: padrão</Text>
      <Text style={styles.textButton}>Senha: padrão</Text>
      <TouchableOpacity onPress={selectTheme} style={ styles.button }>
        <Text style={ styles.textButton}>Trocar Tema</Text>
      </TouchableOpacity>
    </View>
  );
}

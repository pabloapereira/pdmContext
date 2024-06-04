import React from "react";
import { Button, StyleSheet, Text, View, TouchableOpacity } from "react-native";

import { useThemeContent } from "../context/themeContext";

export default function home() {
  const { temaAtual, selectTheme } = useThemeContent();

  const styles = StyleSheet.create({
    textButton: {
      color: temaAtual == "light" ? "black" : "white",
      marginBottom: "1%"
    },
    container: {
      backgroundColor: temaAtual == "light" ? "white" : "black",
      padding: 10,
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    button: {
      backgroundColor: temaAtual == "light" ? "blue": "#616161",
      width: 100,
      height: 30,
      borderRadius: 6,
      justifyContent: "center",
      alignItems: "center",
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.textButton}>Name: padrão</Text>
      <Text style={styles.textButton}>Senha: padrão</Text>
      <TouchableOpacity onPress={selectTheme} style={styles.button}>
        <Text style={styles.textButton}>Trocar Tema</Text>
      </TouchableOpacity>
    </View>
  );
}

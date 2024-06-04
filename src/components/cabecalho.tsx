import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useThemeContent } from "../context/themeContext";

export const Cabecalho = () => {

  const { temaAtual, selectTheme } = useThemeContent();

  const styles = StyleSheet.create({
    header:  {
      backgroundColor: temaAtual== 'light' ? "#F7F7F7" : "black",
      alignItems: "center",
      justifyContent: "center",
      height: 40
    },
    button: {
      backgroundColor: temaAtual == "light" ? "blue": "#616161",
      width: 100,
      height: 30,
      borderRadius: 6,
      justifyContent: "center",
      alignItems: "center",
    },
    textButton:{ 
      color: temaAtual == "light" ? "black" : "wihte"
    },
  })

  return (
    <View style={ styles.header }>
      <TouchableOpacity onPress={selectTheme} style={ styles.button }>
        <Text style={ styles.textButton}>alterar tema</Text>
      </TouchableOpacity>
    </View>
  );
};
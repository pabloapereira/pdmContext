import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useThemeContent } from "../context/themeContext";

export const Cabecalho = () => {

  const { temaAtual, selectTheme } = useThemeContent();

  const styles = StyleSheet.create({
    header: temaAtual.header,
    button: temaAtual.button,
    textButton: temaAtual.textButton,
  })

  //sconst ifTheme = temaAtual ? Light : Dark;

  return (
    <View style={ [styles.header] }>
      <TouchableOpacity onPress={selectTheme} style={ styles.button }>
        <Text style={ styles.textButton}>alterar tema</Text>
      </TouchableOpacity>
    </View>
  );
};
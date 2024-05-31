import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import ThemeProvider, { useThemeContent } from "../context/themeContext";
//import { Cabecalho } from "../components/cabecalho";
export default function Index() {

  const { temaAtual, selectTheme } = useThemeContent()

  return (
      <View style={styles.container}>
        <Text>{temaAtual}</Text>
        <Button title="trocar" onPress={selectTheme}></Button>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});

import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { Link } from 'expo-router';

import { useThemeContent } from "../context/themeContext";
import { Cabecalho } from "../components/cabecalho";
export default function Index() {

  const { temaAtual, selectTheme } = useThemeContent()

  return (
      <View style={styles.container}>
        <Cabecalho />
        <Text>{temaAtual}</Text>

        <View>
          <Text>Name</Text>
          <TextInput />
          <Text>Password</Text>
          <TextInput />
        </View>

        <Link href={"/home"}> home </Link>
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

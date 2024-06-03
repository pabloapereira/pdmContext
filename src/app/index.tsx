import { StyleSheet, Text, TextInput, View } from "react-native";
import { Link } from 'expo-router';

import { useThemeContent } from "../context/themeContext";
import { Cabecalho } from "../components/cabecalho";
export default function Index() {

  const { temaAtual, selectTheme } = useThemeContent();

  const styles = StyleSheet.create({  
    textButton: temaAtual.textButton,
    container: temaAtual.container,
    card: temaAtual.card,
    input: temaAtual.input
  })

  return (
      <View style={styles.container}>
        <Cabecalho />

        <View style={styles.card}>
          <Text style={styles.textButton}>Name</Text>
          <TextInput style={styles.input}/>
          <Text style={styles.textButton}>Password</Text>
          <TextInput style={styles.input}/>
        </View>

        <Link href={"/home"} style={styles.textButton}> home </Link>
      </View>
  );
}

import { StyleSheet, Text, TextInput, View } from "react-native";
import { Link } from 'expo-router';

import { useThemeContent } from "../context/themeContext";
import { Cabecalho } from "../components/cabecalho";
export default function Index() {

  const { temaAtual, selectTheme } = useThemeContent();

  const styles = StyleSheet.create({  
    textButton:{ 
      color: temaAtual == "light" ? "black" : "white"
    },
    container: {
      backgroundColor: temaAtual == "light" ? "white" : "black",
      padding: 10,
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
    },
    card: {
      width: "50%",
      height: "50%",
      backgroundColor: temaAtual == "light" ? "#F7F7F7" : "#4b0081",
      padding: 20,
    },
    input: {
      borderWidth: 2,
      borderColor: "black",
      backgroundColor: temaAtual == "light" ? "#E7F0FC" : "#060000",
      borderRadius: 8,
      padding: 6,
      color: temaAtual == "light" ? "dark" : "white"
    },
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

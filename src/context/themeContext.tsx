import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useState,
} from "react";
import { Button, View, Text, TouchableOpacity } from "react-native";

// Passo 1: Definindo o contexto

type Theme = {
  header: {
    height: number;
    width: number | string;
    backgroundColor: string;
    alignItems: 'center' | 'flex-start' | 'flex-end' | 'stretch' | 'baseline' | 'space-between' | 'space-around' | 'space-evenly';
    justifyContent: 'center' | 'flex-start' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly';
  };
  button: {
    width: number;
    height: number;
    backgroundColor: string;
    borderRadius: number;
    alignItems: 'center' | 'flex-start' | 'flex-end' | 'stretch' | 'baseline' | 'space-between' | 'space-around' | 'space-evenly';
    justifyContent: 'center' | 'flex-start' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly';
  };
  textButton: {
    color: string;
  };
};

const lightTheme: Theme = {
  header: {
    height: 40,
    width: "100%",
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    width: 200,
    height: 30,
    backgroundColor: "red",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  textButton: {
    color: "black",
  },
};

const darkTheme: Theme = {
  header: {
    height: 40,
    width: "100%",
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    width: 200,
    height: 30,
    backgroundColor: "green",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  textButton: {
    color: "black",
  },
};

type ThemeContextProps = {
  temaAtual: Theme;
  selectTheme: () => void;
};

const ThemeContext = createContext<ThemeContextProps | null>(null);

// Passo 2: Definindo o provider com a variável tema e a função para alterar o tema atual

export default function ThemeProvider({ children }: PropsWithChildren<{}>) {
  const [temaAtual, setTemaAtual] = useState<Theme>(lightTheme);

  const selectTheme = () => {
    setTemaAtual((prevTheme) => (prevTheme === lightTheme ? darkTheme : lightTheme));
  };

  return (
    <ThemeContext.Provider value={{ temaAtual, selectTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Passo 3: Definindo o hook para acesso das propriedades do contexto

export function useThemeContent() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useThemeContent deve ser usado dentro de um ThemeProvider");
  }

  return context;
}
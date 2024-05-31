import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useState,
} from "react";
import { Button } from "react-native";

// Passo 1: Definindo o contexto

type ThemeContextProps = {
  temaAtual: string;
  selectTheme: () => void;
};

const ThemeContext = createContext<ThemeContextProps | null>(null);

// passo 2: Definindo o provider com a variavel tema e a function para alterar o tema atual

export default function ThemeProvider({ children }: PropsWithChildren) {
  const [temaAtual, setTemaAtual] = useState("light");

  const selectTheme = () => {
    if (temaAtual === "light") {
      setTemaAtual("dark");
      console.log("dark");
    } else {
      setTemaAtual("light");
      console.log("outras");
    }
  };

  return (
    <ThemeContext.Provider value={{ temaAtual, selectTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// passo 3: Definindo o hook para acesso das propriedades do context

export function useThemeContent() {
  const context = useContext(ThemeContext);

  if (context) {
    return context;
  }
  throw new Error(`erro context ${context};`);
}

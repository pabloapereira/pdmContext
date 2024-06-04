import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useState,
} from "react";
import { Button, FlexAlignType } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

// Passo 1: Definindo o contexto

type ThemeContextProps = {
  temaAtual: "light" | "dark";
  selectTheme: () => void;
};

const ThemeContext = createContext<ThemeContextProps | null>(null);

// passo 2: Definindo o provider com a variavel tema e a function para alterar o tema atual

export default function ThemeProvider({ children }: PropsWithChildren) {
  

  const [temaAtual, setTemaAtual] = useState<"light" | "dark">("light");

  const selectTheme = () => {
    if (temaAtual == "light") {
      setTemaAtual("dark");
    } else {
      setTemaAtual("light");
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

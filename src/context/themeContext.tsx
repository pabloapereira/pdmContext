import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useState,
} from "react";
import { Button, FlexAlignType } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

// Passo 1: Definindo o contexto

type Theme = {
  header: {
    backgroundColor: string,
  };
  button: {
    backgroundColor: string,
    width: number,
    heigth: number,
    justifyContent: string,
    marginButton: number,
    alignItems: string,
  },
  textButton: {
    color: string;
  },
  container: {
    backgroundColor: string,
    padding: 10,
    flex: number,
    justifyContent: string,
    alignItems: string
  },
  card: {
    weigth: number | string,
    heigth: number | string,
    backgroundColor: string;
    padding: number,
  },
  input: {
    borderWidth: number,
    borderColor: string,
    backgroundColor: string,
    borderRadius: number | string,
    color?: string,
    padding: string | number
  }
};

type ThemeContextProps = {
  temaAtual: Theme;
  selectTheme: () => void;
};

const ThemeContext = createContext<ThemeContextProps | null>(null);

// passo 2: Definindo o provider com a variavel tema e a function para alterar o tema atual

export default function ThemeProvider({ children }: PropsWithChildren) {
  
  const lightTheme: Theme = {
    header: {
      backgroundColor: "#F7F7F7",
    },
    button: {
      backgroundColor: "blue",
      width: 100,
      heigth: 50,
      justifyContent: "center",
      alignItems: "center",
      marginButton: 30
    },
    textButton: {
      color: "black",
    },
    container: {
      backgroundColor: "white",
      padding: 10,
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
    },
    card: {
      weigth: "50%",
      heigth: "50%",
      backgroundColor: "#F7F7F7",
      padding: 20,
    },
    input: {
      borderWidth: 2,
      borderColor: "black",
      backgroundColor: "#E7F0FC",
      borderRadius: 8,
      padding: 6,
    },
  };

  const darkTheme: Theme = {
    header: {
      backgroundColor: "black",
    },
    button: {
      backgroundColor: "#616161",
      width: 100,
      heigth: 70,
      justifyContent: "center",
      marginButton: 30,
      alignItems: "center",
    },
    textButton: {
      color: "white",
    },
    container: {
      backgroundColor: "black",
      padding: 10,
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
    },
    card: {
      weigth: "50%",
      heigth: "50%",
      backgroundColor: "#4b0081",
      padding: 20,
    },
    input: {
      borderWidth: 2,
      borderColor: "white",
      backgroundColor: "#e6ccef",
      borderRadius: 8,
      color: "#060000",
      padding: 5
    }
  };

  const [temaAtual, setTemaAtual] = useState<Theme>(lightTheme);

  const selectTheme = () => {
    if (temaAtual.header.backgroundColor === lightTheme.header.backgroundColor) {
      setTemaAtual(darkTheme);
    } else {
      setTemaAtual(lightTheme);
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

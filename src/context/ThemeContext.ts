import { createContext, Dispatch, SetStateAction } from "react";

type ThemeContextType = {
    theme:string;
    setTheme: Dispatch<SetStateAction<string>>
}

export const ThemeContext = createContext<ThemeContextType | null>(null)
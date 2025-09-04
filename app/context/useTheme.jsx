"use client"

import { useContext } from "react";
import { TheemObject } from "./ThemeContext";

export default function useTheme (){
    const theme = useContext(TheemObject)

    return theme;
}
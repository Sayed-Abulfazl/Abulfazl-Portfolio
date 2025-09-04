"use client"

import { animate } from "framer-motion";
import { createContext, useEffect, useReducer, useState } from "react";

export const TheemObject = createContext();

const ThemeFUN = (state, action) => {
    switch (action.type) {
        case "SET_THESE":
            return { ...state, ...action.payload }
        case "CHANGEMODE":
            return { ...state, mode: action.payload }
        default:
            return state;
    }
}

const initial = {
    mode: 'dark'
}

export default function ThemeFunction({ children }) {
    const [state, dispatch] = useReducer(ThemeFUN,initial)

    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        const stored = {
            mode : localStorage.getItem('mode') || initial.mode 
        }

        dispatch({
            type : 'SET_THESE' , payload : {
                mode : stored.mode,
            }
        });

        setIsMounted(true);

    }, [])

    useEffect(() => {
        if (!isMounted){return;}

        localStorage.setItem('mode', state.mode)
    }, [state])

    if(!isMounted){return null;}

    const changeMode = (inputMode) => {
        dispatch({ type: 'CHANGEMODE', payload: inputMode })
    }

    const scrollToSection = (e,id) => {
        e.preventDefault();

        const el = document.getElementById(id);
        if(!el) { return; }

        const targetY =el.getBoundingClientRect().top + window.scrollY;

        animate(window.scrollY , targetY, {
            duration : 0.8,
            ease : "easeInOut",
            onUpdate : (v) => window.scrollTo(0, v),
        });
    };

    return (
        <TheemObject.Provider value={{ ...state, changeMode, scrollToSection }}>
            {children}
        </TheemObject.Provider>
    )
}
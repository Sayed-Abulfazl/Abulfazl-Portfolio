"use client"

import { motion } from "framer-motion"
import { TICKS } from "../constants"
import useTheme from "../context/useTheme"

export default function Techs() {
    const { mode } = useTheme()
    return (
        <div className={`my-4 w-full ${mode === 'dark' ? "bg-lime-300 text-black" : "bg-orange-700 text-white"} lg:py-6 `}>
            <div className="flex overflow-hidden whitespace-nowrap">
                {[...Array(2)].map((tech, i) => (
                    <motion.h1 
                        key={i} 
                        className="p-2 text-3xl font-bold tracking-tighter lg:text-7xl"
                        initial={{ x: '-100%' }}
                        animate={{ x: '0' }}
                        transition={{ repeat : Infinity, ease : "linear", duration : 30 }}
                    >
                        {TICKS}
                    </motion.h1>
                ))}
            </div>
        </div>
    )
}
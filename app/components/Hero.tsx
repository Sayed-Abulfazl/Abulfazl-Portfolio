import { useEffect, useState } from "react";
import useTheme from "../context/useTheme"

import { motion } from "framer-motion";

    const container = {
        hidden : { opacity : 0 },
        visible : { 
            opacity : 1,
            transition : {
                staggerChildren : 0.3,
                delayChildren : 0.2,
            },
         },
    };

    const child = {
        hidden : { opacity : 0 , y : -30 },
        visible : { opacity : 1 , y : 0 , transition : { duration : 0.6 } }
    }

export default function Hero() {
    const { mode, scrollToSection } = useTheme();
    
    return (
        <motion.div
            className="FCC flex-col gap-4"
            id="home"
            variants={container}
            initial="hidden"
            animate="visible"
        >
            <motion.h1
                className="mt-26 lg:mt-32 font-semibold text-[5vw] lg:text-5xl"
                variants={child}
            >
                Hi, I 'm <span className={`uppercase ${mode === 'dark' ? "datx" : "litx"}`}>Sayed Abulfazl Hussaini</span>
            </motion.h1>
            <motion.div variants={child} className='FCC flex-col text-[3vw] lg:text-[2vw] mt-4 font-light'>

                <p
                    className=''
                >
                    I can create projects with modern technologies,
                </p>
                <p>
                    that are both beautiful and functional.
                </p>
            </motion.div>
            <motion.div
                className='mt-5'
                variants={child}
            >
                <a
                    href="#projects"
                    onClick={(e) => scrollToSection(e,'projects')}
                    className={`px-3 py-1 lg:text-xl ${mode === 'dark' ? "bg-lime-300 text-black hover:bg-lime-400" : "bg-orange-700 text-white hover:bg-orange-800"} font-bold rounded-xl`}
                >View my works</a>
            </motion.div>
            <motion.div
                className='w-full'
                variants={child}
            >
                {
                    mode === 'dark' && (
                        <img src="/abulfazlDK.png" alt="Abulfazl" className='mt-8 w-full object-cover h-auto' />
                    )
                }
                {
                    mode === 'light' && (
                        <img src="/abulfazlLG.png" alt="Abulfazl" className='mt-8 w-full object-cover h-auto' />
                    )
                }
            </motion.div>
        </motion.div>
    )
}
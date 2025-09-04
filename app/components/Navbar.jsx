"use client"

import { useEffect, useState } from "react"
import { FaBars, FaTimes } from 'react-icons/fa';

import useTheme from "../context/useTheme";

import { MdLightMode, MdNightlight } from 'react-icons/md'
import Menu from "./Menu";

import { motion } from "framer-motion";

export default function Navbar() {

    const { mode, changeMode , child, container } = useTheme();

    const [isOpenMenu, setIsOpenMenu] = useState(false);

    const toggleMenu = () => {
        setIsOpenMenu(!isOpenMenu);
    }

    useEffect(() => {
        if (isOpenMenu) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [isOpenMenu])





    return (
        <>
            <motion.nav 
                className={`fixed ${!isOpenMenu ? "flex justify-between items-center w-full border-b-2" : 'right-0'} p-4 z-30 ${mode === 'dark' ? "bg-black" : "bg-white"}`}
                initial='hidden'
                animate='visible'
            >
                {
                    !isOpenMenu &&
                    <motion.h1 variants={child} className="uppercase font-bold space-x-2 tracking-wider text-xl">
                        <span>Abulfazl</span>
                        <span className={`${mode === 'dark' ? "datx" : "litx"}`}>portfolio</span>
                    </motion.h1>
                }
                <div className="FCC gap-3">
                    <motion.div
                        variants={child}
                        className={`cursor-pointer p-2 rounded-full ${mode === 'dark' ? "hover:bg-[rgba(255,255,255,0.5)]" : "hover:bg-[rgba(0,0,0,0.1)]"}`}
                        onClick={() => changeMode(mode === 'light' ? 'dark' : 'light')}
                    >
                        {mode === 'dark' && (
                            <MdLightMode />
                        )}
                        {mode === 'light' && (
                            <MdNightlight />
                        )}
                    </motion.div>
                    <motion.button
                        variants={child}
                        onClick={toggleMenu}
                        className="rounded-md p-2 cursor-pointer"
                    >
                        {isOpenMenu ? (
                            <FaTimes className="w-6 h-6" />
                        ) : (
                            <FaBars className="w-6 h-6" />
                        )}
                    </motion.button>
                </div>
            </motion.nav>

            {isOpenMenu && (
                <Menu toggleMenu={toggleMenu} />
            )}
        </>
    )
}
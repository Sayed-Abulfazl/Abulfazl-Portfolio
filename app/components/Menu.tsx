import { AnimatePresence, motion } from "framer-motion";
import useTheme from "../context/useTheme"
import { LINKS } from "../constants";

const containerVarients = {
    hidden: { opacity: 0, y: "-100%" },
    visible: {
        opacity: 1, y: 0,
        transition: {
            staggerChildren: 0.2,
        }
    }
}

const linkVarients = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 }
}

export default function Menu({ toggleMenu }) {


    const { mode , scrollToSection } = useTheme();
    return (
        <AnimatePresence>

            <div className={`inset-0 z-20 fixed FCC ${mode === 'dark' ? 'bg-[rgba(0,0,0,0.7)]' : "bg-[rgba(255,255,255,0.7)]"}`}>
                <motion.div
                    className={`z-20 ${mode === 'dark' ? 'bg-black text-white' : "text-black"}`}
                    initial='hidden'
                    animate='visible'
                    exit="hidden"
                    variants={containerVarients}
                    onClick={toggleMenu}
                >
                    <ul className="text-3xl space-y-6">
                        {LINKS.map((link, i) => (
                            <motion.li key={i} variants={linkVarients} >
                                <a
                                    href={`#${link.href}`}
                                    onClick={(e) => scrollToSection(e,link.href)}
                                    className={`text-4xl tracking-wide font-semibold uppercase ${mode === 'dark' ? 'hover:text-lime-300' : 'hover:text-orange-700'} lg:text-8xl`}
                                >
                                    {link.name}
                                </a>
                            </motion.li>
                        ))}
                    </ul>

                </motion.div>
            </div>
        </AnimatePresence>
    )
}
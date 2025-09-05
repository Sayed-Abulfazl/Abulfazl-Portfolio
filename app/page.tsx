"use client"

import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Works from "./components/Works";
import Techs from "./components/Techs";

import useTheme from './context/useTheme'
import { BsArrowUpCircle } from "react-icons/bs";

export default function Home() {
  const { mode, scrollToSection } = useTheme();
  return (
    <div
      className={`font-light ${mode === 'dark' ? 'text-white bg-black' : 'text-black bg-white'}  selection:text-black selection:bg-lime-300`}
    >
      <Navbar />
      <Hero />
      <Techs />
      <About />
      <Projects />
      <Works />
      <Contact />

      <div className="w-full FCC">
        <a
          href=""
          className={`fixed animate-bounce z-80 lg:text-5xl bottom-3 text-3xl  ${mode === 'dark' ? 'text-white' : "text-black"}`}
          onClick={(e) => scrollToSection(e, 'home')}
        >
          <BsArrowUpCircle
          />
        </a>
      </div>
    </div>
  )
}
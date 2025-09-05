"use client"

import { useEffect, useState } from "react";
import { myProjects } from "../constants";
import useTheme from "../context/useTheme";
import SwiperSlide from "./SwiperSlider";

export default function Projects() {

    const { mode } = useTheme();
    const categories = ['All', 'Frontend', 'Backend'];

    const [activeCategory, setActiveCategory] = useState(localStorage.getItem('cat') || categories[0]);

    useEffect(() => {
        localStorage.setItem('cat', activeCategory)
    }, [activeCategory])

    const filterProjects = myProjects.filter((project) => {
        let outputProjects;
        if (activeCategory === 'All') {
            outputProjects = project.kind;
        } else {
            outputProjects = activeCategory === project.kind;
        }
        return outputProjects;
    })

    return (
        <section className="p-8" id="projects">
            <h2 className="my-10 lg:mb-26 font-semibold text-center text-3xl lg:text-8xl">My <span className={`${mode === 'dark' ? "datx" : "litx"}`}>Projects</span> </h2>
            <div className="FCC gap-3 my-5 lg:my-10">
                {categories.map((cat, i) => (
                    <span
                        key={i}
                        className={`cursor-pointer TD500 FCC lg:w-[170px] w-[100px] lg:text-2xl font-semibold ${cat === activeCategory ? 'bg-green-400 text-black' : mode === 'dark' ? 'bg-slate-500' : "bg-slate-200"} rounded-full py-2`}
                        onClick={() => setActiveCategory(cat)}
                    > {cat} </span>
                ))}
            </div>
            <div className="columns-1 gap-4 md:columns-2 lg:columns-3">
                {filterProjects.map((project, i) => (
                    <div key={i}>
                        <div className="block border m-2 p-2 rounded-xl">
                            <div className="relative mb-4 overflow-hidden rounded-lg shadow-lg">
                                <SwiperSlide srcs={project.srcs} />
                                <a href={project.link} target="_blank" rel="noopener noreferrer">
                                    <div className=" lg:m-8 lg:p-8 p-1 py-2 my-3 text-justify">
                                        <h3 className={`text-xl lg:text-3xl pb-4 font-semibold ${mode === 'dark' ? "datx" : "litx"}`}> {project.title} </h3>
                                        <p className="text-lg"> {project.discription} </p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
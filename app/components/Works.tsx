import { experiences } from "../constants";
import useTheme from "../context/useTheme";

export default function Works(){
    const { mode } = useTheme();
    return (
        <section id="experience">
            <h2 className="my-10 lg:mb-26 font-semibold text-center text-3xl lg:text-8xl">Work <span className={`${mode === 'dark' ? "datx" : "litx"}`}>Experience</span> </h2>
            <div className="mx-auto max-w-6xl">
                {experiences.map((exper, i) => (
                    <div key={i} className="mx-4 mb-20">
                        <h2 className="font-medium lg:text-2xl">
                            {exper.company}
                        </h2>
                        <div className="flex justify-between">
                            <p className="py-4 tracking-wide lg:text-xl">
                                {exper.role}
                            </p>
                            <p className="py-4 lg:text-xl">
                                {exper.year}
                            </p>
                        </div>
                        <p className="font-sans text-gray-400">
                            {exper.discription}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    )
}
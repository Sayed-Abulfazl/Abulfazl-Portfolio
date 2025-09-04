import { LuImport } from 'react-icons/lu';
import useTheme from '../context/useTheme';


export default function About() {
    const { mode, scrollToSection } = useTheme();
    return (
        <section id="about" className="FCC flex-col gap-4">
            <h2 className="my-10 font-semibold text-center text-3xl lg:text-8xl">About <span className={`${mode === 'dark' ? "datx" : "litx"}`}>Me</span> </h2>
            <div className="FCC flex-col text-center gap-3 m-8 text-3xl lg:text-6xl">
                <p>Full Stack Web Developer</p>
                <p>with one experience in web development</p>
                <p>I specialize in creating responsive and performent web</p>
            </div>

            <div className="mt-8">
                <a
                    href="/abulfazlCV.png"
                    target="_blank"
                    rel="noopener noreferrer"
                    download
                    className={`flex lg:text-xl items-center rounded-xl p-2 px-3 font-sans font-medium ${mode === 'dark' ? "bg-lime-300 text-black hover:bg-lime-400" : "bg-orange-700 text-white hover:bg-orange-800"}`}
                >
                    <span>Resume.pdf</span>
                    <LuImport className='ml-2 animate-bounce' />
                </a>
            </div>
            <div className='mt-7'>
                <a 
                    href="#contact"
                    onClick={(e) => scrollToSection(e,'contact')}
                    className={`text-2xl ${mode === 'dark' ? "hover:text-lime-400" : "hover:text-orange-700"}`}
                >
                    Get in touch
                </a>
            </div>
        </section>
    )
}
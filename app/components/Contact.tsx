import { CONTACT, social_media_links } from "../constants";
import useTheme from "../context/useTheme";


export default function Contact(){
    const { mode } = useTheme();
    return (
        <section id="contact">
            <div className="mx-auto max-w-6xl FCC flex-col">
                <p className={`my-10 text-center text-3xl lg:text-8xl ${mode === 'dark' ? "datx" : "litx"}`}>
                    Intersted In Working Together?
                </p>
                <p className="p-4 text-center text-xl">
                    {CONTACT.text}
                </p>
                <a href={`mailto:${CONTACT.email}`} className={`my-4 text-center text-2xl font-medium ${mode === 'dark' ? "datx" : "litx"} lg:pt-6 lg:text-5xl`}>
                    {CONTACT.email}
                </a>
                <a href="tel:0093767512187" className={`my-4 text-center text-2xl font-medium ${mode === 'dark' ? "datx" : "litx"} lg:pt-6 lg:text-5xl`}>
                    {CONTACT.phone}
                </a>
            </div>
            <div className="mt-20 flex items-center justify-center gap-8">
                {social_media_links.map((link, i) => (
                    <a key={i} href={link.href} target="_blank" rel="noopener noreferrer">
                        {link.icon}
                    </a>
                ))}
            </div>
            <p className="my-8 text-center text-gray-400">
               &copy; compileTab All rights reserved
            </p>
        </section>
    )
}
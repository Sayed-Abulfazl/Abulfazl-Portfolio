import { FaWhatsapp , FaTelegram, FaLinkedin, FaEnvelope } from "react-icons/fa"

const LINKS = [
    {
        href: 'about',
        name: "About me"
    },
    {
        href: 'projects',
        name: "Projects"
    },
    {
        href: 'experiences',
        name: "Experiences"
    },
    {
        href: 'contact',
        name: "Contact me"
    },
]

const TICKS = " HTML CSS JavaScript TypeScript React.js Next.js Bootstrap TailwindCSS Git Node.js Express MongoDB "

const myProjects = [
    {
        title : "Weather APP",
        discription : "By this you can see weather of your city but big cities",
        srcs : [
            '/My Project Images/WeatherApp-1.png',
            '/My Project Images/WeatherApp-2.png',
            '/My Project Images/WeatherApp-3.png',
        ] ,
        link : 'https://weather-app-two-iota-17.vercel.app/',
        kind : 'Frontend'
    },
    {
        title : "Basic Calculator",
        discription : "This program can solve addition, Subtraction, Multiplication and Dividion questions at a time",
        srcs :  [
            '/My Project Images/Basic-Calculator-1.png',
            '/My Project Images/Basic-Calculator-2.png',
            '/My Project Images/Basic-Calculator-3.png',
        ],
        link : 'https://basic-calculator-next-theta.vercel.app/',
        kind : 'Frontend'
    },
    {
        title : "Shopping Cart",
        discription : "You can see some products and buy your favorite thing",
        srcs : [
            '/My Project Images/Shopping-Cart-1.png',
            '/My Project Images/Shopping-Cart-2.png',
            '/My Project Images/Shopping-Cart-3.png',
        ],
        link : 'https://shopping-cart-ecru-theta.vercel.app/',
        kind : 'Frontend'
    }
]

const experiences = [
    {
        company : 'Vaccine Polio',
        role : 'Super wiser & Vaccinator',
        year : "2021 - 2025",
        discription : 'I can train the group of vaccine, monitoring from groups, checking from works and areas and provide and distributing materails.'
    },
    {
        company : 'Aba Saleh Private School',
        role : 'Teacher',
        year : '2023 - 2024',
        discription : 'Can teaching different classes, providing reports, managing tasks and present on time. '
    },
    {
        company : 'SelfWorking',
        role : 'Developer',
        year : '2024 - Now',
        discription : 'I create projects in front and back with full beautiful designing.'
    }
]


const social_media_links = [
    {
        href : 'https://wa.me/00767512187',
        icon : <FaWhatsapp />
    },
    {
        href : 'https://t.me/ABULFAZL',
        icon : <FaTelegram />
    },
    {
        href : 'https://linkedin.com/in/Sayed%20Abulfazl%20Hussaini',
        icon : <FaLinkedin />
    },
    {
        href : 'mailto:sah.sayedabulfazl@gmail.com',
        icon : <FaEnvelope />
    }
]

const CONTACT = {
    text: 'I can perform projects that their requirements is modern technologies such as: Next.JS, TailwindCSS, TypeScript, Node.JS and MongoDB. also can do tasks in groups and present on TIME. I very love developing and it is my loving. if you want meet a full motivation developer contact with me!',
    phone : '+93767512187',
    email : 'sah.sayedabulfazl@gmail.com'
}


export {
    LINKS,
    TICKS,
    myProjects,
    experiences,
    social_media_links,
    CONTACT,
}
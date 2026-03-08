import { FaWhatsapp, FaTelegram, FaLinkedin, FaEnvelope } from "react-icons/fa"

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

const TICKS = " HTML CSS JavaScript TypeScript React.js Next.js Bootstrap TailwindCSS Git Node.js Express MongoDB React-Native  EXPO  Appwrite"

const myProjects = [
    {
        title: "Weather APP",
        discription: "By this you can see weather of your city but big cities",
        srcs: [
            '/My Project Images/WeatherApp-1.webp',
            '/My Project Images/WeatherApp-2.webp',
            '/My Project Images/WeatherApp-3.webp',
        ],
        link: 'https://weather-app-two-iota-17.vercel.app/',
        kind: 'Frontend',
        by: 'Next.js'
    },
    {
        title: "Basic Calculator",
        discription: "This program can solve addition, Subtraction, Multiplication and Dividion questions at a time",
        srcs: [
            '/My Project Images/Basic-Calculator-1.png',
            '/My Project Images/Basic-Calculator-2.png',
            '/My Project Images/Basic-Calculator-3.png',
        ],
        link: 'https://basic-calculator-next-theta.vercel.app/',
        kind: 'Frontend',
        by: 'Next.js'
    },
    {
        title: "Shopping Cart",
        discription: "You can see some products and buy your favorite thing",
        srcs: [
            '/My Project Images/Shopping-Cart-1.png',
            '/My Project Images/Shopping-Cart-2.png',
            '/My Project Images/Shopping-Cart-3.png',
        ],
        link: 'https://shopping-cart-ecru-theta.vercel.app/',
        kind: 'Frontend',
        by: 'Next.js'
    },
    {
        title: "OpenNote Version 1",
        discription: "You can see notes of people and add any one",
        srcs: [
            '/My Project Images/openNote-1.webp',
            '/My Project Images/openNote-2.webp',
            '/My Project Images/openNote-3.webp',
        ],
        link: 'https://open-note-2025.vercel.app/',
        kind: 'Backend',
        by: 'Next.js'
    },
    {
        title: "Travel App",
        discription: "It is a simple app for showing ability",
        srcs: [
            '/My Project Images/travel-app.webp',
        ],
        link: 'https://travel-app-2025.vercel.app/',
        kind: 'Frontend',
        by: 'Next.js'
    },
    {
        title: "Basic Library",
        discription: "This can store data and search any and hide all of them",
        srcs: [
            '/My Project Images/library.webp',
        ],
        link: 'https://library-aba-saleh.vercel.app/',
        kind: 'Frontend',
        by: 'JavaScript'
    },
    {
        title: "Simple Shoping",
        discription: "By this you can add day with its income, search by date or money, total of money and days and look average of income",
        srcs: [
            '/My Project Images/shop.webp',
        ],
        link: 'https://my-shop-js2025.vercel.app/',
        kind: 'Frontend',
        by: 'JavaScript'
    },
    {
        title: "Alarm Clock",
        discription: "You can see date and time to different kind and set alarm or remove it",
        srcs: [
            '/My Project Images/alarm-clock.webp',
        ],
        link: 'https://alarm-clock-js2025.vercel.app/',
        kind: 'Frontend',
        by: 'JavaScript'
    },
    {
        title: "SimpleCalc",
        discription: "You can calcuate some complex calculations",
        srcs: [
            '/My Project Images/SimpleCalc-1.webp',
            '/My Project Images/SimpleCalc-2.webp',
            '/My Project Images/SimpleCalc-3.webp'
        ],
        link: 'https://expo.dev/artifacts/eas/eKsfTFh4f6vvxRgKs82pzN.apk',
        kind: 'Apps',
        by: 'EXPO'
    },
    {
        title: "Abjad App",
        discription: "You can calculate every word to abjad numbers and save your works and read information about Abjad numbers",
        srcs: [
            '/My Project Images/AbjadApp-1.webp',
            '/My Project Images/AbjadApp-2.webp',
            '/My Project Images/AbjadApp-3.webp'
        ],
        link: 'https://expo.dev/artifacts/eas/4aP9XwWryqjuX5jhH2UHgS.apk',
        kind: 'Apps',
        by: 'EXPO'
    },
    {
        title: "InnerCalm",
        discription: "This is an applicably app for arriving to calmly state and useful for growing self-reliance",
        srcs: [
            '/My Project Images/InnerCalm-1.webp',
            '/My Project Images/InnerCalm-2.webp',
            '/My Project Images/InnerCalm-3.webp'
        ],
        link: 'https://expo.dev/artifacts/eas/r7BMEMQZ5fT9vfGVnBVKq6.apk',
        kind: 'Apps',
        by: 'EXPO'
    },
]

const experiences = [
    {
        company: 'Vaccine Polio',
        role: 'Super wiser & Vaccinator',
        year: "2021 - 2025",
        discription: 'I can train the group of vaccine, monitoring from groups, checking from works and areas and provide and distributing materails.'
    },
    {
        company: 'Aba Saleh Private School',
        role: 'Teacher',
        year: '2023 - 2024',
        discription: 'Can teaching different classes, providing reports, managing tasks and present on time. '
    },
    {
        company: 'SelfWorking',
        role: 'Developer',
        year: '2024 - Now',
        discription: 'I create projects in front and back with full beautiful designing.'
    }
]


const social_media_links = [
    {
        href: 'https://wa.me/00796708944',
        icon: <FaWhatsapp />
    },
    {
        href: 'https://t.me/ABULFAZL',
        icon: <FaTelegram />
    },
    {
        href: 'https://linkedin.com/in/Sayed%20Abulfazl%20Hussaini',
        icon: <FaLinkedin />
    },
    {
        href: 'mailto:sah.sayedabulfazl@gmail.com',
        icon: <FaEnvelope />
    }
]

const CONTACT = {
    text: 'I can perform projects that their requirements is modern technologies such as: Next.JS, TailwindCSS, TypeScript, Node.JS and MongoDB, Expo & Appwrite. also can do tasks in groups and present on TIME. I very love developing and it is my loving. if you want meet a full motivation developer contact with me!',
    phone: '+93796708944',
    email: 'sah.sayedabulfazl@gmail.com'
}


export {
    LINKS,
    TICKS,
    myProjects,
    experiences,
    social_media_links,
    CONTACT,
}
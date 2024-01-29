import { Battleships, Snake, Chef, Rainbow, Stocks, GPT, Social,
    Construction, Spotify, Booking  } from "../assets/images";
import {
    contact,
    css,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    react,
    redux,
    sass,
    tailwindcss,
    typescript,
    ga,
    law,
    eco,
    finance
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "Software Engineering Immersive Student",
        company_name: "General Assembly",
        icon: ga,
        iconBg: "#accbe1",
        date: "Sep 2023 - Dec 2023",
        points: [
            "Participated in General Assembly's 3-month Software Engineering Immersive, delving into JavaScript, Vue.js, Python, Django, React, and Next.js.",
            "Collaborated on diverse projects, integrating front-end and back-end technologies with real-world applications.",
            "Utilized GitHub for version control and team collaboration, contributing to a shared codebase in a professional environment.",
            "Enhanced development skills through peer programming and engaging in rigorous code review processes.",
        ],
    },
    {
        title: "Enviromental Board Researcher",
        company_name: "Bristol Innovators Group ",
        icon: eco,
        iconBg: "#fbc3bc",
        date: "Jun, 2022 - Sep 2022",
        points: [
            "Served as a Research Intern for the Bristol Council Environmental Board, focusing on environmental innovation and sustainability initiatives.",
            "Assisted in data analysis and policy research to aid the council in making informed decisions on environmental matters.",
            "Utilized GitHub for version control and team collaboration, contributing to a shared codebase in a professional environment.",
            "Collaborated with a team of experts to draft reports and present findings on current environmental trends and solutions.",
        ],
    },
    {
        title: "Finance Intern",
        company_name: "LGBR Capitaly",
        icon: finance,
        iconBg: "#b7e4c7",
        date: "Dec 2020 - Feb 2021",
        points: [
            "Interned at LGBR Capital, where I shadowed the director to acclimate to a professional financial environment.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Analyzed financial datasets, prepared reports, and developed models to underpin strategic decision-making processes.",
            "Gained insight into the financial industry's practices, contributing to research and presentations for internal strategy sessions.",
        ],
    },
    {
        title: "Legal Intern",
        company_name: "No 5 Chambers",
        icon: law,
        iconBg: "#a2d2ff",
        date: "Jan 2023 - Present",
        points: [
            "Interned at Number 5 Chambers, shadowing lawyers and judges, conducting legal research to support case preparation.",
            "Acquired in-depth knowledge of the legal system, court procedures, and case law analysis.",
            "Assisted in drafting legal documents and summarizing case files for review by senior chamber members.",
            "Observed courtroom proceedings, gaining practical insights into litigation and legal advocacy.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'CV and Contact Details',
        iconUrl: contact,
        link: 'https://career.io/r/ZWrVVweBj',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/RamsayV/Portfolio_Project',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/ramsay-veitch-82863a1bb/',
    }
];

export const projects = [
    {
        iconUrl: Battleships,
        theme: 'btn-back-red',
        name: 'Battle Ships BrowserGame',
        description: 'Developed an interactive web application that simulates battleship gameplay, entirely built using Vanilla JavaScript, HTML, and CSS. This project features a dynamic, grid-based interface where players can strategically place their fleet of battleships and engage in turn-based combat against the computer.',
        link: 'https://ramsayv.github.io/BattleShips-Browser-Game/',
    },
    {
        iconUrl: Social,
        theme: 'btn-back-yellow',
        name: 'ChatterPulse',
        description: 'A dynamic social media platform built with MongoDB, React, and Node.js, featuring real-time interaction, full CRUD capabilities, and robust authentication. Showcases expertise in full-stack development and responsive design, offering users a seamless, engaging experience. ',
        link: 'https://chatterpulse.up.railway.app/',
    },
    {
        iconUrl: Spotify,
        theme: 'btn-back-gray',
        name: 'Not-ify',
        description: 'Not-ify is as a Spotify clone, built using the Shazam API. This project features self-developed REST APIs for efficient data management. It offers location-sensitive music recommendations and a comprehensive search function, tailored to user preferences and locations. The site exemplifies advanced web development skills, API integration, and a user-focused approach.',
        link: 'https://not-ify-clone.netlify.app/',
    },
    {
        iconUrl: Construction,
        theme: 'btn-back-blue',
        name: 'SpaceInvaderz',
        description: 'A sleek and responsive website designed for a leading construction company, developed using Tailwind CSS and React. This site features an intuitive layout, showcasing company projects, services, and expertise.',
        link: 'https://spaceinvaderzzz.netlify.app/',
    },
    {
        iconUrl: Booking,
        theme: 'btn-back-gray',
        name: 'Booking.com Clone',
        description: 'In my Booking.com clone project, I successfully replicated the hero page of Booking.com, the first step towards building a comprehensive full-stack MERN booking website. This project involved scraping data from Booking.com to create a functional and efficient search system. It demonstrates my skills in web scraping, data handling, and website development.',
        link: 'https://booking-clone-nxt-1gjgc5jzw-ramsay-veitchs-projects.vercel.app/',
    },
    {
        iconUrl: GPT,
        theme: 'btn-back-purple',
        name: 'Chat-Gpt Clone',
        description: 'Created a ChatGPT clone using React and OpenAI, providing a platform for AI-powered conversations. This web app allows users to interact with an AI in a threaded format, showcasing React\'s interactivity and OpenAI\'s advanced language capabilities. It offers a simple, engaging user experience, highlighting my skills in integrating AI with web technologies.',
        link: 'https://chatgpt-clone-project.netlify.app/',
    },
    {
        iconUrl: Chef,
        theme: 'btn-back-blue',
        name: 'Recipe Realm',
        description: 'Built a recipe website where users can create, share, and find recipes. The site includes an API feature for searching recipes by ingredients and nutritional information, catering to various dietary needs and preferences.',
        link: 'https://recipe-realm-2023.netlify.app',
    },
    {
        iconUrl: Rainbow,
        theme: 'btn-back-pink',
        name: 'Safe Haven',
        description: 'I am collaborating with a team to develop an LGBTQ+ focused app that rates venues for their inclusivity and safety. This app allows users to mark locations on a map with their experiences and memories, creating a community-driven guide to LGBTQ+-friendly spaces. Additionally, the app features a search function for LGBTQ+ news and locating gender-neutral restrooms, enhancing its utility for the community.',
        link: 'https://dev--safehaven-ga.netlify.app/map',
    },
    {
        iconUrl: Stocks,
        theme: 'btn-back-black',
        name: 'TakeStock',
        description: 'Developed a stock market simulation website using Django, Django REST framework, React, and PostgreSQL. This platform enables users to engage in paper trading, offering real-world finance experience without financial risk. It leverages live market data to track users\' simulated trades, providing a realistic and educational environment for learning and practicing stock market strategies.',
        link: 'https://ramsayv-fe-stock-market-proj4-production.up.railway.app/',
    },
    {
        iconUrl: Snake,
        theme: 'btn-back-yellow',
        name: 'Snakes Browser Game',
        description: 'Built a Snake game web application using Vanilla JavaScript, HTML, and CSS. It features a grid where players navigate a snake to collect items and avoid obstacles, offering a simple yet engaging gaming experience.',
        link: 'https://ramsayv.github.io/Snakes-Browser-Game/',
    }
];


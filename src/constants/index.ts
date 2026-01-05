export const links = {
    contactEmail: "hermannrichy15@gmail.com",
    sourceCode: "https://github.com/sanidhyy/threejs-portfolio",
};

export const navLinks = [
    {
        id: 1,
        name: "Home",
        href: "#",
    },
    {
        id: 2,
        name: "About",
        href: "#about",
    },
    {
        id: 3,
        name: "Work",
        href: "#work",
    },
    {
        id: 4,
        name: "Contact",
        href: "#contact",
    },
] as const;

export const clientReviews = [
    {
        id: 1,
        name: "M. Yoan Melson Dansou",
        position: "CEO of FuturCraft Institute",
        img: "/assets/review1.png",
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
        id: 2,
        name: "Enock DEKENOU",
        position: "DG du Cabinet Well Steven",
        img: "/assets/review2.png",
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
        id: 3,
        name: "Igor Adande",
        position: "Analyste programmeur",
        img: "/assets/review3.png",
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
        id: 4,
        name: "Serge HOUNDODE",
        position: "DG Cefora Formation",
        img: "/assets/review4.png",
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
] as const;

export const myProjects = [
    {
        title: "Benin Events – Plateforme de gestion d’événements",
        desc: "Benin Events est une plateforme digitale moderne dédiée à la promotion, la découverte et la gestion des événements au Bénin. Elle permet aux organisateurs de publier leurs événements et aux utilisateurs de trouver facilement concerts, conférences, festivals culturels et rencontres professionnelles en un seul endroit.",
        subdesc:
            "Conçue comme une plateforme évolutive orientée événements avec Next.js 14, Tailwind CSS, TypeScript, Framer Motion et Convex, Benin Events offre une expérience rapide, intuitive et immersive aussi bien pour les organisateurs que pour les participants.",
        href: "https://benin-events-project.vercel.app/",
        texture: "/textures/project/project1.mp4",
        logo: "/assets/project-logo1.png",
        logoStyle: {
            backgroundColor: "#2A1816",
            border: "0.2px solid #36201D",
            boxShadow: "0px 0px 60px 0px #AA3C304D",
        },
        spotlight: "/assets/spotlight1.png",
        tags: [
            {
                id: 1,
                name: "React.js",
                path: "/assets/react.svg",
            },
            {
                id: 2,
                name: "TailwindCSS",
                path: "/assets/tailwindcss.png",
            },
            {
                id: 3,
                name: "TypeScript",
                path: "/assets/typescript.png",
            },
            {
                id: 4,
                name: "Framer Motion",
                path: "/assets/framer.png",
            },
        ],
    },
    {
        title: "Well Steven – Site vitrine pour cabinet d’avocat",
        desc: "Well Steven est un site vitrine professionnel conçu pour un cabinet d’avocat, mettant en avant son expertise, ses domaines d’intervention et son image de marque. Le site offre une présentation claire, crédible et moderne afin d’instaurer la confiance avec les clients et partenaires.",
        subdesc:
            "Développé en 2025 avec Next.js, ce projet met l’accent sur la performance, le référencement et une expérience utilisateur soignée, tout en respectant les standards du web moderne et les exigences de communication d’un cabinet juridique.",
        href: "https://wellsteven.com",
        texture: "/textures/project/project2.mp4",
        logo: "/assets/project-logo2.png",
        logoStyle: {
            backgroundColor: "#13202F",
            border: "0.2px solid #17293E",
            boxShadow: "0px 0px 60px 0px #2F6DB54D",
        },
        spotlight: "/assets/spotlight2.png",
        tags: [
            {
                id: 1,
                name: "React.js",
                path: "/assets/react.svg",
            },
            {
                id: 2,
                name: "TailwindCSS",
                path: "/assets/tailwindcss.png",
            },
            {
                id: 3,
                name: "TypeScript",
                path: "/assets/typescript.png",
            },
            {
                id: 4,
                name: "Framer Motion",
                path: "/assets/framer.png",
            },
        ],
    },
    {
        title: "Station App Maintener – Gestion des interventions techniques",
        desc: "Station App Maintener est une application web PWA dédiée à la gestion et au suivi des interventions des techniciens sur les mini-stations au Bénin. Elle permet de planifier, tracer et documenter les opérations de maintenance en temps réel, tout en améliorant la réactivité et l’efficacité des équipes terrain.",
        subdesc:
            "Conçue comme une application web progressive avec un tableau de bord administrateur complet, Station App Maintener offre une vision centralisée des interventions, des techniciens et des performances opérationnelles, avec un fort accent sur la mobilité, la fiabilité et la performance.",
        href: "https://station-app-maintener.vercel.app",
        texture: "/textures/project/project4.mp4",
        logo: "/assets/project-logo4.png",
        logoStyle: {
            backgroundColor: "#0E1F38",
            border: "0.2px solid #0E2D58",
            boxShadow: "0px 0px 60px 0px #2F67B64D",
        },
        spotlight: "/assets/spotlight4.png",
        tags: [
            {
                id: 1,
                name: "React.js",
                path: "/assets/react.svg",
            },
            {
                id: 2,
                name: "TailwindCSS",
                path: "/assets/tailwindcss.png",
            },
            {
                id: 3,
                name: "TypeScript",
                path: "/assets/typescript.png",
            },
            {
                id: 4,
                name: "Framer Motion",
                path: "/assets/framer.png",
            },
        ],
    },

    {
        title: "TIBUCE-AFRICA – Tournoi international de Business Game",
        desc: "TIBUCE-AFRICA est un tournoi international de business game visant à révéler et valoriser les talents entrepreneuriaux à travers des compétitions stratégiques. Le site vitrine du projet permet de présenter le concept, les objectifs et les différentes éditions du tournoi, tout en facilitant les inscriptions en ligne des participants.",
        subdesc:
            "Le projet inclut également un tableau de bord administrateur sécurisé avec système d’authentification, permettant de visualiser, gérer et suivre efficacement les inscriptions effectuées sur le site, offrant ainsi une gestion centralisée et professionnelle de l’événement.",
        href: "https://tibuceafrica.com",
        texture: "/textures/project/project5.mp4",
        logo: "/assets/project-logo5.png",
        logoStyle: {
            backgroundColor: "#1C1A43",
            border: "0.2px solid #252262",
            boxShadow: "0px 0px 60px 0px #635BFF4D",
        },
        spotlight: "/assets/spotlight5.png",
        tags: [
            {
                id: 1,
                name: "React.js",
                path: "/assets/react.svg",
            },
            {
                id: 2,
                name: "TailwindCSS",
                path: "/assets/tailwindcss.png",
            },
            {
                id: 3,
                name: "TypeScript",
                path: "/assets/typescript.png",
            },
            {
                id: 4,
                name: "Framer Motion",
                path: "/assets/framer.png",
            },
        ],
    },
] as const;

export const workExperiences = [
    {
        id: 1,
        name: "Digital Innovation",
        pos: "Lead Web Developer & CEO",
        duration: "2022 - Présent",
        title: "Fondateur et Lead Developer de Digital Innovation, une agence web et digitale. J’ai piloté et développé la majorité des projets de l’agence, allant des sites vitrines aux applications web complexes, en assurant la direction technique, la gestion de projets et la relation client.",
        icon: "/assets/di-logo.svg",
        animation: "victory",
    },
    {
        id: 2,
        name: "Cefora Formation & FuturCraft Institut",
        pos: "Formateur Web & Développement",
        duration: "2022 - Présent",
        title: "Formateur en développement web et technologies modernes. J’accompagne les apprenants dans la maîtrise des bases et des concepts avancés du web, en combinant théorie, pratique et projets réels pour une montée en compétences efficace.",
        icon: "/assets/di-logo.svg",
        animation: "clapping",
    },
    {
        id: 3,
        name: "Cashless",
        pos: "Web Developer – Mission",
        duration: "Novembre 2024 - Présent",
        title: "Mission de développement d’applications web pour la gestion des mini-stations. J’ai conçu et développé Station App Maintener et Station App Dashboard, incluant la gestion des interventions techniques, les tableaux de bord administrateurs et les fonctionnalités PWA.",
        icon: "/assets/di-logo.svg",
        animation: "salute",
    },
] as const;

export const socialLinks = [
    {
        name: "GitHub",
        icon: "/assets/github.svg",
        url: "https://github.com/HermannRichy",
    },
    {
        name: "Facebook",
        icon: "/assets/facebook.svg",
        url: "https://facebook.com/hermann.hnv",
    },
    {
        name: "Twitter",
        icon: "/assets/twitter.svg",
        url: "https://twitter.com",
    },
] as const;

interface ProjectImage {
    src: string;
    alt: string;
}

export interface Project {
    id: number;
    slug: string;
    title: string;
    titleHover: string;
    shortDescription: string;
    longDescription: string;
    background: string;
    job: string;
    tools: string;
    other: string;
    logo: string;
    link: string | false;
    github: string | false;
    isMediaDesktop: boolean;
    images: ProjectImage[];
}

export const myProjects: Project[] = [
    {
        id: 1,
        slug: "netflux-comedy",
        title: "Netflux comedy",
        titleHover: "Projet personnel",
        shortDescription:
            "Application React proposant une large gamme de vidéos de stand-up",
        longDescription:
            "Netlux-comedy s'inspire des interface de Netflix et Youtube, et propose un large choix de vidéos de stand-up",
        job: "Maquettage • Intégration • front-end • back-end",
        tools: "React • Typescript • React-query • Symfony • Sass",
        other: "Tâches cron | Listener | Webhook | Bucket AWS",
        logo: require("@/public/images/projects/netflix/logoNetflix.png"),
        link: "https://netflix-comedy.vercel.app",
        github: "https://github.com/Jordan-Philippot/Netflix-comedy",
        isMediaDesktop: true,
        background: "/images/projects/netflux/modalhomepage.png",
        images: [
            {
                src: require("@/public/images/projects/netflux/modalhomepage.png"),
                alt: "Modal video d'accueil",
            },
            {
                src: require("@/public/images/projects/netflux/carousel.png"),
                alt: "Carousel",
            },
            {
                src: require("@/public/images/projects/netflux/channel.png"),
                alt: "Page d'une chaine",
            },
            {
                src: require("@/public/images/projects/netflux/search.png"),
                alt: "Recherche sur page d'accueil",
            },
            {
                src: require("@/public/images/projects/netflux/subscription.png"),
                alt: "Page de souscription",
            },
            {
                src: require("@/public/images/projects/netflux/login.png"),
                alt: "Page de connexion",
            },
        ],
    },
    {
        id: 2,
        slug: "aliz",
        title: "aliz",
        titleHover: "MarketPlace",
        shortDescription:
            "Start-up spécialisé dans l'automatisation de tâches pour TPE/PME et travailleurs indépendants",
        longDescription:
            "Aliz est une start-up fondée en 2020, spécialisé dans l'automatisation de tâches pour TPE/PME et travailleurs indépendants. " +
            "(gestion administrative de patientèle, prise de rendez-vous, déclaration de TVA...)",
        job: "Intégration | front-end | back-end | maintenance",
        tools: "React • Symfony • Stripe • Gsap • Sass",
        other:
            "Tâches cron • Listener • Webhook • Connexion Gmail & Outlook • Google Analitycs • OVH • FileZilla",
        logo: require("@/public/images/projects/aliz/logoAliz.png"),
        link: "https://aliz.io",
        github: false,
        isMediaDesktop: true,
        background: "/images/projects/aliz/aliz.png",
        images: [
            {
                src: require("@/public/images/projects/aliz/aliz.png"),
                alt: "Accueil du site aliz.io",
            },
            {
                src: require("@/public/images/projects/aliz/loginAliz.png"),
                alt: "Page de connexion du site aliz.io",
            },
            {
                src: require("@/public/images/projects/aliz/pricesAliz.png"),
                alt: "Tarifs du site aliz.io",
            },
            {
                src: require("@/public/images/projects/aliz/profileAliz.png"),
                alt: "Page profil du site aliz.io",
            },
            {
                src: require("@/public/images/projects/aliz/subscriptionAliz.png"),
                alt: "Souscription aliz.io",
            },
            {
                src: require("@/public/images/projects/aliz/statisticsAliz.png"),
                alt: "Statistiques AlizPatientèle",
            },
        ],
    },
    {
        id: 3,
        slug: "aliz-calendar",
        title: "alizCalendar",
        titleHover: "Produit Aliz",
        shortDescription: "Outils de gestion et prise de rendez-vous en ligne",
        longDescription:
            "AlizCalendar est un produit Aliz permettant de gérer la prise de rendez-vous en ligne de manière personnalisé. " +
            "Les utilisateurs peuvent proposer des sondage en équipe, des webinars ou encore des rendez-vous récurrents",
        job: "Maquettage • Intégration • front-end • back-end ",
        tools: "Symfony • Twig • Figma",
        other: "Tâches cron | Listener | Webhook ",
        logo: require("@/public/images/projects/aliz/logoAliz.png"),
        link: "https://calendar.aliz.io",
        github: false,
        isMediaDesktop: true,
        background: "/images/projects/alizCalendar/meetingAlizCalendar.png",
        images: [
            {
                src: require("@/public/images/projects/alizCalendar/defaultHomeAlizCalendar.png"),
                alt: "Accueil du site https://calendar.aliz.io",
            },
            {
                src: require("@/public/images/projects/alizCalendar/homeAlizCalendar.png"),
                alt: "Accueil utilisateur du site https://calendar.aliz.io",
            },
            {
                src: require("@/public/images/projects/alizCalendar/meetingAlizCalendar.png"),
                alt: "Prise de rendez-vous sur un évènement AlizCalendar",
            },
            {
                src: require("@/public/images/projects/alizCalendar/rdvAlizCalendar.png"),
                alt: "Liste des évènements d'un utilisateur d'AlizCalendar",
            },
            {
                src: require("@/public/images/projects/alizCalendar/calendarAlizCalendar.png"),
                alt: "Page de connexion des agendas",
            },
            {
                src: require("@/public/images/projects/alizCalendar/integrationAlizCalendar.png"),
                alt: "Page explicative pour l'intégration du plug-in AlizCalendar",
            },
        ],
    },
    {
        id: 4,
        slug: "aliz-verif",
        title: "alizVerif",
        titleHover: "Produit Aliz",
        shortDescription:
            "Outils de recherche, vérification et nettoyage de données d'entreprises",
        longDescription:
            "AlizVerif est un outil de recherche, vérification et nettoyage de données d'entreprises. " +
            "En quelques clics, vos données peuvent être vérifiées, notées et/ou nettoyées en les comparant à plusieurs bases de données fiables (API SIREN, BODACC etc...)",
        job: "Maquettage • Intégration • front-end",
        tools: "React • Gsap • Figma",
        other: "Webhook • Axios",
        logo: require("@/public/images/projects/aliz/logoAliz.png"),
        link: "https://verif-data.aliz.io",
        github: false,
        isMediaDesktop: true,
        background: "/images/projects/alizVerif/alizVerif.png",

        images: [
            {
                src: require("@/public/images/projects/alizVerif/alizVerif.png"),
                alt: "Accueil du site https://verif.aliz.io",
            },
            {
                src: require("@/public/images/projects/alizVerif/multipleSearchAlizVerif.png"),
                alt: "Page de recherche multiple de données d'entreprises",
            },
            {
                src: require("@/public/images/projects/alizVerif/ourServicesAlizVerif.png"),
                alt: "Page des différents services d'AlizVerif",
            },
            {
                src: require("@/public/images/projects/alizVerif/pricesAlizVerif.png"),
                alt: "Page des tarifs d'AlizVerif",
            },
            {
                src: require("@/public/images/projects/alizVerif/verifDataAlizVerif.png"),
                alt: "Page de vérification et nettoyage des données légales d'entreprises",
            },
            {
                src: require("@/public/images/projects/alizVerif/resultsAlizVerif.png"),
                alt: "Page de vérification et nettoyage des données légales d'entreprises",
            },
        ],
    },
    {
        id: 5,
        slug: "studhelp",
        title: "studhelp",
        titleHover: "Projet de fin d'étude",
        shortDescription:
            "Application web permettant aux étudiants de rechercher les associations et évènements à proximité",
        longDescription:
            "Application web permettant aux étudiants de rechercher les associations et évènements à proximité. " +
            "Les utilisateurs peuvent également proposer leurs propre évènements et inviter les autres membres de la communauté. " +
            "Un salon à été mis en place pour facilié l'échange entre les utilisateurs. Données extraites d'une api .gouv.",
        job: "Maquettage • Intégration • front-end • back-end",
        tools: "React • Gsap • Figma • socket.io",
        other: "Google Maps • filtre de recherche avancés • api.gouv • Axios",
        logo: require("@/public/images/projects/studhelp/logoStudhelp.png"),
        link: "https://studhelp-front.herokuapp.com/",
        github: "https://github.com/Jordan-Philippot/studhelp_front",
        isMediaDesktop: true,
        background: "/images/projects/studhelp/studhelp.png",

        images: [
            {
                src: require("@/public/images/projects/studhelp/studhelp.png"),
                alt: "Accueil du site stud'help",
            },
            {
                src: require("@/public/images/projects/studhelp/howItWorksStudhelp.png"),
                alt: "Page comment ça marche Stud'help",
            },
            {
                src: require("@/public/images/projects/studhelp/registerStudhelp.png"),
                alt: "Page de création d'évènements Stud'help",
            },
            {
                src: require("@/public/images/projects/studhelp/eventDetailsStudhelp.png"),
                alt: "Page de détails d'un évènement Stud'help",
            },
            {
                src: require("@/public/images/projects/studhelp/associationsStudhelp.png"),
                alt: "Page de recherche d'associations à proximité",
            },
            {
                src: require("@/public/images/projects/studhelp/associationDetailsStudhelp.png"),
                alt: "Page de détails d'une association",
            },
        ],
    },
    {
        id: 6,
        slug: "my-netflix",
        title: "my netflix",
        titleHover: "Découverte de React Native",
        shortDescription:
            "Application mobile servant à la recherche de séries, connecté à l'API Betaseries",
        longDescription:
            "Application mobile pour la recherche de séries, connecté à l'API Betaseries. " +
            "Un filtre de recherche par catégorie, titre et acteur est disponible, avec fiche descriptive de la série séléctionné. Projet d'étude développé sur 4 jours ",
        job: "Maquettage • Intégration • front-end • back-end",
        tools: "React Native • Figma",
        other: "api betaseries • Axios",
        logo: require("@/public/images/projects/netflix/logoNetflix.png"),
        link: false,
        github: "https://github.com/Jordan-Philippot/react-native-netflix",
        isMediaDesktop: false,
        background: "/images/projects/netflix/homeNetflix.png",
        images: [
            {
                src: require("@/public/images/projects/netflix/homeNetflix.png"),
                alt: "Accueil du site https://verif.aliz.io",
            },
            {
                src: require("@/public/images/projects/netflix/detailsActorNetflix.png"),
                alt: "Page de recherche multiple de données d'entreprises",
            },
            {
                src: require("@/public/images/projects/netflix/detailsSearchNetflix.png"),
                alt: "Page des différents services d'AlizVerif",
            },
        ],
    },
    {
        id: 7,
        slug: "ted",
        title: "ted",
        titleHover: "Start up française pure player DataViz et RPA",
        shortDescription: "Site vitrine, en cours de développement",
        longDescription:
            "TED est une société de Consulting IT en Data Strategy spécialisée dans les projets de RPA (Robotic Process Automation), " +
            "ainsi que des projets de Data Visualisation (DataViz). Leurs clients, principalement issues du CAC40, les sollicites pour " +
            "automatiser des processus métiers et/ou automatiser la réalisation du reporting et générer des dashboards plus efficaces.",
        job: "Intégration • front-end",
        tools: "React • Gsap",
        other: "Nouveau site en cours de développement...",
        logo: require("@/public/images/projects/ted/logo.png"),
        link: false,
        github: false,
        isMediaDesktop: true,
        background: "/images/projects/ted/homeTed.png",

        images: [
            {
                src: require("@/public/images/projects/ted/homeTed.png"),
                alt: "Accueil du site TED consulting",
            },
            {
                src: require("@/public/images/projects/ted/projectsTed.png"),
                alt: "Page de recherche multiple de données d'entreprises",
            },
            {
                src: require("@/public/images/projects/ted/solutionsTed.png"),
                alt: "Page des différents services d'AlizVerif",
            },
            {
                src: require("@/public/images/projects/ted/partnersTed.png"),
                alt: "Page des tarifs d'AlizVerif",
            },
            {
                src: require("@/public/images/projects/ted/videoTed.png"),
                alt: "Page de vérification et nettoyage des données légales d'entreprises",
            },
            {
                src: require("@/public/images/projects/ted/projectsSliderTed.png"),
                alt: "Page de vérification et nettoyage des données légales d'entreprises",
            },
        ],
    },
];

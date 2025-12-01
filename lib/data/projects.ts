interface ProjectImage {
    src: string;
    alt: string;
}

export interface ProjectType {
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

export const myProjects: ProjectType[] = [
    {
        id: 1,
        slug: "netflux-comedy",
        title: "Netflux comedy",
        titleHover: "Projet personnel",
        shortDescription:
            "Application React proposant une large gamme de vidéos de stand-up",
        longDescription:
            "Netlux-comedy s'inspire des interface de Netflix et Youtube, et propose un large choix de vidéos de stand-up",
        job: "Design • Intégration • front-end • back-end",
        tools: "React • Typescript • React-query • Symfony • SCSS",
        other: "Tâches cron • Listener • Webhook • Bucket AWS",
        logo: require("@/public/images/projects/netflix/logoNetflix.webp"),
        link: false,
        github: "https://github.com/Jordan-Philippot/Netflix-comedy",
        isMediaDesktop: true,
        background: "/images/projects/netflux/modalhomepage.webp",
        images: [
            {
                src: require("@/public/images/projects/netflux/modalhomepage.webp"),
                alt: "Modal video d'accueil",
            },
            {
                src: require("@/public/images/projects/netflux/carousel.webp"),
                alt: "Carousel",
            },
            {
                src: require("@/public/images/projects/netflux/channel.webp"),
                alt: "Page d'une chaine",
            },
            {
                src: require("@/public/images/projects/netflux/search.webp"),
                alt: "Recherche sur page d'accueil",
            },
            {
                src: require("@/public/images/projects/netflux/subscription.webp"),
                alt: "Page de souscription",
            },
            {
                src: require("@/public/images/projects/netflux/login.webp"),
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
        job: "Intégration • front-end • back-end • maintenance",
        tools: "React • Symfony • Stripe • Gsap • SCSS",
        other:
            "Tâches cron • Listener • Webhook • Connexion Gmail & Outlook • Google Analitycs • OVH • FileZilla",
        logo: require("@/public/images/projects/aliz/logoAliz.webp"),
        link: false,
        github: false,
        isMediaDesktop: true,
        background: "/images/projects/aliz/aliz.webp",
        images: [
            {
                src: require("@/public/images/projects/aliz/aliz.webp"),
                alt: "Accueil du site aliz.io",
            },
            {
                src: require("@/public/images/projects/aliz/loginAliz.webp"),
                alt: "Page de connexion du site aliz.io",
            },
            {
                src: require("@/public/images/projects/aliz/pricesAliz.webp"),
                alt: "Tarifs du site aliz.io",
            },
            {
                src: require("@/public/images/projects/aliz/profileAliz.webp"),
                alt: "Page profil du site aliz.io",
            },
            {
                src: require("@/public/images/projects/aliz/subscriptionAliz.webp"),
                alt: "Souscription aliz.io",
            },
            {
                src: require("@/public/images/projects/aliz/statisticsAliz.webp"),
                alt: "Statistiques AlizPatientèle",
            },
        ],
    },
    {
        id: 3,
        slug: "aliz-calendar",
        title: "alizCalendar",
        titleHover: "Produit Aliz",
        shortDescription: "Outils de gestion et de prise de rendez-vous en ligne",
        longDescription:
            "AlizCalendar est un produit Aliz permettant de gérer la prise de rendez-vous en ligne de manière personnalisé. " +
            "Les utilisateurs peuvent proposer des sondage en équipe, des webinars ou encore des rendez-vous récurrents",
        job: "Design • Intégration • front-end • back-end ",
        tools: "Symfony • Twig • Figma",
        other: "Tâches cron • Listener • Webhook ",
        logo: require("@/public/images/projects/aliz/logoAliz.webp"),
        link: false,
        github: false,
        isMediaDesktop: true,
        background: "/images/projects/alizCalendar/meetingAlizCalendar.webp",
        images: [
            {
                src: require("@/public/images/projects/alizCalendar/defaultHomeAlizCalendar.webp"),
                alt: "Accueil du site https://calendar.aliz.io",
            },
            {
                src: require("@/public/images/projects/alizCalendar/homeAlizCalendar.webp"),
                alt: "Accueil utilisateur du site https://calendar.aliz.io",
            },
            {
                src: require("@/public/images/projects/alizCalendar/meetingAlizCalendar.webp"),
                alt: "Prise de rendez-vous sur un évènement AlizCalendar",
            },
            {
                src: require("@/public/images/projects/alizCalendar/rdvAlizCalendar.webp"),
                alt: "Liste des évènements d'un utilisateur d'AlizCalendar",
            },
            {
                src: require("@/public/images/projects/alizCalendar/calendarAlizCalendar.webp"),
                alt: "Page de connexion des agendas",
            },
            {
                src: require("@/public/images/projects/alizCalendar/integrationAlizCalendar.webp"),
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
            "Outils de recherche, de vérification et de nettoyage de données d'entreprises",
        longDescription:
            "AlizVerif est un outil de recherche, vérification et nettoyage de données d'entreprises. " +
            "En quelques clics, vos données peuvent être vérifiées, notées et/ou nettoyées en les comparant à plusieurs bases de données fiables (API SIREN, BODACC etc...)",
        job: "Design • Intégration • front-end",
        tools: "React • Gsap • Figma",
        other: "Webhook • Axios",
        logo: require("@/public/images/projects/aliz/logoAliz.webp"),
        link: false,
        github: false,
        isMediaDesktop: true,
        background: "/images/projects/alizVerif/alizVerif.webp",

        images: [
            {
                src: require("@/public/images/projects/alizVerif/alizVerif.webp"),
                alt: "Accueil du site https://verif.aliz.io",
            },
            {
                src: require("@/public/images/projects/alizVerif/multipleSearchAlizVerif.webp"),
                alt: "Page de recherche multiple de données d'entreprises",
            },
            {
                src: require("@/public/images/projects/alizVerif/ourServicesAlizVerif.webp"),
                alt: "Page des différents services d'AlizVerif",
            },
            {
                src: require("@/public/images/projects/alizVerif/pricesAlizVerif.webp"),
                alt: "Page des tarifs d'AlizVerif",
            },
            {
                src: require("@/public/images/projects/alizVerif/verifDataAlizVerif.webp"),
                alt: "Page de vérification et nettoyage des données légales d'entreprises",
            },
            {
                src: require("@/public/images/projects/alizVerif/resultsAlizVerif.webp"),
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
        job: "Design • Intégration • front-end • back-end",
        tools: "React • Gsap • Figma • socket.io",
        other: "Google Maps • filtre de recherche avancés • api.gouv • Axios",
        logo: require("@/public/images/projects/studhelp/logoStudhelp.webp"),
        link: false,
        github: "https://github.com/Jordan-Philippot/studhelp_front",
        isMediaDesktop: true,
        background: "/images/projects/studhelp/studhelp.webp",
        images: [
            {
                src: require("@/public/images/projects/studhelp/studhelp.webp"),
                alt: "Accueil du site stud'help",
            },
            {
                src: require("@/public/images/projects/studhelp/howItWorksStudhelp.webp"),
                alt: "Page comment ça marche Stud'help",
            },
            {
                src: require("@/public/images/projects/studhelp/registerStudhelp.webp"),
                alt: "Page de création d'évènements Stud'help",
            },
            {
                src: require("@/public/images/projects/studhelp/eventDetailsStudhelp.webp"),
                alt: "Page de détails d'un évènement Stud'help",
            },
            {
                src: require("@/public/images/projects/studhelp/associationsStudhelp.webp"),
                alt: "Page de recherche d'associations à proximité",
            },
            {
                src: require("@/public/images/projects/studhelp/associationDetailsStudhelp.webp"),
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
        job: "Design • Intégration • front-end • back-end",
        tools: "React Native • Figma",
        other: "api betaseries • Axios",
        logo: require("@/public/images/projects/netflix/logoNetflix.webp"),
        link: false,
        github: "https://github.com/Jordan-Philippot/react-native-netflix",
        isMediaDesktop: false,
        background: "/images/projects/netflix/homeNetflix.webp",
        images: [
            {
                src: require("@/public/images/projects/netflix/homeNetflix.webp"),
                alt: "Accueil du site https://verif.aliz.io",
            },
            {
                src: require("@/public/images/projects/netflix/detailsActorNetflix.webp"),
                alt: "Page de recherche multiple de données d'entreprises",
            },
            {
                src: require("@/public/images/projects/netflix/detailsSearchNetflix.webp"),
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
        other: "Site vitrine de TED, une société de Consulting spécialisée exclusivement dans les projets de RPA (Robotic Process Automation).",
        logo: require("@/public/images/projects/ted/logo.webp"),
        link: "https://ted.consulting",
        github: false,
        isMediaDesktop: true,
        background: "/images/projects/ted/homeTed.webp",
        images: [
            {
                src: require("@/public/images/projects/ted/homeTed.webp"),
                alt: "Accueil du site TED consulting",
            },
            {
                src: require("@/public/images/projects/ted/projectsTed.webp"),
                alt: "Page de recherche multiple de données d'entreprises",
            },
            {
                src: require("@/public/images/projects/ted/solutionsTed.webp"),
                alt: "Page des différents services d'AlizVerif",
            },
            {
                src: require("@/public/images/projects/ted/partnersTed.webp"),
                alt: "Page des tarifs d'AlizVerif",
            },
            {
                src: require("@/public/images/projects/ted/videoTed.webp"),
                alt: "Page de vérification et nettoyage des données légales d'entreprises",
            },
            {
                src: require("@/public/images/projects/ted/projectsSliderTed.webp"),
                alt: "Page de vérification et nettoyage des données légales d'entreprises",
            },
        ],
    },
    {
        id: 8,
        slug: "les-chemins-de-la-maison",
        title: "Éducatrice Spé",
        titleHover: "Les Chemins De La Maison",
        shortDescription: "Site vitrine mettant en lumière les services d'une auto-entrepreneuse, éducatrice spécialisée et sexothérapeute.",
        longDescription: "Création complète d’un site vitrine pour mettre en lumière une auto-entrepreneuse, éducatrice spécialisée et sexothérapeute. Le site présente ses services d’accompagnement pour les enfants TDI/TND, une guidance parentale, ainsi que son expertise en thérapie individuelle et de couple. Je me suis occupé de l’intégralité du projet : design, développement front-end et SEO technique (optimisation des performances, structure sémantique, rédaction des métadonnées, stratégie de mots-clés).",
        job: "Design • Intégration • front-end",
        tools: "Next.js • SCSS • Figma • GSAP",
        other: "Optimisation SEO • Performance Web • Calendly Mobile • Mobile First",
        logo: require("@/public/images/projects/lesCheminsDeLaMaison/logo.svg"),
        link: "https://lescheminsdelamaison.fr/",
        github: false,
        isMediaDesktop: true,
        background: "/images/projects/lesCheminsDeLaMaison/homepage.webp",
        images: [
            {
                src: require("@/public/images/projects/lesCheminsDeLaMaison/homepage.webp"),
                alt: "Page d’accueil du site d'Anne-Sophie Portejoie, éducatrice spécialisée",
            },
            {
                src: require("@/public/images/projects/lesCheminsDeLaMaison/EVRAS-service.webp"),
                alt: "Page de service : accompagnement EVRAS",
            },
            {
                src: require("@/public/images/projects/lesCheminsDeLaMaison/about-me-page.webp"),
                alt: "Page à propos d'Anne-Sophie Portejoie, éducatrice spécialisée",
            },
            {
                src: require("@/public/images/projects/lesCheminsDeLaMaison/service-tdi-filter.webp"),
                alt: "Page de service d'Anne-Sophie Portejoie, Animatrice d’atelier développement des compétences psycho-sociales et aux habilités sociales - TDI & TND",
            },
            {
                src: require("@/public/images/projects/lesCheminsDeLaMaison/contact.webp"),
                alt: "Page de contact d'Anne-Sophie Portejoie, éducatrice spécialisée",
            },
            {
                src: require("@/public/images/projects/lesCheminsDeLaMaison/social-skills-TDI.webp"),
                alt: "Page de contact d'Anne-Sophie Portejoie, éducatrice spécialisée",
            },
        ],
    },
    {
        id: 9,
        slug: "amae-production",
        title: "Amae Production",
        titleHover: "Amae Production",
        shortDescription: "Site vitrine mettant en lumière une association spécialisée dans la production audiovisuelle et la création de contenus (festivals, clips, témoignages, portraits...)",
        longDescription: "Site vitrine mettant en lumière une association qui couvre d’importants festivals, réalise clips, contenus artistiques et projets interactifs pour des événements majeurs, en france métropolitaine et à la Réunion",
        job: "Design • Intégration • front-end",
        tools: "Next.js • SCSS • Figma • GSAP",
        other:
            "Optimisation SEO • Performance Web • Mobile First",
        logo: require("@/public/images/projects/amaeProduction/logo.ico"),
        link: "https://amae-production.fr/",
        github: false,
        isMediaDesktop: true,
        background: "/images/projects/amaeProduction/homepage-dance.webp",
        images: [
            {
                src: require("@/public/images/projects/amaeProduction/homepage-dance.webp"),
                alt: "",
            },
            {
                src: require("@/public/images/projects/amaeProduction/homepage-fire-festival.webp"),
                alt: "",
            },
            {
                src: require("@/public/images/projects/amaeProduction/real-page.webp"),
                alt: "",
            },
            {
                src: require("@/public/images/projects/amaeProduction/team-section.webp"),
                alt: "",
            },
            {
                src: require("@/public/images/projects/amaeProduction/who-we-are-page.webp"),
                alt: "",
            },
            {
                src: require("@/public/images/projects/amaeProduction/contact-page.webp"),
                alt: "",
            },
        ],
    }
];

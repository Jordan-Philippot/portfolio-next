export interface AboutProjectType {
    id: number;
    title: string;
    description: string;
    logo: string;
}

export interface SkillType {
    id: number;
    title: string;
}

export interface ToolType {
    id: number;
    title: string;
}

export const aboutProjects: AboutProjectType[] = [
    {
        id: 1,
        title: "E-COMMERCE",
        description: "Refonte complète du front-end avec implémentation d’un rendu côté serveur (SSR) optimisé, pour un grand groupe du retail belge.",
        logo: require("@/public/images/projects/netflix/logoNetflix.webp"),
    },
    {
        id: 2,
        title: "CMS INTERNE",
        description: "Développement complet d'un cms avec bo modulaire, système de templating et bibliothèque de type google drive, pensé pour les équipes métier",
        logo: require("@/public/images/projects/netflix/logoNetflix.webp"),
    },
    {
        id: 3,
        title: "PLATEFORME DE SYNERGIE",
        description: "Maintenance, refonte et évolution d’une plateforme permettant la synergie d'entreprises au sein d’un grand groupe du retail français",
        logo: require("@/public/images/projects/netflix/logoNetflix.webp"),
    },
];

export const aboutSkills: SkillType[] = [
    {id: 1, title: "WEB PERF’"},
    {id: 2, title: "INTÉGRATION "},
    {id: 3, title: "LISTENERS"},
    {id: 4, title: "WEBHOOK"},
    {id: 5, title: "TÂCHES CRON"},
    {id: 6, title: "BACK-OFFICE"},
    {id: 7, title: "MODELISATION BDD"},
    {id: 8, title: "CI/CD"},
    {id: 9, title: "API REST"},
    {id: 10, title: "SEO"},
    {id: 11, title: "METHODES AGILE/SCRUM"},
];
export const aboutTools: ToolType[] = [
    {id: 1, title: "REACT"},
    {id: 2, title: "NEXTJS"},
    {id: 3, title: "NODEJS"},
    {id: 4, title: "PHP"},
    {id: 5, title: "REDUX"},
    {id: 6, title: "REACT-QUERY"},
    {id: 7, title: "SQL/NOSQL"},
    {id: 8, title: "MONGODB"},
    {id: 9, title: "GITHUB"},
    {id: 10, title: "JIRA"},
    {id: 11, title: "TYPESCRIPT"},
    {id: 12, title: "SYMFONY"},
    {id: 13, title: "GOOGLE CLOUD PLATFORM"},
    {id: 14, title: "STRIPE"},
    {id: 15, title: "SCSS"},
    {id: 16, title: "GSAP"},
];
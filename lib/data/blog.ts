import PlatformSynergiesArticle from "@/app/blog/[slug]/content/PlatformSynergieArticle";
import {ReactNode} from "react";
import DxpBizzArticle from "@/app/blog/[slug]/content/DxpBizzArticle";
import ECommerceRetailArticle from "@/app/blog/[slug]/content/ECommerceRetailArticle";

interface ArticleImage {
    src: string;
    alt: string;
}

interface ArticleSEO {
    title: string;
    description: string;
    keywords: string[];
}

export interface ArticleType {
    id: number;
    slug: string;

    seo: ArticleSEO;

    title: string;
    shortDescription: string;

    content: () => ReactNode;

    job?: string;
    tools?: string;
    context?: string;

    thumbnail?: ArticleImage;
    wallpaper: ArticleImage;

    publishedAt: string;
    readingTime: string;
    isFeatured?: boolean;
}

export const articles: ArticleType[] = [
    {
        id: 1,
        slug: "dxp",
        seo: {
            title:
                "Développement d’un DXP sur mesure | Plateforme digitale B2B",
            description:
                "Création d’un DXP complet avec back-office modulaire, système de templating et gestion documentaire type Google Drive pour les équipes métier.",
            keywords: [
                "DXP",
                "digital experience platform",
                "développement DXP",
                "React",
                "Node.js",
                "back-office",
                "plateforme digitale",
                "outil métier",
            ],
        },

        title: "Développement d'un DXP",
        shortDescription:
            "Développement complet d'un DXP avec back-office modulaire, templating et gestion documentaire avancée.",

        thumbnail: {
            src: require("@/public/images/blog/dxp/DXP-1.webp"),
            alt: "Interface DXP back-office"
        },
        wallpaper: {
            src: require("@/public/images/blog/dxp/DXP-1.webp"),
            alt: "Plateforme DXP"
        },

        content: DxpBizzArticle,

        job: "Front-end • Back-office • Architecture",
        tools: "React • Node.js • Express • MongoDB • MySQL",
        context: "Plateforme digitale interne pour équipes métier",

        publishedAt: "2026-01-10",
        readingTime: "2 min",
        isFeatured: true,
    },

    {
        id: 2,
        slug: "e-commerce-retail",
        seo: {
            title:
                "Développement e-commerce retail sur mesure | Performance & conversion",
            description:
                "Refonte complète d’un site e-commerce avec optimisation des performances, amélioration du tunnel d’achat et architecture scalable.",
            keywords: [
                "e-commerce",
                "développement e-commerce",
                "retail",
                "performance web",
                "React",
                "Node.js",
                "optimisation conversion",
                "UX e-commerce",
            ],
        },

        title: "Développement d'un e-commerce",
        shortDescription:
            "Refonte d’un e-commerce avec focus sur la performance, l’expérience utilisateur et la conversion.",

        content: ECommerceRetailArticle,

        job: "Front-end • Back-end • Optimisation",
        tools: "React • Node.js • Express • MongoDB • MySQL",
        context: "Projet e-commerce retail avec enjeux de performance",

        thumbnail: {
            src: require("@/public/images/blog/e-commerce/e-commerce-1.webp"),
            alt: "Interface site e-commerce"
        },
        wallpaper: {
            src: require("@/public/images/blog/e-commerce/e-commerce-1.webp"),
            alt: "Page produit e-commerce"
        },

        publishedAt: "2026-01-08",
        readingTime: "2 min",
        isFeatured: true,
    },

    {
        id: 3,
        slug: "plateforme-synergies-entreprises",
        seo: {
            title:
                "Plateforme de synergies B2B | Collaboration multi-entreprises",
            description:
                "Modernisation d’une plateforme collaborative permettant la gestion de synergies entre entreprises avec gestion avancée des droits et performance optimisée.",
            keywords: [
                "plateforme collaborative",
                "B2B",
                "synergies entreprises",
                "SaaS",
                "gestion des droits",
                "React",
                "Node.js",
                "refonte application",
            ],
        },

        title: "Modernisation d’une plateforme collaborative multi-entreprises",
        shortDescription:
            "Refonte d’une plateforme B2B avec gestion des droits, performance et architecture scalable.",

        content: PlatformSynergiesArticle,

        job: "Front-end • Back-office • Refactorisation",
        tools: "React • Node.js • Express • MongoDB • MySQL",
        context: "Plateforme collaborative B2B multi-entreprises",

        thumbnail: {
            src: require("@/public/images/blog/synergies/synergie-2.webp"),
            alt: "Dashboard plateforme collaborative"
        },
        wallpaper: {
            src: require("@/public/images/blog/synergies/synergie-2.webp"),
            alt: "Interface plateforme B2B"
        },

        publishedAt: "2026-02-12",
        readingTime: "2 min",
        isFeatured: true,
    },
];
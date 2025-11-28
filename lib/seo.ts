import {Metadata} from "next";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;


export interface CustomMetadata extends Metadata {
    path?: string;
    items?: { name: string; description: string; url: string; image: string }[];
}

/* --------------------------------------------
 * Types Metadata (SEO / OpenGraph / Twitter)
 * -------------------------------------------- */

export interface GenerateMetadataParams {
    title: string;
    description: string;
    path?: string;
    image?: string;
    type?: "website" | "article" | "profile" | "book" | string;
    keywords?: string[];
    publishedTime?: string;
    modifiedTime?: string;
    items?: { name: string; description: string; url: string; image: string }[];
}

const name: string = "Jordan Philippot - Développeur Fullstack"

export function generateMetadata({
                                     title,
                                     description,
                                     path = "/",
                                     image = "/images/image_profile.webp",
                                     type = "website",
                                     keywords = [],
                                     publishedTime,
                                     modifiedTime,
                                     items = [],
                                 }: GenerateMetadataParams) {
    const url = `${BASE_URL}${path}`;

    return {
        title,
        description,
        metadataBase: new URL(BASE_URL as string),
        alternates: {
            canonical: url,
        },
        robots: "index, follow",
        keywords: keywords.length ? keywords.join(", ") : undefined,
        items,
        path,
        openGraph: {
            title,
            description,
            url,
            siteName: name,
            images: [
                {
                    url: `${BASE_URL}${image}`,
                    width: 1200,
                    height: 630,
                    alt: title,
                },
            ],
            locale: "fr_FR",
            type,
            publishedTime,
            modifiedTime,
        },

        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: [`${BASE_URL}${image}`],
        },
    };
}

/* --------------------------------------------
 * Types JSON-LDJsonLdType
 * -------------------------------------------- */

export type JsonLdType =
    | "WebSite"
    | "AboutPage"
    | "Article"
    | "Service"
    | "ItemList"
    | "BreadcrumbList";

export interface BaseJsonLd {
    title: string;
    description: string;
    path: string;
    image?: string;
    sameAs?: string[];
    items?: { name?: string, description?: string, url?: string, image?: string }[]
}


/* --------------------------------------------
 * JSON-LD Generator
 * -------------------------------------------- */

export function generateJsonLD(type: JsonLdType, data: BaseJsonLd): string {
    let json: Record<string, any> = {
        "@context": "https://schema.org",
        "@type": type,
    };

    switch (type) {
        case "WebSite":
            json = {
                ...json,
                name: data.title,
                url: `${BASE_URL}${data.path}`,
                description: data.description,
                publisher: {
                    "@type": "Organization",
                    name: name,
                    logo: {"@type": "ImageObject", url: `${BASE_URL}/images/logo.webp`},
                },
            };
            break;

        case "AboutPage":
            json = {
                ...json,
                name: data.title,
                description: data.description,
                url: `${BASE_URL}${data.path}`,
                publisher: {
                    "@type": "Organization",
                    name: name,
                    url: BASE_URL,
                    logo: {"@type": "ImageObject", url: `${BASE_URL}/images/logo.webp`},
                },
                mainEntity: {
                    "@type": "Person",
                    name: "Jordan Philippot",
                    jobTitle: "Développeur fullstack - Javascript",
                    image: data.image || `${BASE_URL}/images/image_profile.webp`,
                    sameAs: data.sameAs || [],
                },
            };
            break;

        case "Article":
            json = {
                ...json,
                headline: data.title,
                description: data.description,
                url: `${BASE_URL}${data.path}`,
                author: {
                    "@type": "Person",
                    name: "Jordan Philippot",
                },
                publisher: {
                    "@type": "Organization",
                    name: name,
                    logo: {"@type": "ImageObject", url: `${BASE_URL}/images/logo.webp`},
                },
                datePublished: new Date().toISOString(),
            };
            break;

        case "Service":
            json = {
                ...json,
                name: data.title,
                description: data.description,
                url: `${BASE_URL}${data.path}`,
                provider: {
                    "@type": "Organization",
                    name: name,
                    logo: {"@type": "ImageObject", url: `${BASE_URL}/images/logo.webp`},
                },
            };
            break;

        case "ItemList":
            json = {
                ...json,
                name: data.title,
                description: data.description,
                itemListElement: data.items?.map((item, index) => ({
                    "@type": "ListItem",
                    position: index + 1,
                    url: `${BASE_URL}${item.url}`,
                    name: item.name,
                    description: item.description,
                    image: `${BASE_URL}${item.image}`,
                })),
            };
            break;

        // 🆕 --- BREADCRUMB ---
        case "BreadcrumbList":
            json = {
                ...json,
                itemListElement: data.items?.map((item, index) => ({
                    "@type": "ListItem",
                    position: index + 1,
                    item: {
                        "@id": `${BASE_URL}${item.url}`,
                        name: item.name,
                    },
                })),
            };
            break;

        default:
            break;
    }

    return JSON.stringify(json, null, 2);
}

import {CustomMetadata, generateJsonLD, generateMetadata} from "@/lib/seo";
import Script from "next/script";
import BlogClient from "@/app/blog/BlogClient";


export const metadata: CustomMetadata = generateMetadata({
    title: "Jordan Philippot – Développeur Full-Stack JavaScript",
    description:
        "Développeur Full-Stack spécialisé en JavaScript (React, Next.js, Node.js) et PHP (Symfony) avec 5 ans d’expérience, sur la métropole lilloise. Création d’applications web performantes, modernes et scalables.",
    path: "/",
    keywords: [
        "développeur fullstack",
        "javascript",
        "php",
        "react",
        "node",
        "express",
        "symfony",
        "lille",
        "next",
        "métropole lilloise"
    ],
});

export default function Blog() {
    return (
        <>
            <BlogClient/>

            {/* JSON-LD */}
            <Script
                id="ld-homepage"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: generateJsonLD("WebSite", {
                        title: metadata.title as string,
                        description: metadata.description as string,
                        path: "/",
                        image: "/images/logo.webp",
                    }),
                }}
            />
        </>
    );
}

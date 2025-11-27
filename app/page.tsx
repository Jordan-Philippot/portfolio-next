import HomeClient from "@/app/homeClient";
import {generateJsonLD, generateMetadata} from "@/lib/seo";
import Script from "next/script";


export const metadata = generateMetadata({
    title: "Jordan Philippot – Développeur fullstack JavaScript & PHP | 5 ans d'expérience",
    description:
        "Développeur Full-Stack spécialisé en JavaScript (React, Node.js) et PHP (Symfony) avec 5 ans d’expérience. Création d’applications web performantes, modernes et scalables.",
    path: "/",
    keywords: [
        "développeur fullstack",
        "javascript",
        "php",
        "react",
        "node js",
        "express",
        "symfony",
    ],
});

export default function Home() {
    return (
        <>
            <HomeClient/>

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
                        image: "/images/logo.png",
                    }),
                }}
            />
        </>
    );
}

import {CustomMetadata, generateJsonLD, generateMetadata} from "@/lib/seo";
import Script from "next/script";
import BlogClient from "@/app/blog/BlogClient";


export const metadata: CustomMetadata = generateMetadata({
    title: "Blog – Jordan Philippot, Développeur Full-Stack JavaScript",
    description:
        "Articles sur le développement web Full-Stack JavaScript (React, Next.js, Node.js). Astuces, bonnes pratiques et projets modernes.",
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
                        path: metadata.path as string,
                        image: "/images/logo.webp",
                    }),
                }}
            />
        </>
    );
}

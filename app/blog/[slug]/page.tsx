'use server'
import {Metadata} from "next";
import {generateMetadata as buildMeta, generateJsonLD} from "@/lib/seo";
import Script from "next/script";
import {notFound} from "next/navigation";
import {articles} from "@/lib/data/blog";
import ArticleClientComponent from "@/app/blog/[slug]/ArticleClient";

interface Props {
    params: any
}

export async function generateMetadata({params}: Props): Promise<Metadata | null> {
    const {slug} = await params;

    const currentArticle = articles?.find(p => p.slug === slug);

    if (!currentArticle) {
        return null
    }

    return buildMeta({
        title: `${currentArticle.title} – Article réalisé par Jordan Philippot`,
        description: currentArticle.shortDescription.slice(0, 155),
        path: `/blog/${currentArticle.slug}`,
        keywords: [
            "développeur fullstack",
            "javascript",
            "métropole lilloise",
        ],
        image: "/images/image_profile.webp",
    });
}

export default async function Page({params}: Props) {
    const param = await params;


    const currentArticle = articles?.find(p => p.slug === param?.slug);

    if (!currentArticle) {
        return notFound()
    }

    return (
        <>
            <ArticleClientComponent slug={param?.slug}/>

            {currentArticle && (
                <Script
                    id="ld-breadcrumb"
                    type="application/ld+json"
                    strategy="afterInteractive"
                    dangerouslySetInnerHTML={{
                        __html: generateJsonLD("BreadcrumbList", {
                            title: currentArticle.title,
                            description: "",
                            path: `/blog/${currentArticle.slug}`,
                            items: [
                                {name: "Accueil", url: "/"},
                                {name: "Blog", url: "/blog"},
                                {name: currentArticle.title, url: `/blog/${currentArticle.slug}`},
                            ],
                        }),
                    }}
                />
            )}
        </>
    );
}



"use client"
import {notFound} from "next/navigation";
import {articles} from "@/lib/data/blog";
import React from "react";
import Image from "next/image";

interface ArticlePageProps {
    slug: string;
}


export default function ArticleClientComponent({slug}: ArticlePageProps) {
    const article = articles.find(a => a.slug === slug);

    if (!article) {
        notFound();
    }

    return (
        <main>
            <div id="blob1"></div>
            <div id="blob2"></div>
            <article id={"article"} className={"page"}>
                <Image
                    src={article.wallpaper?.src}
                    alt={article.wallpaper?.alt}
                    width={600}
                    height={300}
                    className={"article-wallpaper"}
                />

                <h1>{article.title}</h1>
                <p>Temps de lecture: {article.readingTime}</p>
                <p className={"reading-time"}>Publié le {article.publishedAt}</p>
                <p>{article.shortDescription}</p>

                <p><strong>Rôle :</strong> {article.job}</p>
                <p><strong>Technologies :</strong> {article.tools}</p>

                {article.content()}

            </article>
        </main>
    );
}

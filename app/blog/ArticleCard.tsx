import Link from "next/link";
import React from "react";
import {ArticleType} from "@/lib/data/blog";
import Image from "next/image";

interface ArticleProps {
    article: ArticleType;
}

const ArticleCard = ({article}: ArticleProps) => {
    return (
        <div className={"article-card"}>
            <Image
                src={article?.thumbnail?.src || ""}
                alt={article?.thumbnail?.alt || ""}
                width={250}
                height={200}
            />
            <div className={"article-content"}>

                <h2> {article.title}</h2>

                <p>{article.shortDescription}</p>
                <p className={"reading-time"}>Temps de lecture: <strong>{article.readingTime}</strong></p>
                <p className={"published-at"}>Publié le <strong>{article.publishedAt}</strong></p>
                <Link href={`/blog/${article.slug}`} className={"btn-default btn-darkBlue"}>Consulter</Link>
            </div>
        </div>
    )
}
export default ArticleCard
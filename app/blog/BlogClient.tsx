"use client"
import React from "react";
import {articles} from "@/lib/data/blog";
import ArticleCard from "@/app/blog/ArticleCard";

export default function BlogClient() {
    return (
        <main>
            <div id="blob1"></div>
            <div id="blob2"></div>
            <section id="blog" className={"page"}>
                <h1>Blog</h1>
                <div className={"articles-wrapper"}>
                    {articles.map((article, idx) =>
                        <ArticleCard article={article} key={idx}/>
                    )}
                </div>
            </section>
        </main>
    );
}

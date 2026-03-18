import React from "react";
import Link from "next/link";

interface ArticleCTAProps {
    title: string;
    text: string;
    link: string;
    linkText: string;
}

const ArticleCTA = ({title, text, link, linkText}: ArticleCTAProps) => (
    <div className="article-cta">
        <h2>{title}</h2>
        <p>{text}</p>
        <Link href={link}>{linkText}</Link>
    </div>
);

export default ArticleCTA;
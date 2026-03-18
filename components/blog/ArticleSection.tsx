import React, {ReactNode} from "react";

interface ArticleSectionProps {
    title: string;
    children: ReactNode;
}

const ArticleSection = ({title, children}: ArticleSectionProps) => (
    <section className="article-section">
        <h2>{title}</h2>
        {children}
    </section>
);

export default ArticleSection;
import React from "react";
import Image from "next/image";

interface ArticleHeroProps {
    title: string;
    subtitle: string;
    imageSrc: string;
    imageAlt: string;
}

const ArticleHero = ({title, subtitle, imageSrc, imageAlt}: ArticleHeroProps) => {
    return (
        <section className="article-hero">
            <div className="article-hero-text">
                <h1>{title}</h1>
                <p>{subtitle}</p>
            </div>
            <div className="article-hero-image">
                <Image src={imageSrc} alt={imageAlt} width={600} height={400}/>
            </div>
        </section>
    );
};

export default ArticleHero;
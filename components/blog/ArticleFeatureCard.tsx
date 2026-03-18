import React from "react";
import Image from "next/image";

interface FeatureCardProps {
    iconSrc: string;
    iconAlt: string;
    title: string;
    items: string[];
}

const ArticleFeatureCard = ({iconSrc, iconAlt, title, items}: FeatureCardProps) => {
    return (
        <div className="feature-card">
            <div className="feature-card-header">
                <div className="feature-card-header-img">
                    <Image src={iconSrc} alt={iconAlt} width={32} height={32}/>
                </div>
                <h2>{title}</h2>
            </div>
            <ul>
                {items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default ArticleFeatureCard;
import React from "react";

interface ArticleImpactCardProps {
    value: string;
    label: string;
}

const ArticleImpactCard = ({value, label}: ArticleImpactCardProps) => (
    <div className="impact-card">
        <strong>{value}</strong>
        <span>{label}</span>
    </div>
);

export default ArticleImpactCard;
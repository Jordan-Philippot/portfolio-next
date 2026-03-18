'use client'
import React from "react";
import ArticleSection from "@/components/blog/ArticleSection";
import ArticleCTA from "@/components/blog/ArticleCta";
import ArticleFeatureCard from "@/components/blog/ArticleFeatureCard";

const ECommerceRetailArticle = () => {
    return (
        <article>
            <p className={"article-presentation"}>
                J’ai participé à la refonte complète du front-end pour un acteur majeur du retail en Belgique, couvrant
                plus de 10 centres.
                L’objectif était de moderniser l’interface, améliorer les performances et garantir une expérience fluide
                sur tous les devices.
            </p>

            <div className="feature-cards">
                <ArticleFeatureCard
                    iconSrc="/images/blog/monitor-cog.svg"
                    iconAlt="Défis techniques e-commerce"
                    title="Les défis techniques"
                    items={[
                        "Intégration d’une API multi-services complexe (produits, paiement, promotions)",
                        "Optimisation du SSR pour SEO et performances",
                        "Maintien des standards stricts du retail (sécurité et performance)",
                        "Réduction de la dette technique existante"
                    ]}
                />

                <ArticleFeatureCard
                    iconSrc="/images/blog/key.svg"
                    iconAlt="Solutions techniques e-commerce"
                    title="Solutions mises en place"
                    items={[
                        "Migration complète vers Next.js avec SSR optimisé",
                        "Architecture front-end modulaire et réutilisable",
                        "Composants adaptatifs pour besoins spécifiques par centre",
                        "Optimisation du chargement (lazy-loading, découpage en modules)"
                    ]}
                />
            </div>

            <ArticleSection title="Technologies et architecture">
                <p>
                    La solution combine un front-end **Next.js**, des composants React modulaires et une architecture
                    orientée performance.
                </p>
            </ArticleSection>

            <ArticleSection title="Résultats et valeur ajoutée">
                <p>
                    La plateforme livrée est moderne, rapide et scalable. Elle permet une gestion fluide des produits et
                    promotions,
                    tout en offrant une base technique solide pour les évolutions futures. L’expérience utilisateur est
                    optimisée sur tous les devices
                    et la maintenance est simplifiée grâce à l’architecture modulaire.
                </p>
            </ArticleSection>

            <ArticleCTA
                title="Un projet similaire ?"
                text="Je peux vous accompagner sur vos projets web, e-commerce ou plateformes sur mesure."
                link="/contact"
                linkText="Me contacter"
            />
        </article>
    );
};

export default ECommerceRetailArticle;
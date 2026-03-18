'use client'
import React from "react";
import ArticleSection from "@/components/blog/ArticleSection";
import ArticleCTA from "@/components/blog/ArticleCta";
import ArticleFeatureCard from "@/components/blog/ArticleFeatureCard";

const DxpBizzArticle = () => {
    return (
        <article>
            <p className={"article-presentation"}>
                J’ai participé au développement d’une plateforme digitale complète intégrant un <strong>front-end
                Next.js</strong>,
                un <strong>back-office React</strong> et un moteur e-commerce. Le projet visait à centraliser la gestion
                des contenus,
                produits et services tout en offrant une interface flexible pour différents profils utilisateurs.
            </p>

            <ArticleSection title="Objectifs et contexte">
                <p>
                    L’objectif était de créer un environnement modulable et scalable, capable de supporter de gros
                    volumes de données et d’utilisateurs,
                    tout en garantissant performance, sécurité et autonomie des équipes métier. Chaque composant peut
                    être mis à jour ou remplacé indépendamment,
                    sans interrompre l’ensemble de la plateforme.
                </p>
            </ArticleSection>

            <div className="feature-cards">
                <ArticleFeatureCard
                    iconSrc="/images/blog/monitor-cog.svg"
                    iconAlt="Enjeux techniques"
                    title="Enjeux techniques"
                    items={[
                        "Front Next.js optimisé SEO et rendu SSR pour e-commerce et contenus dynamiques",
                        "Back-office React pour gestion métier des contenus, produits et pages",
                        "Architecture modulaire avec microservices pour traitements et fichiers",
                        "Gestion des droits et multi-tenancy",
                        "Optimisation des fichiers et médias, import multiple et statistiques avancées"
                    ]}
                />

                <ArticleFeatureCard
                    iconSrc="/images/blog/key.svg"
                    iconAlt="Solutions mises en place"
                    title="Solutions mises en place"
                    items={[
                        "Moteur e-commerce intégré pour catalogue, stocks et commandes",
                        "Éditeur de templates et pages modulaires pour contenus complexes",
                        "Gestion du consentement et conformité RGPD",
                        "Suivi des performances et statistiques d’usage pour optimisation continue"
                    ]}
                />
            </div>

            <ArticleSection title="Technologies et architecture">
                <p>
                    La plateforme combine un <strong>front Next.js</strong> pour le rendu rapide et SEO, un <strong>back-office
                    React</strong> pour la gestion métier,
                    et une architecture microservices côté back-end. Les données relationnelles sont gérées
                    avec <strong>MySQL</strong>, tandis que les contenus flexibles
                    et fichiers sont stockés dans <strong>MongoDB</strong>. L’architecture modulaire permet d’ajouter de
                    nouveaux modules ou services sans impacter l’ensemble.
                </p>
            </ArticleSection>

            <ArticleSection title="Résultats et valeur ajoutée">
                <p>
                    La plateforme offre une interface flexible, sécurisée et performante. Les équipes métier peuvent
                    gérer les contenus, produits et services de manière autonome.
                    Les performances et la scalabilité ont été testées sur de gros volumes de contenus et utilisateurs.
                    Le suivi précis des fichiers optimise l’usage des ressources.
                </p>
                <p>En résumé, la solution combine :</p>
                <ul>
                    <li>Flexibilité pour créer et modifier pages, contenus et modules</li>
                    <li>Performance et scalabilité pour usage multi-tenant</li>
                    <li>Sécurité et droits granulaires pour chaque équipe</li>
                    <li>Optimisation de l’usage des médias et fichiers</li>
                </ul>
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

export default DxpBizzArticle;
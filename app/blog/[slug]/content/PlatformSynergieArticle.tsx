'use client'
import React from "react";
import ArticleFeatureCard from "@/components/blog/ArticleFeatureCard";
import ArticleSection from "@/components/blog/ArticleSection";
import ArticleCTA from "@/components/blog/ArticleCta";

const PlatformSynergiesArticle = () => {
    return (
        <article>
            <p className={"article-presentation"}>
                J’ai repris le développement et la maintenance d’une plateforme collaborative destinée à
                optimiser
                les synergies entre entreprises. La solution permet de centraliser fichiers, contenus, événements et
                communications
                tout en offrant des outils modulaires aux équipes métier.
            </p>

            <div className="feature-cards">
                <ArticleFeatureCard
                    iconSrc="/images/blog/monitor-cog.svg"
                    iconAlt="Enjeux techniques"
                    title="Enjeux techniques"
                    items={[
                        "Refactorisation complète du front-end pour lisibilité et maintenabilité",
                        "Remplacement des technologies sources de dette technique (Redux, anciens composants)",
                        "Optimisation des temps de chargement et performance globale",
                        "Gestion granulaire des rôles et droits utilisateurs multi-entreprises"
                    ]}
                />

                <ArticleFeatureCard
                    iconSrc="/images/blog/key.svg"
                    iconAlt="Fonctionnalités clés"
                    title="Fonctionnalités clés"
                    items={[
                        "Bibliothèque de fichiers centralisée avec statistiques et optimisation automatique",
                        "Édition de tutoriels et contenus directement via back-office",
                        "Gestion d’événements avec suivi de participation et rapports",
                        "Sondages commentables et mesurables pour analyse métier",
                        "Messagerie interne et centre de notifications",
                        "Suivi des économies et gains réalisés par synergie"
                    ]}
                />
            </div>

            <ArticleSection title="Technologies et architecture">
                <p>
                    La plateforme repose sur un <strong>front-end React</strong> moderne, couplé à un back-office
                    modulable pour la gestion des contenus et utilisateurs.
                    Les données relationnelles sont gérées via <strong>MySQL</strong> et les contenus flexibles
                    via <strong>MongoDB</strong>.
                    L’architecture est conçue pour supporter de nombreux utilisateurs simultanément et faciliter l’ajout
                    de nouvelles fonctionnalités.
                </p>
            </ArticleSection>

            <ArticleSection title="Résultats et valeur ajoutée">
                <p>
                    La plateforme est aujourd’hui plus rapide, plus intuitive et facilement maintenable.
                    Les équipes peuvent gérer les contenus, fichiers et communications de manière autonome,
                    tandis que les performances et la scalabilité permettent de supporter de grandes structures avec des
                    besoins variés.
                </p>
                <p>En résumé :</p>
                <ul>
                    <li>Refonte complète du front-end pour lisibilité et performance</li>
                    <li>Gestion avancée des droits et multi-entreprises</li>
                    <li>Outils modulaires et réutilisables pour équipes métier</li>
                    <li>Optimisation des ressources et suivi des synergies pour maximiser l’efficacité</li>
                </ul>
            </ArticleSection>

            <ArticleCTA
                title="Un projet similaire ?"
                text="Je peux vous accompagner sur vos projets web, plateformes collaboratives ou gestion multi-entreprises."
                link="/contact"
                linkText="Me contacter"
            />
        </article>
    );
};

export default PlatformSynergiesArticle;
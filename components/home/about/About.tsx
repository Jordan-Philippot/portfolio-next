import React, {useEffect, useRef} from "react";
import {aboutProjects, aboutSkills, aboutTools, SkillType} from "@/lib/data/about";
import Image from "next/image";
import gsap, {Power2} from "gsap";
import {ScrollTrigger} from "gsap/dist/ScrollTrigger";

interface AboutProps {
    ref: React.Ref<HTMLDivElement>,
}

export default function About({ref}: AboutProps) {
    const smokyPresentationRef = useRef<HTMLParagraphElement>(null);
    const smokyDescriptionRef = useRef<HTMLParagraphElement>(null);
    const infiniteRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        if (smokyDescriptionRef.current) {
            const cards = smokyDescriptionRef.current.querySelectorAll<HTMLDivElement>('.card');

            gsap.fromTo(
                cards,
                {opacity: 0, y: 50, x: 50},
                {
                    opacity: 1,
                    y: 0,
                    x: 0,
                    ease: Power2.easeInOut,
                    duration: 0.8,
                    stagger: 0.2,
                    scrollTrigger: {
                        trigger: smokyDescriptionRef.current,
                        start: "top 70%",
                        end: "bottom 20%",
                        toggleActions: "play none none reverse",
                    }
                }
            );
        }
    }, []);

    return (
        <section
            id="about"
            ref={ref}
        >
            <h2>À propos</h2>

            <div className="container-about">
                <p id="about-presentation" ref={smokyPresentationRef}>
                    Développeur Fullstack <b>Javascript</b> et <b>PHP</b> depuis 5 ans, je travaille avec <b>React,
                    Next.js, Node.js (Express)</b> et <b>Symfony</b> pour donner vie à des produits cohérents,
                    structurés et durables.
                    <br/>
                    <br/>
                    J’accorde une attention particulière à la lisibilité, à la modularité et à tout ce qui facilite la
                    vie des utilisateurs… comme celle des développeurs.
                    <br/>
                    <br/>
                    En 2024, j’ai rejoint Ikomobi, une agence digitale reconnue, où j’ai l’opportunité de travailler sur
                    des projets ambitieux :
                </p>


                <div id="about-cards" ref={smokyDescriptionRef}>
                    {aboutProjects.map((project, index) => (
                        <div className="card" key={index}>
                            <project.icon width={32} height={32}/>
                            <h3> {project?.title}</h3>
                            <p>{project?.description}</p>
                        </div>
                    ))}
                </div>

                <p id="about-presentation" ref={smokyPresentationRef}>
                    Avant cela, j’ai participé à la création des sites de la startup Ted Consulting (& Aliz), ainsi qu’à
                    la refonte d’un back-office pour Meilleurtaux Assurances.
                    <br/>
                    <br/>
                    Ces expériences m’ont permis de développer une double
                    sensibilité: <b>technique</b> et <b>produit</b>,
                    essentielle pour créer des solutions qui répondent réellement aux besoins des utilisateurs et des
                    entreprises.
                    <br/>
                    <br/>
                    Aujourd’hui, j’accompagne entreprises et startups dans la mise en place de solutions sur mesure,
                    toujours avec un objectif clair :
                    <br/>
                    <b>apporter de la valeur</b>, rapidement et durablement.

                </p>


                <div className={"infinite-container"}>
                    <div className={"infinite-section"}>
                        <h3 className={"infinite-title"}>Compétences</h3>
                        <div className="infinite-text" ref={infiniteRef}>
                            <div className="track">
                                {aboutSkills.map((skill: SkillType) => (
                                    <span key={skill.id}>{skill.title}</span>
                                ))}
                                {aboutSkills.map((skill: SkillType) => (
                                    <span key={`dup-${skill.id}`}>{skill.title}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className={"infinite-section"}>
                        <h3 className={"infinite-title"}>Outils et Languages</h3>
                        <div className="infinite-text" ref={infiniteRef}>
                            <div className="track">
                                {aboutTools.map((skill: SkillType) => (
                                    <span key={skill.id}>{skill.title}</span>
                                ))}
                                {aboutTools.map((skill: SkillType) => (
                                    <span key={`dup-${skill.id}`}>{skill.title}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

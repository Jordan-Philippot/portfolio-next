'use client'

import React, {useEffect} from 'react'

// ----- Services -----
import {myProjects} from '@/lib/data/projects'

// ----- Packages -----
import gsap, {Power2} from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'

import ProjectCarousel from "@/components/home/myProjects/ProjetsCarousel";

interface ProjectsProps {
    sectionRef?: React.Ref<HTMLDivElement>
}

gsap.registerPlugin(ScrollTrigger)

export default function Projects({sectionRef}: ProjectsProps) {

    useEffect(() => {
        const sections = document.querySelectorAll('.oneProject');

        sections.forEach((section, index) => {
            gsap.timeline({
                scrollTrigger: {
                    trigger: section,
                    start: 'top-=800',
                    toggleActions: 'play none none reverse',
                    end: () => `+=${section.clientHeight / 2}`,
                }
            }).fromTo(
                section,
                {
                    x: index % 2 === 0 ? -100 : 100,
                    opacity: 0,
                },
                {
                    x: 0,
                    opacity: 1,
                    ease: Power2.easeOut,
                    duration: 2
                }
            );
        });

        return () => {
            ScrollTrigger.getAll().forEach(t => t.kill());
        };
    }, []);


    return (
        <section
            id="projects"
            ref={sectionRef}
        >
            <div id="blob1"></div>
            <div id="blob2"></div>

            <h2>Mes Projets</h2>

            <ProjectCarousel slides={myProjects}/>
        </section>
    )
}

import React from 'react'


// ----- Services -----
import {myProjects} from '@/lib/data/projects'

// ----- Packages -----
import gsap, {Power2} from 'gsap'
import ProjectCarousel from "@/components/home/myProjects/ProjetsCarousel";

interface ProjectsProps {
    ref: React.Ref<HTMLDivElement> | null
}

export default function Projects({ref}: ProjectsProps) {

    const sections = document.querySelectorAll('.oneProject');

    sections.forEach((section, index) => {
        const tl1 = gsap.timeline(
            {
                scrollTrigger: {
                    trigger: section,
                    start: 'top-=800',
                    toggleActions: 'play none none reverse',
                    end: () => `+=${section.clientHeight / 2}`,
                    markers: false
                }
            });
        tl1.fromTo(section,
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
    })


    return (
        <section
            id="projects"
            ref={ref}
        >
            <div id="blob1"></div>
            <div id="blob2"></div>

            <h2>Mes Projets</h2>

            <ProjectCarousel slides={myProjects}/>
        </section>
    )
}

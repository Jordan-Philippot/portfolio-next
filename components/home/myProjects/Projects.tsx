import React from 'react'

// ----- Component -----
import OneProject from './OneProject'

// ----- Services -----
import {myProjects} from '@/lib/constants/projects'

// ----- Packages -----
import gsap, {Power2} from 'gsap'


export default function Projects({ProjectsComponentRef}) {

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
                ease: Power2,
                duration: 2
            }
        );
    })


    return (
        <section id="projects" className="container-fluid" ref={ProjectsComponentRef}>

            <div id="blob1"></div>
            <div id="blob2"></div>


            <h2>Mes Projets</h2>

            <div id="projectsList">
                {myProjects.map((project) =>
                    <OneProject key={project.id} project={project}/>
                )}
            </div>

        </section>
    )
}

'use client'
import ProjectsComponent from '../../components/home/myProjects/Projects'
import {useRef} from "react";


export default function Projects() {
    const ProjectsComponentRef = useRef<HTMLDivElement>(null)


    return (
        <div id="projects" className="page">
            {/* ----- MY PROJECTS ----- */}
            <ProjectsComponent ref={ProjectsComponentRef}/>
        </div>
    )
}

'use client'

import {useEffect, useState, useRef} from 'react'

// ----- Constants -----
import {myProjects, ProjectType} from '@/lib/data/projects'
import {animationDirection} from '@/lib/constants/animationDirection'

// ----- Services -----
import {revealText} from '@/lib/helpers/revealText'
import Image from "next/image"

export default function ProjectClientComponent({slug}: { slug: string }) {

    const [myProject, setMyProject] = useState<ProjectType | null>(null)
    const [haveProject, setHaveProject] = useState(false)

    // ----- Refs -----
    const headerProjectRef = useRef<HTMLDivElement>(null)
    const firstDescriptionProjectRef = useRef<HTMLParagraphElement>(null)
    const firstTitleDescriptionProjectRef = useRef<HTMLHeadingElement>(null)
    const secondDescriptionProjectRef = useRef<HTMLParagraphElement>(null)
    const secondTitleDescriptionProjectRef = useRef<HTMLHeadingElement>(null)
    const thirdDescriptionProjectRef = useRef<HTMLParagraphElement>(null)
    const thirdTitleDescriptionProjectRef = useRef<HTMLHeadingElement>(null)
    const fourDescriptionProjectRef = useRef<HTMLParagraphElement>(null)
    const linkProjectRef = useRef<HTMLAnchorElement>(null)

    // Scroll top
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    // Load project by slug
    useEffect(() => {
        if (slug) {
            const project = myProjects.find((p) => p.slug === slug)
            setMyProject(project ?? null)
        }
    }, [slug])

    // Project exists ?
    useEffect(() => {
        setHaveProject(myProject !== null)
    }, [myProject])

    // GSAP animations
    useEffect(() => {
        if (haveProject) {
            revealText(headerProjectRef.current, animationDirection.TOLEFT, 0.1, 0.5)
            revealText(firstDescriptionProjectRef.current, animationDirection.TORIGHT, 0.7, 0.5)
            revealText(firstTitleDescriptionProjectRef.current, animationDirection.TOLEFT, 0.2, 0.5)
            revealText(secondDescriptionProjectRef.current, animationDirection.TORIGHT, 0.3, 0.5)
            revealText(secondTitleDescriptionProjectRef.current, animationDirection.TOLEFT, 0.4, 0.5)
            revealText(thirdDescriptionProjectRef.current, animationDirection.TORIGHT, 0.5, 0.5)
            revealText(thirdTitleDescriptionProjectRef.current, animationDirection.TOLEFT, 0.6, 0.5)
            revealText(fourDescriptionProjectRef.current, animationDirection.TORIGHT, 0.7, 0.5)
            revealText(linkProjectRef.current, animationDirection.TOLEFT, 0.8, 0.5)
        }
    }, [haveProject])

    return (
        <div id="myProject" className="page">
            <div className="blob-container">
                <div
                    className={`image-container ${
                        myProject?.isMediaDesktop ? 'container-desktop' : 'container-mobile'
                    }`}
                >
                    {myProject?.images.map((image, index) => (
                        <div className="image" key={index}>
                            <Image alt={image.alt} src={image.src} width={200} height={100}/>
                            <Image alt={image.alt} src={image.src} width={200} height={100}/>
                        </div>
                    ))}
                </div>
            </div>

            {haveProject && myProject ? (
                <div className="projectInfo-container">
                    <div className="projectInfo-header" ref={headerProjectRef}>
                        <Image alt={myProject.title} src={myProject.logo} width={48} height={48}/>
                        <h1>{myProject.title}</h1>
                    </div>

                    <div className="projectInfo-description">
                        <p ref={firstDescriptionProjectRef}>{myProject.longDescription}</p>
                        <h3 ref={firstTitleDescriptionProjectRef}>Développement:</h3>
                        <p ref={secondDescriptionProjectRef}>{myProject.job}</p>
                        <h3 ref={secondTitleDescriptionProjectRef}>Outils:</h3>
                        <p ref={thirdDescriptionProjectRef}>{myProject.tools}</p>
                        <h3 ref={thirdTitleDescriptionProjectRef}>En vrac:</h3>
                        <p ref={fourDescriptionProjectRef}>{myProject.other}</p>

                        {myProject.link && (
                            <a
                                ref={linkProjectRef}
                                href={myProject.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-default btn-darkBlue"
                            >
                                Visiter le site
                            </a>
                        )}

                        {myProject.github && (
                            <a
                                ref={linkProjectRef}
                                href={myProject.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-default btn-darkBlue"
                            >
                                Lien Github
                            </a>
                        )}
                    </div>
                </div>
            ) : (
                <div className="projectInfo-container">
                    Aucun projet pour le slug : <b>{slug}</b>
                </div>
            )}
        </div>
    )
}

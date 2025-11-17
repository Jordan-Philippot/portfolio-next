'use client'

import {useEffect, useRef} from 'react'

// ----- Components -----
import PresentationComponent from '../components/home/presentation/Presentation'
import ProjectsComponent from '../components/home/myProjects/Projects'
import AboutComponent from '../components/home/about/About'
import ContactMeComponent from '../components/home/contactMe/contactMe'

// ----- Packages -----
import gsap, {Power2} from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'


export default function Home() {

    // ----- Refs -----
    const PresentationComponentRef = useRef<HTMLDivElement>(null)
    const ProjectsComponentRef = useRef<HTMLDivElement>(null)
    const AboutComponentRef = useRef<HTMLDivElement>(null)
    const ContactMeComponentRef = useRef<HTMLDivElement>(null)

    gsap.registerPlugin(ScrollTrigger)

    useEffect(() => {
        gsap.to('.blob', {visibility: 'visible', delay: 0.3})
    }, [])

    // ----- Title animation -----
    useEffect(() => {
        const titles = document.querySelectorAll<HTMLHeadingElement>('h2')
        titles.forEach((title) => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: title,
                    start: 'top-=700',
                    toggleActions: 'play none none reverse',
                    end: () => `+=${title.clientHeight / 2}`,
                    markers: false,
                },
            })
            tl.fromTo(title, {opacity: 0}, {opacity: 1, ease: Power2.easeOut, duration: 1})
        })
    }, [])

    // ----- Scroll to hash -----
    useEffect(() => {
        if (typeof window === 'undefined') return

        const hash = window.location.hash.replace('#', '')

        switch (hash) {
            case 'home':
                PresentationComponentRef.current?.scrollIntoView()
                break
            case 'about':
                AboutComponentRef.current?.scrollIntoView()
                break
            case 'projects':
                ProjectsComponentRef.current?.scrollIntoView()
                break
            case 'contact':
                ContactMeComponentRef.current?.scrollIntoView()
                break
        }
    }, [])

    // ----- Scroll detection for About section -----
    useEffect(() => {
        const handleScroll = () => {
            if (PresentationComponentRef.current && AboutComponentRef.current) {
                const presentationHeight = PresentationComponentRef.current.offsetHeight
                const aboutHeight = AboutComponentRef.current.offsetHeight
                const scrollY = window.scrollY

                if (
                    scrollY > presentationHeight - window.innerHeight + 101 &&
                    scrollY < presentationHeight - window.innerHeight + 101 + aboutHeight
                ) {
                    //  setIsScrolledAboutUs('true')
                } else {
                    //   setIsScrolledAboutUs('false')
                }
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <div id="homepage" className="page">
            {/* ----- PRESENTATION ----- */}
            <PresentationComponent PresentationComponentRef={PresentationComponentRef}/>

            {/* ----- ABOUT ME ----- */}
            <AboutComponent AboutComponentRef={AboutComponentRef}/>

            {/* ----- MY PROJECTS ----- */}
            <ProjectsComponent ProjectsComponentRef={ProjectsComponentRef}/>

            {/* ----- CONTACT ME ----- */}
            <ContactMeComponent ContactMeComponentRef={ContactMeComponentRef}/>
        </div>
    )
}

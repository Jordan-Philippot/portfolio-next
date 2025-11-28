import React, {useEffect, useState} from 'react'

// Packages
import gsap, {Power1, Power4} from 'gsap';

// Images
import EllipseLogo from '@/public/images/logo.webp'

// Components
import Cursor from './Cursor';
import Image from "next/image";

export default function Loader() {
    const [loaded, setLoaded] = useState(false)

    /* ----- On text hover, change scale cursor ----- */
    const blobCursor = () => {
        const CURSOR = document.querySelector<HTMLDivElement>(".cursor-dot-outline");
        const LINKS = document.querySelectorAll<HTMLParagraphElement>("p");

        if (!CURSOR) return;
        const setCursorHover = () => CURSOR.style.transform = 'scale(2.5)';
        const removeCursorHover = () => CURSOR.style.transform = '';
        LINKS.forEach(link => link.addEventListener('mouseover', setCursorHover));
        LINKS.forEach(link => link.addEventListener('mouseleave', removeCursorHover));
    };

    useEffect(() => {
        setLoaded(true)

        gsap.fromTo('#dev', {x: -500, opacity: 0}, {x: 0, opacity: 1, duration: 2, ease: Power4.easeOut})
        gsap.fromTo('#fullstack', {x: 500, opacity: 0}, {x: 0, opacity: 1, duration: 2, ease: Power4.easeOut})
    }, [])


    useEffect(() => {
        if (loaded) {
            blobCursor()
        }
    }, [loaded])


    return (
        <div id="loader">

            <Cursor/>

            {/* ----- Blob on center ----- */}
            <div id="blob-white-animated"></div>

            <div id="dev" className="title-loader">
                <p className="glitch-text">Développeur</p>
            </div>

            <div id="fullstack" className="title-loader">
                <p className="glitch-text">Fullstack</p>
            </div>

            <Image
                src={EllipseLogo}
                alt="logo Jordan Philipot développeur web fullstrack react symfony"
                id="loader-logo"
                width={80}
                height={80}
                loading="eager"
            />

            <div id="flash"></div>

            <div id="hole">
                {/* ----- Animation ----- */}
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
            </div>
        </div>
    )
}

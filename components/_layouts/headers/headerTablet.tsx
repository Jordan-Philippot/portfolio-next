'use client'

import React, {useState, useEffect} from 'react'
import gsap from 'gsap'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '../../../images/logo.png'

export default function HeaderTablet() {
    const [nav, setNav] = useState<boolean>(false)

    // Toggle navbar open/close
    const toggledNavbar = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>): void => {
        e.preventDefault()
        setNav(prev => !prev)
    }

    useEffect(() => {
        const menu = document.getElementById('navbarNavDropdown')
        const btn = document.getElementById('navbar-toggler')

        const spans = document.querySelectorAll<HTMLSpanElement>('.toggler-span')
        const navElement = document.querySelector<HTMLElement>('nav')

        if (!menu || !navElement || spans.length === 0) return

        if (nav) {
            // Open menu
            gsap.set(menu, {display: 'flex'})
            gsap.to(menu, {opacity: 1, duration: 0.5})
            gsap.to(navElement, {backgroundColor: 'white', duration: 0.2})
            gsap.to(spans, {backgroundColor: 'black', duration: 0.2})
        } else {
            // Close menu
            gsap.to(menu, {
                opacity: 0, duration: 0.3, onComplete: () => {
                    gsap.set(menu, {display: 'none'})
                }
            })
            gsap.to(navElement, {backgroundColor: 'transparent', duration: 0.5})
            gsap.to(spans, {backgroundColor: 'white', duration: 0.5})
        }
    }, [nav])

    return (
        <div id="headerTablet">
            <nav className="navbar navbar-expand-xl">
                {/* ----- Logo ----- */}
                <Link className="navbar-brand" href="/">
                    <Image src={Logo} alt="Logo Jordan Philippot développeur fullstack" width={48} height={48}/>
                </Link>

                {/* ----- Button toggled responsive ----- */}
                <button
                    onClick={toggledNavbar}
                    className="navbar-toggler"
                    type="button"
                    aria-controls="navbarNavDropdown"
                    aria-expanded={nav}
                    aria-label="Toggle navigation"
                >
                    <span className="toggler-span"></span>
                    <span className="toggler-span"></span>
                    <span className="toggler-span"></span>
                </button>

                {/* ----- Dropdown on click ----- */}
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav mr-auto">
                        <div className="dropdown-divider"></div>
                        <li className="nav-item">
                            <Link href="/#home" onClick={toggledNavbar}>
                                Accueil
                            </Link>
                        </li>
                        <div className="dropdown-divider" id="assistant-hr"></div>
                        <li className="nav-item">
                            <Link href="/#about" onClick={toggledNavbar}>
                                À propos
                            </Link>
                        </li>
                        <div className="dropdown-divider" id="assistant-hr"></div>
                        <li className="nav-item">
                            <Link href="/#projects" onClick={toggledNavbar}>
                                Projets
                            </Link>
                        </li>
                        <div className="dropdown-divider"></div>
                        <li className="nav-item">
                            <Link href="/#contact" onClick={toggledNavbar}>
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
                {/* ----- End Dropdown ----- */}
            </nav>
        </div>
    )
}

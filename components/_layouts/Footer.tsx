"use client";

import {useRef} from "react";
import Link from "next/link";
import Image from "next/image";

// Images
import Logo from "../../images/logo.png";

// Packages
import gsap from "gsap";

export default function Footer() {
    const footerLogo = useRef<HTMLDivElement | null>(null);
    const footerHidden = useRef<HTMLDivElement | null>(null);

    const clickLogo = () => {
        if (!footerLogo.current || !footerHidden.current) return;

        const tl = gsap.timeline();
        tl.to(footerLogo.current, {y: "100%", duration: 0.3});
        tl.to(footerLogo.current, {display: "none", duration: 0, delay: 0.5});
        tl.to(footerHidden.current, {
            y: 0,
            display: "inline-block",
            duration: 0.7,
            ease: "ease-in-out",
        });
    };

    return (
        <footer>
            {/* ----- LOGO ANIMATION ----- */}
            <div id="logo-animation" onClick={clickLogo} ref={footerLogo}>
                <div>
                    <Image
                        alt="Aliz Logo"
                        src={Logo}
                        width={150}
                        height={150}
                        priority
                    />
                </div>
            </div>

            <div id="footer-hidden" ref={footerHidden} style={{display: "none"}}>
                <ul>
                    <li>
                        <Link href="/#home">Accueil</Link>
                    </li>

                    <li>
                        <Link href="/#about">À propos</Link>
                    </li>

                    {/* ----- LOGO CENTER ----- */}
                    <li>
                        <Link href="/#home">
                            <Image
                                alt="Aliz Logo"
                                src={Logo}
                                width={150}
                                height={150}
                            />
                        </Link>
                    </li>

                    <li>
                        <Link href="/#projects">Projets</Link>
                    </li>

                    <li>
                        <Link href="/#contact">Contact</Link>
                    </li>
                </ul>
            </div>
        </footer>
    );
}

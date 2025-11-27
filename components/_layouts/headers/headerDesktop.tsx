import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from '@/public/images/logo.webp'

export default function HeaderDesktop() {
    return (
        <div id="headerDesktop">
            <nav className="navbar navbar-expand-xl">
                {/* ----- Logo ----- */}
                <Link className="navbar-brand" href="/">
                    <Image alt={"Logo Jordan Philippot"} src={Logo} width={60} height={60}/>
                </Link>

                <div className="collapse navbar-collapse">
                    {/* ----- Nav right ----- */}
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link href={"/#home"}>Accueil</Link>
                        </li>

                        <li className="nav-item">
                            <Link href={"/#about"}>À propos</Link>
                        </li>

                        <li className="nav-item">
                            <Link href={"/#projects"}>Projets</Link>
                        </li>

                        <li className="nav-item">
                            <Link href={"/#contact"}>Contact</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

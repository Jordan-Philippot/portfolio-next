import React from "react";

// ----- Images -----
import Profile from "@/public/images/image_profil-removebg-preview.png";
import Image from "next/image";
import Cv from "@/components/icons/Cv";
import Send from "@/components/icons/Send";
import Phone from "@/components/icons/Phone";
import LinkedIn from "@/components/icons/LinkedIn";
import Github from "@/components/icons/Github";

interface PresentationProps {
    ref: React.Ref<HTMLDivElement>,
}

export default function FirstBlock({ref}: PresentationProps) {
    return (
        <section
            id="home"
            className={`container-fluid`}
            ref={ref}
        >
            <div className="content">
                <div className="blob">
                    <Image src={Profile} alt="profile" width={400} height={400}/>
                </div>

                <div className="reveal-text">
                    <h1>
                        <strong>Jordan Philippot</strong>
                        <br/>
                        Développeur Fullstack depuis 5 ans <b>&#123;React-Next-Node&#125;</b>, expertise Front-end
                        <br/>
                        concepteur d'applications web <b>&#123;Epitech&#125;</b>.
                    </h1>
                    <div id="home-contact">
                        <a
                            href={process.env.NEXT_PUBLIC_GITHUB_LINK}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Github/>
                        </a>
                        <a
                            href={process.env.NEXT_PUBLIC_LINKEDIN_LINK}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <LinkedIn/>
                        </a>
                        <a href={"/#contact"}>
                            <Phone/>
                        </a>
                        <a href={"/#contact"}>
                            <Send/>
                        </a>
                        <a href={"/images/[Resume] Jordan - Fullstack.pdf"} download>
                            <Cv/>
                        </a>
                    </div>
                </div>
            </div>

            {/* TEXT BACKGROUND */}
            <div className="text-background">
                <p id="text-background-react">REACT</p>
                <p id="text-background-node">NODE.JS</p>
            </div>
        </section>
    );
}

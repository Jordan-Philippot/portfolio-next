import {useEffect, useState, useRef} from "react"

// ----- Packages -----
import gsap, {Power1} from "gsap"
import {Project} from "@/lib/constants/projects";
import {useRouter} from "next/navigation";

interface OneProjectProps {
    project: Project
}

export default function OneProject({project}: OneProjectProps) {
    const router = useRouter()

    // ----- Responsive -----
    const [isDesktop, setIsDesktop] = useState<boolean>(window.innerWidth > 768)

    useEffect(() => {
        const handleResize = () => {
            setIsDesktop(window.innerWidth > 768)
        }
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [])

    // ----- Refs -----
    const hoverContainerRef = useRef<HTMLDivElement>(null)
    const imageProjectRef = useRef<HTMLDivElement>(null)
    const infoProjectRef = useRef<HTMLDivElement>(null)
    const blockInfoRef = useRef<HTMLDivElement>(null)

    // ----- Animations -----
    const revealImage = () => {
        if (!hoverContainerRef.current || !imageProjectRef.current || !infoProjectRef.current || !blockInfoRef.current) return

        const tl = gsap.timeline()
        tl.to(hoverContainerRef.current, {
            display: "flex",
            duration: 0.1,
            ease: Power1.easeInOut,
        })
        tl.to(imageProjectRef.current, {
            display: "block",
            scale: 1,
            duration: 0.3,
            ease: Power1.easeInOut,
        })
        tl.to(imageProjectRef.current, {
            borderRadius: "6px",
            width: isDesktop ? "100%" : "99vw",
            duration: 0.2,
            ease: Power1.easeInOut,
        })
        tl.to(infoProjectRef.current, {
            display: "block",
            x: "0",
            delay: 0.3,
            duration: 0.2,
            ease: Power1.easeIn,
        })
        tl.to(hoverContainerRef.current, {
            boxShadow: "15px 15px 15px 1px rgba(255, 255, 255, 0.3)",
            duration: 0.2,
            ease: Power1,
        })
        tl.to(blockInfoRef.current, {
            opacity: 1,
            y: 0,
            duration: 0.2,
            ease: Power1,
        })
    }

    const hideImage = () => {
        const tl = gsap.timeline();
        tl.to(hoverContainerRef.current, {display: "none", duration: 0.2, ease: Power1});
    };

    return (
        <div
            className="oneProject"
            onMouseEnter={revealImage}
            onMouseLeave={hideImage}
            onClick={() => router.push("/project/" + project?.slug)}
        >
            <div className="hoverContainer" ref={hoverContainerRef}>
                <div className="imageProject" ref={imageProjectRef}>
                    <div className="infoProject" ref={infoProjectRef}>
                        <div className="container-info" ref={blockInfoRef}>
                            <h3>{project?.titleHover}</h3>
                            <p>{project?.shortDescription}</p>
                            <b>{project?.tools}</b>
                        </div>
                    </div>
                </div>
            </div>
            <p className="titleProject">{project?.title}</p>
        </div>
    )
}

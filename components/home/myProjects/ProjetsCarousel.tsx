"use client";
import {useEffect, useRef, useState} from "react";
import gsap from "gsap";
import Draggable from "gsap/Draggable";

import type {Project} from "@/lib/constants/projects";
import Link from "next/link";
import ArrowRight from "@/components/icons/ArrowRight";

gsap.registerPlugin(Draggable);

interface CarouselProps {
    slides: Project[];
}

export default function GsapCarousel({slides}: CarouselProps) {
    const cardsRef = useRef<HTMLDivElement[]>([]);
    const dragInstance = useRef<Draggable[]>(null);
    const proxyRef = useRef<HTMLDivElement>(null);

    const [index, setIndex] = useState(2);
    const count = slides.length;

    const goTo = (newIndex: number) => {
        const idx = (newIndex + count) % count;
        setIndex(idx);
        layout(idx);
    };

    const layout = (center: number) => {
        cardsRef.current.forEach((card, i) => {
            if (!card) return;

            let rel = i - center;
            if (rel > count / 2) rel -= count;
            if (rel < -count / 2) rel += count;

            const abs = Math.abs(rel);
            const isCenter = rel === 0;

            card.dataset.center = isCenter ? "true" : "false";

            gsap.to(card, {
                duration: 0.55,
                x: rel * 220,
                y: abs * 12,
                scale: isCenter ? 1 : abs === 1 ? 0.86 : 0.7,
                rotateY: rel * 2,
                opacity: abs >= 3 ? 0 : 1,
                zIndex: abs >= 3 ? 0 : 100 - abs,
                filter: abs >= 3 ? "grayscale(1) blur(2px)" : "none",
                transformPerspective: 1000,
                transformOrigin: "50% 50%",
                ease: "power3.out",
            });
        });

    };

    useEffect(() => {
        layout(index);

        if (!proxyRef.current) {
            proxyRef.current = document.createElement("div");
        }

        dragInstance.current = Draggable.create(proxyRef.current, {
            trigger: ".carousel",
            type: "x",
            minimumMovement: 6,
            onPress(this: any) {
                this.startX = this.pointerX;
            },
            onRelease(this: any) {
                const delta = this.pointerX - this.startX;
                const threshold = 70;

                if (delta < -threshold) goTo(index + 1);
                else if (delta > threshold) goTo(index - 1);
            }
        });

        return () => {
            dragInstance.current?.forEach((d: any) => d.kill());
        };
    }, [index]);

    return (
        <div className="carousel">
            {slides.map((slide, i) => (
                <div className="card-wrapper"
                     key={i}
                     ref={(el: HTMLDivElement) => {
                         cardsRef.current[i] = el;
                     }}
                >
                    <div
                        className="card"
                        style={{backgroundImage: `url(${slide.background})`}}
                    >
                        <div className="overlay"/>
                        <div className="meta">
                            <h3>{slide.title}</h3>

                            <p>{slide.shortDescription}</p>
                            <Link href={'/projets/' + slide.slug}><ArrowRight/></Link>
                            {/* <p>{slide.tools}</p>*/}

                        </div>
                    </div>

                    <div
                        className="reflection"
                        style={{backgroundImage: `url(${slide.background})`}}
                    />
                </div>
            ))}
        </div>
    );
}

'use client'

import React, {useState, useEffect, useRef} from 'react'

// ----- Packages -----
import gsap, {Power4} from 'gsap'
import emailjs, {init} from '@emailjs/browser'

// ----- Images -----
import Spiral from '@/public/images/spiral.svg'

// ----- Component -----
import ModalContact from './ModalContact'
import Image from "next/image";
import Github from "@/components/icons/Github";
import LinkedIn from "@/components/icons/LinkedIn";
import Phone from "@/components/icons/Phone";
import Send from "@/components/icons/Send";

interface ContactMeProps {
    ref: React.Ref<HTMLDivElement> | null,
}

export default function ContactMe({ref}: ContactMeProps) {
    init(process.env.NEXT_PUBLIC_EMAILJS_PK as string)

    const [openModal, setOpenModal] = useState<boolean>(false)
    const clickMeRef = useRef<HTMLDivElement>(null)
    const [phone, setPhone] = useState<string>('')
    const [email, setEmail] = useState<string>('')

    useEffect(() => {
        gsap.fromTo('#spiral', {rotation: 0}, {rotation: 360, duration: 20, repeat: -1})
    }, [])

    const data = {
        email,
        phone,
    }

    const showContact = () => {
        const tl = gsap.timeline()
        if (clickMeRef.current) {
            gsap.fromTo(
                clickMeRef.current,
                {opacity: 1, display: 'block', scale: 1},
                {opacity: 0, display: 'none', scale: 0.4, duration: 1}
            )
        }

        gsap.fromTo(
            '#secondContact',
            {display: 'none', scale: 0.3},
            {display: 'flex', duration: 1, scale: 1, delay: 0.8, ease: Power4.easeOut}
        )

        tl.fromTo('#spiral', {rotation: 0}, {rotation: 360, duration: 1.5, scale: 0, delay: 1})
        tl.to('#blob-white-animated', {
            width: '400px',
            height: '400px',
            top: 'calc(50% - 220px)',
            left: 'calc(50% - 200px)',
            duration: 0.8,
        })

        tl.set('#spiral', {display: 'none'})

        if (window.innerWidth > 1200) {
            gsap.fromTo(
                '#firstContact',
                {display: 'none', top: '50%', left: '50%', scale: 0.3},
                {display: 'flex', top: '35%', left: '42%', scale: 1, duration: 2, delay: 1.5, ease: Power4.easeOut}
            )
            gsap.fromTo(
                '#thirdContact',
                {display: 'none', top: '50%', left: '50%', scale: 0.3},
                {display: 'flex', top: '35%', left: '58%', scale: 1, duration: 2, delay: 1.5, ease: Power4.easeOut}
            )
            gsap.to('#firstContact', {left: '34%', duration: 2, delay: 2, ease: Power4.easeOut})
            gsap.to('#thirdContact', {left: '66%', duration: 2, delay: 2, ease: Power4.easeOut})
        } else {
            gsap.fromTo(
                '#firstContact',
                {display: 'none', top: '50%', scale: 0.3},
                {display: 'flex', top: '25%', scale: 1, duration: 1, delay: 0.8, ease: Power4.easeOut}
            )
            gsap.fromTo(
                '#thirdContact',
                {display: 'none', top: '50%', scale: 0.3},
                {display: 'flex', top: '75%', scale: 1, duration: 1, delay: 0.8, ease: Power4.easeOut}
            )
            gsap.to('#contact', {minHeight: '1300px', delay: 1.3})
        }
    }

    const contactSubmit = () => {
        emailjs
            .send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_GMAIL!,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_CONTACT!,
                data
            )
            .then(
                (response) => {
                    console.log('SUCCESS!', response.status, response.text)
                    setOpenModal(true)
                },
                (error) => {
                    console.log('FAILED...', error)
                }
            )
    }

    return (
        <section id="contact" className={`page`} ref={ref}>
            <div id="blob-white-animated"></div>

            {openModal && <ModalContact setOpenModal={setOpenModal}/>}

            <h2>Contact</h2>
            <Image src={Spiral} alt="spiral" id="spiral" width={500} height={500}/>

            <div id="clickMe" onClick={showContact} ref={clickMeRef}>
                <div className="btn-whatsapp-pulse">
                    <Phone width={100} height={100}/>
                </div>
                <p>Répondre</p>
            </div>

            <div className="contact-type" id="firstContact">
                <div className="contact-flex">
                    <Send width={40} height={40}/>
                    <p>jordan.philippot.pro@gmail.com</p>
                </div>
                <div className="contact-flex">
                    <Phone width={40} height={40}/>
                    <p>07 81 19 74 38</p>
                </div>
            </div>

            <div className="contact-type" id="secondContact">
                <div className="contact-flex">
                    <Phone width={40} height={40}/>
                    <input
                        value={phone}
                        id="phone"
                        type="tel"
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="Téléphone"
                        className="form-controls"
                        required
                    />
                </div>

                <div className="contact-flex">
                    <Send width={40} height={40}/>
                    <input
                        value={email}
                        id="email"
                        type="email"
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                        className="form-controls"
                        required
                    />
                </div>

                <button onClick={contactSubmit} className="btn-default btn-black">
                    Envoyer
                </button>
            </div>

            <div className="contact-type" id="thirdContact">
                <div className="contact-flex">
                    <a
                        href={process.env.NEXT_PUBLIC_GITHUB_LINK}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact-social-media"
                    >
                        <Github width={40} height={40}/>
                    </a>
                </div>
                <div className="contact-flex">
                    <a
                        href={process.env.NEXT_PUBLIC_LINKEDIN_LINK}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact-social-media"
                    >
                        <LinkedIn width={40} height={40}/>
                    </a>
                </div>
            </div>
        </section>
    )
}

import React, {useState, useEffect, useRef} from 'react'

// ----- Packages -----
import gsap, {Power4} from 'gsap'
import emailjs, {init} from '@emailjs/browser'

// ----- Images -----
import PhoneSvg from '../../../images/contact/phone.svg'
import SendSvg from '../../../images/contact/send.svg'
import GithubSvg from '../../../images/contact/github.svg'
import LinkedinSvg from '../../../images/contact/linkedin.svg'
import Spiral from '../../../images/spiral.svg'

// ----- Component -----
import ModalContact from './ModalContact'
import Image from "next/image";

interface ContactMeProps {
    ContactMeComponentRef: React.Ref<HTMLSectionElement>
}

export default function ContactMe({ContactMeComponentRef}: ContactMeProps) {
    init(process.env.REACT_APP_EMAILJS_PK)

    const [openModal, setOpenModal] = useState(false)
    const clickMeRef = useRef<HTMLDivElement>(null)
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')

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
                process.env.REACT_APP_EMAILJS_SERVICE_GMAIL!,
                process.env.REACT_APP_EMAILJS_TEMPLATE_CONTACT!,
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
        <section id="contact" className="page" ref={ContactMeComponentRef}>
            <div id="blob-white-animated"></div>

            {openModal && <ModalContact setOpenModal={setOpenModal}/>}

            <h2>Contact</h2>
            <Image src={Spiral} alt="spiral" id="spiral" width={500} height={500}/>

            <div id="clickMe" onClick={showContact} ref={clickMeRef}>
                <div className="btn-whatsapp-pulse">
                    <Image src={PhoneSvg} alt="téléphone" width={100} height={100}/>
                </div>
                <p>Répondre</p>
            </div>

            <div className="contact-type" id="firstContact">
                <div className="contact-flex">
                    <Image src={SendSvg} alt="arobase" width={40} height={40}/>
                    <p>jordan.philippot.pro@gmail.com</p>
                </div>
                <div className="contact-flex">
                    <Image src={PhoneSvg} alt="téléphone" width={40} height={40}/>
                    <p>07 81 19 74 38</p>
                </div>
            </div>

            <div className="contact-type" id="secondContact">
                <div className="contact-flex">
                    <Image src={PhoneSvg} alt="formulaire" width={40} height={40}/>
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
                    <Image src={SendSvg} alt="formulaire" width={40} height={40}/>
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
                        href={process.env.REACT_APP_GITHUB_LINK}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact-social-media"
                    >
                        <Image src={GithubSvg} alt="github" width={40} height={40}/>
                    </a>
                </div>
                <div className="contact-flex">
                    <a
                        href={process.env.REACT_APP_LINKEDIN_LINK}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact-social-media"
                    >
                        <Image src={LinkedinSvg} alt="linkedin" width={40} height={40}/>
                    </a>
                </div>
            </div>
        </section>
    )
}

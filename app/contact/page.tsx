'use client'

import {useRef} from 'react'

// ----- Components -----
import ContactMeComponent from '@/components/home/contactMe/ContactMe'


export default function Contact() {
    const ContactMeComponentRef = useRef<HTMLDivElement>(null)


    return (
        <ContactMeComponent ref={ContactMeComponentRef}/>
    )
}

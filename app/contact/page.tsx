import ContactMeComponent from '@/components/home/contactMe/ContactMe'
import {generateJsonLD, generateMetadata} from '@/lib/seo'
import Script from 'next/script'


export const metadata = generateMetadata({
    title: "Contact – Jordan Philippot | Développeur Full-Stack JavaScript & PHP",
    description: "Contactez moi pour vos projets web en JavaScript, Node.js ou PHP Symfony. Développeur Full-Stack avec 5 ans d'expérience.",
    path: "/contact",
    keywords: [
        "contact développeur fullstack",
        "javascript",
        "php",
        "react",
        "node js",
        "symfony",
    ],
})

export default function Contact() {
    return (
        <>
            <ContactMeComponent ref={null}/>

            {/* JSON-LD */}
            <Script
                id="ld-contact"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: generateJsonLD("AboutPage", {
                        title: metadata.title as string,
                        description: metadata.description as string,
                        path: "/contact",
                        image: "/images/logo.webp",
                        sameAs: [
                            process.env.NEXT_PUBLIC_LINKEDIN_LINK as string,
                            process.env.NEXT_PUBLIC_GITHUB_LINK as string,
                        ],
                    }),
                }}
            />
        </>
    )
}

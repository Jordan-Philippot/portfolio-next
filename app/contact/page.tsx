import ContactMeComponent from '@/components/home/contactMe/ContactMe'
import {CustomMetadata, generateJsonLD, generateMetadata} from '@/lib/seo'
import Script from 'next/script'


export const metadata: CustomMetadata = generateMetadata({
    title: "Contact – Jordan Philippot, Développeur Full-Stack JavaScript",
    description: "Contactez moi pour vos projets web en JavaScript (React, Next.js, Node.js). Développeur Full-Stack avec 5 ans d'expérience.",
    path: "/contact",
    keywords: [
        "contact développeur fullstack",
        "javascript",
        "php",
        "react",
        "node",
        "symfony",
        "nextJs",
        "next",
        "node",
        "lille"
    ],
})

export default function Contact() {
    return (
        <>
            <ContactMeComponent sectionRef={null}/>

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

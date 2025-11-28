import Script from 'next/script'
import {CustomMetadata, generateJsonLD, generateMetadata} from '@/lib/seo'

export const metadata: CustomMetadata = generateMetadata({
    title: "Mentions Légales – Jordan Philippot",
    description: "Mentions légales du site jordan-philippot.fr, développé par Jordan Philippot, développeur Full-Stack JavaScript & PHP.",
    path: "/mentions-legales",
    keywords: ["mentions légales", "contact", "développeur fullstack", "javascript", "php"],
})

export default function LegalNotice() {
    return (
        <section className="page" id={"legal-notice-page"}>

            <h1>Mentions Légales</h1>
            <p>
                Le site <strong>jordan-philippot.fr</strong> est édité et développé par <strong>Jordan
                Philippot</strong>, développeur Full-Stack JavaScript & PHP.
            </p>
            <p>
                Adresse e-mail : <a href="mailto:jordan.philippot.pro@gmail.com">jordan.philippot.pro@gmail.com</a>
            </p>
            <p>
                Hébergement : <a href="https://vercel.com/" target={"_blank"}
                                 rel="noopener noreferrer"><strong>Vercel</strong></a>
            </p>

            <p>
                Données personnelles : aucune donnée utilisateur n'est stockée sur le site. Le formulaire de contact
                permet uniquement d'envoyer un email à l'adresse ci-dessus, via le package <strong>mailjs</strong>.
            </p>
            <p>
                Propriété intellectuelle : tout le contenu du site, incluant textes, images et code, est la
                propriété exclusive de Jordan Philippot.
            </p>

            {/* JSON-LD */}
            <Script
                id="ld-legal-notice"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: generateJsonLD("AboutPage", {
                        title: metadata.title as string,
                        description: metadata.description as string,
                        path: "/mentions-legales",
                        image: "/images/logo.webp",
                        sameAs: [
                            "https://www.linkedin.com/in/jordan-philippot",
                            "https://github.com/jordanphilippot",
                        ],
                    }),
                }}
            />
        </section>
    )
}

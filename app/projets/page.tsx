import {generateMetadata, generateJsonLD, CustomMetadata} from "@/lib/seo";
import ProjectsComponent from "@/components/home/myProjects/Projects";
import Script from "next/script";
import {myProjects} from "@/lib/data/projects";


export const metadata: CustomMetadata = generateMetadata({
    title: "Mes projets – Jordan Philippot",
    description:
        "Découvrez une sélection de projets réalisés : e-commerce, CMS interne, Saas, plateformes professionnelles et outils sur mesure.",
    path: "/projects",
    keywords: [
        "projets web",
        "développement web",
        "javascript",
        "react",
        'next',
        "node",
        "symfony",
        "développeur fullstack",
        "métropole lilloise",
        "lille"
    ],
});

export default function Projects() {
    return (
        <>
            <div id="projects" className="page">
                <ProjectsComponent ref={null}/>
            </div>

            {/* JSON-LD Structured Data */}
            <Script
                id="ld-projects"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: generateJsonLD("ItemList", {
                        title: metadata.title as string,
                        description: metadata.description as string,
                        path: metadata.path as string,
                        items: myProjects.map((project) => ({
                            name: project.title,
                            description: project.longDescription,
                            url: `/my-project/${project.slug}`,
                            image: project.images?.[0]?.src || "/images/logo.webp"
                        })),
                    }),
                }}
            />
        </>
    );
}

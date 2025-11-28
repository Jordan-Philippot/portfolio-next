import {Metadata} from "next";
import {generateMetadata as buildMeta, generateJsonLD} from "@/lib/seo";
import {myProjects} from "@/lib/data/projects";
import Script from "next/script";
import ProjectClientComponent from "@/app/projets/[slug]/ProjectClientComponent";

interface Props {
    params: { slug: string }
}

export async function generateMetadata({params}: Props): Promise<Metadata> {
    const project = myProjects.find(p => p.slug === params.slug);

    if (!project) {
        return buildMeta({
            title: "Projet introuvable",
            description: "Ce projet n’existe pas ou n’a pas été trouvé.",
            path: `/my-project/${params.slug}`,
        });
    }

    return buildMeta({
        title: `${project.title} – Projet réalisé par Jordan Philippot`,
        description: project.longDescription.slice(0, 155),
        path: `/my-project/${project.slug}`,
        keywords: [
            "développeur",
            "javascript",
            "fullstack",
            project.title,
            project.tools,
            project.job,
        ],
        image: project.images?.[0]?.src || "/images/logo.webp",
    });
}

export default function Page({params}: Props) {
    const project = myProjects.find(p => p.slug === params.slug);

    return (
        <>
            <ProjectClientComponent slug={params.slug}/>

            {project && (
                <Script
                    id="ld-breadcrumb"
                    type="application/ld+json"
                    strategy="afterInteractive"
                    dangerouslySetInnerHTML={{
                        __html: generateJsonLD("BreadcrumbList", {
                            title: project.title,
                            description: "",
                            path: `/my-project/${project.slug}`,
                            items: [
                                {name: "Accueil", url: "/"},
                                {name: "Projets", url: "/projects"},
                                {name: project.title, url: `/my-project/${project.slug}`},
                            ],
                        }),
                    }}
                />
            )}
        </>
    );
}



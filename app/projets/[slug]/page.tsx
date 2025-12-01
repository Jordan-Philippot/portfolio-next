'use server'
import {Metadata} from "next";
import {generateMetadata as buildMeta, generateJsonLD} from "@/lib/seo";
import {myProjects} from "@/lib/data/projects";
import Script from "next/script";
import ProjectClientComponent from "@/app/projets/[slug]/ProjectClientComponent";
import {notFound} from "next/navigation";

interface Props {
    params: any
}

export async function generateMetadata({params}: Props): Promise<Metadata | null> {
    const {slug} = await params;

    const project = myProjects.find(p => p.slug === slug);

    if (!project) {
        return null
    }

    return buildMeta({
        title: `${project.title} – Projet réalisé par Jordan Philippot`,
        description: project.longDescription.slice(0, 155),
        path: `/my-project/${project.slug}`,
        keywords: [
            "développeur fullstack",
            "javascript",
            "métropole lilloise",
            project.title,
            project.tools,
            project.job,
        ],
        image: "/images/image_profile.webp",
    });
}

export default async function Page({params}: Props) {
    const param = await params;


    const project = myProjects.find(p => p.slug === param?.slug);

    if (!project) {
        return notFound()
    }

    return (
        <>
            <ProjectClientComponent slug={param?.slug}/>

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



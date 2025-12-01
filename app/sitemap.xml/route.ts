import {myProjects} from "@/lib/data/projects";
import type {ProjectType} from "@/lib/data/projects";

const BASE_URL: string = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000/";

interface Page {
    path: string;
    priority: number;
}

// Static pages
const PAGES: Page[] = [
    {path: "", priority: 1.0},
    {path: "projets", priority: 0.9},
    {path: "mentions-legales", priority: 0.8},
    {path: "contact", priority: 0.8},
];

export async function GET(): Promise<Response> {

    const staticUrls = PAGES.map(
        (page) => `
    <url>
      <loc>${BASE_URL}/${page.path}</loc>
      <priority>${page.priority}</priority>
    </url>`
    ).join("");


    const projectUrls = myProjects.map(
        (project: ProjectType) => `
    <url>
      <loc>${BASE_URL}/projets/${project.slug}</loc>
      <priority>0.9</priority>
    </url>`
    ).join("");

    const xml: string = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
  ${staticUrls}
  ${projectUrls}
</urlset>`;

    return new Response(xml, {
        headers: {
            "Content-Type": "application/xml",
        },
    });
}

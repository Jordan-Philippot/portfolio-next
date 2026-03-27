import "../styles/App.scss";
import React from "react";
import ClientLayout from "@/components/_layouts/clientLayout";
import Head from "next/head";


export default function RootLayout({children}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="fr">
        <Head>
            <link rel="alternate" href="https://jordan-philippot.fr/" hrefLang="fr"/>
            <link rel="canonical" href="https://jordan-philippot.fr/"/>
        </Head>
        <body>
        <ClientLayout>
            {children}
        </ClientLayout>
        </body>
        </html>
    );
}

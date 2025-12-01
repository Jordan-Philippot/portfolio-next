import "../styles/App.scss";
import React from "react";
import ClientLayout from "@/components/_layouts/clientLayout";


export default function RootLayout({children}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="fr">
        <body>
        <ClientLayout>
            {children}
        </ClientLayout>
        </body>
        </html>
    );
}

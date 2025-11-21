'use client'
import React, {ReactNode, useEffect, useRef, useState} from "react";
import Header from "@/components/_layouts/headers/header";
import Footer from "@/components/_layouts/Footer";
import Waves from "@/components/tools/Waves";
import Loader from "@/components/tools/Loader";
import Cursor from "@/components/tools/Cursor";

interface ClientLayoutProps {
    children: ReactNode;
}

export default function ClientLayout({children}: ClientLayoutProps) {
    const [loaded, setLoaded] = useState<boolean>(false)

    const wavesRef = useRef<SVGSVGElement>(null)

    useEffect(() => {
        setTimeout(() => {
            setLoaded(true)
        }, 5000);
    }, [])


    return (
        <>
            {!loaded ?
                <Loader/> :

                <div className="App">
                    <Cursor/>
                    <Header/>
                    {children}
                    <Waves wavesRef={wavesRef}/>
                    <Footer/>
                </div>}
        </>
    )
}
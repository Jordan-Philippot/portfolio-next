'use client'
import React, {ReactNode} from "react";

// Components
import HeaderDesktop from "./headerDesktop";
import HeaderTablet from "./headerTablet";
import {useMediaQuery} from "@/hooks/useMediaQuery";


type ResponsiveWrapperProps = {
    children: ReactNode;
};

function Desktop({children}: ResponsiveWrapperProps) {
    const isDesktop = useMediaQuery("(min-width: 1200px)");
    return isDesktop ? children : null;
}

function Tablet({children}: ResponsiveWrapperProps) {
    const isTablet = useMediaQuery("(max-width: 1199.98px)");
    return isTablet ? children : null;
}

export default function Header() {
    return (
        <header>
            <Desktop>
                <HeaderDesktop/>
            </Desktop>

            <Tablet>
                <HeaderTablet/>
            </Tablet>
        </header>
    );
}
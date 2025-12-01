import React from "react";
import {IconProps} from "@/lib/constants/icon";


const ChevronLeft: React.FC<IconProps> = ({width = 24, height = 24}) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m15 18-6-6 6-6"/>
        </svg>
    );
};

export default ChevronLeft;

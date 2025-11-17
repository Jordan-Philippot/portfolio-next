import React from 'react'
import Link from "next/link";

export default function NotFound() {
    return (
        <div id="notFound" className="page">
            <div className="board">
                <p id="error">
                    error
                </p>
                <p id="code">
                    404
                </p>
                <Link href={"/"}>Revenir à l'accueil</Link>

            </div>
        </div>
    )
}

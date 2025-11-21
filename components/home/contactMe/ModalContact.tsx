import React from 'react'

interface ModalContactProps {
    setOpenModal: (value: boolean) => void
}

export default function ModalContact({setOpenModal}: ModalContactProps) {
    return (
        <div className="modal">
            <button className="close" onClick={() => setOpenModal(false)}>
                &times;
            </button>
            <div className="content">
                <div className="header"> Vos informations ont bien été prises en compte!</div>
                <div className="description">
                    Merci de votre confiance, je vous recontacterai dans les plus brefs délais afin d'échanger sur vos
                    besoins.
                    <br/>
                    À très bientôt!
                </div>
                <button className="btn-default btn-black" onClick={() => setOpenModal(false)}>
                    Fermer
                </button>
            </div>
        </div>
    )
}

import React from 'react'
import { Link } from 'react-router-dom'

export const HeaderBar = () => {
    return (
        <div
            className="header-section text-dark"
            style={{
                backgroundColor: '#FA5901'
            }}
        >
            <div className="container d-flex justify-content-center align-items-center text-center">
                <div
                    className="header-section-content d-flex justify-content-center align-items-center text-center">
                    <p
                        className="header-section-title font-weight-bold font-weight-bold d-flex justify-content-center align-items-center text-center">
                        ¡Aprovecha la oportunidad de ser un líder en su sector!
                    </p>
                    <h5 className="header-section-text mb-0">💪 Ofrecemos un estudio de negocio GRATIS por tiempo limitado para ayudarte a destacar 🚀</h5>

                    <Link
                        to={`/formulario`}
                        className="btn btn-dark header-section-link m-1"
                        style={{
                            fontSize: '18px',
                            padding: '1px'
                        }}
                    >
                        Solicitar el estudio de negocio gratuito
                    </Link>

                </div>
            </div>
        </div>
    )
}

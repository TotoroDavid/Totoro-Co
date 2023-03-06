import React from 'react'
import { ContactPage } from '../components/ContactPage/ContactPage';
import { TeamPage } from '../components/TeamPage/TeamPage';

export const ContactLandingPage = () => {
    return (
        <>
            <header class="bg-light text-center py-5">
                <h1 class="display-4">Totoro & Co</h1>
                <p class="lead">¡Impulsa tu negocio con Totoro & Co! Somos expertos en brindar soluciones de marketing personalizadas para pequeñas y medianas empresas. ¿Quieres lograr un mayor éxito? No esperes más, contáctanos hoy y déjanos ayudarte a alcanzar tus objetivos empresariales.</p>
            </header>
            <ContactPage />

            <section class="cta">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-9 mx-auto text-center">
                            <h2 class="section-heading">Ponte en contacto con nosotros</h2>
                            <p class="mb-5">¿Tienes preguntas sobre nuestros servicios o quieres programar una consulta? ¡No dudes en ponerte en contacto con nosotros!</p>
                            <a class="btn btn-dark btn-xl" href="#contact">Contáctanos</a>
                        </div>
                    </div>
                </div>
            </section>

            <TeamPage />

        </>




    )
}

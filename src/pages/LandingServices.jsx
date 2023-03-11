import React from 'react'
import { ServicesPage } from '../components/ServicesPage/ServicesPage';
import { TestimonialsPage } from '../components/TestimonialsPage/TestimonialsPage';
import { ContactPage } from '../components/ContactPage/ContactPage';

export const LandingServices = () => {

    React.useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <header class="bg-dark py-5">
                <div class="container h-100">
                    <div class="row h-100 align-items-center">
                        <div class="col-lg-12">
                            <h1 class="display-4 text-white text-center">Nuestros servicios</h1>
                            <p class="lead mb-5 text-white text-center">Explora nuestra amplia gama de servicios y descubre cómo podemos ayudarte</p>
                        </div>
                    </div>
                </div>
            </header>

            <ServicesPage />

            <section class="my-5">
                <h2 class="text-center font-weight-bold">Ventajas de elegir nuestros servicios</h2>
                <p class="text-center text-muted my-5">Conoce las razones por las que deberías confiar en nosotros</p>
                <div class="d-flex flex-column flex-lg-row">
                    <div class="p-3 mb-5 mb-lg-0 bg-light rounded">
                        <i class="fas fa-check-circle fa-3x mb-3 text-primary"></i>
                        <h3 class="h5">Calidad garantizada</h3>
                        <p class="text-muted">Ofrecemos servicios de alta calidad con un equipo de profesionales altamente capacitados.</p>
                    </div>
                    <div class="p-3 mb-5 mb-lg-0 bg-light rounded">
                        <i class="fas fa-thumbs-up fa-3x mb-3 text-primary"></i>
                        <h3 class="h5">Satisfacción garantizada</h3>
                        <p class="text-muted">Nos aseguramos de que nuestros clientes estén completamente satisfechos con nuestros servicios.</p>
                    </div>
                    <div class="p-3 mb-5 mb-lg-0 bg-light rounded">
                        <i class="fas fa-clock fa-3x mb-3 text-primary"></i>
                        <h3 class="h5">Entrega a tiempo</h3>
                        <p class="text-muted">Nos comprometemos a entregar nuestros servicios en el plazo acordado.</p>
                    </div>
                </div>
            </section>

            <TestimonialsPage />
            <ContactPage />

        </>
    )
}

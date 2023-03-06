
import { PricesPage } from '../components/PricesPage/PricesPage';
import { TestimonialsPage } from '../components/TestimonialsPage/TestimonialsPage';
import { ContactPage } from '../components/ContactPage/ContactPage';

export const PreciosLandingPage = () => {
    return (
        <>
            <header class="text-center my-5">
                <h1 class="display-4">Totoro & Co</h1>
                <p class="lead">Transformamos tu visión en realidad con nuestros servicios de marketing integrales</p>
            </header>
            <div className='bg-dark'>
                <PricesPage />
            </div>

            <section class="call-to-action bg-light text-center py-5">
                <div class="container">
                    <h2 class="mb-4">Elige el paquete que mejor se ajuste a tus necesidades</h2>
                    <p class="lead mb-5">Nuestros paquetes incluyen servicios de diseño de logotipo, creación de página web y publicación en redes sociales, ¡con opciones adicionales disponibles!</p>
                    <a href="#contact" class="btn btn-dark btn-light mr-2">Contáctanos</a>
                </div>
            </section>

            <TestimonialsPage />
            <ContactPage />

        </>



    )
}

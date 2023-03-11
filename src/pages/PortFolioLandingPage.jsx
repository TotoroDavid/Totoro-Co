import React from 'react'
import { PortfolioPage } from '../components/PortfolioPage/PortfolioPage';
import { ContactPage } from '../components/ContactPage/ContactPage';

export const PortFolioLandingPage = () => {

    React.useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div>

            <header class="text-center p-5">
                <h1 class="display-4 font-weight-bold">Bienvenido a Totoro&Co</h1>
                <p class="lead">Somos una agencia de marketing que brinda soluciones creativas y efectivas para impulsar el crecimiento de su marca.</p>
            </header>

            <section id="about-us">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12 text-center">
                            <h2 class="section-heading">Acerca de Totoro&Co</h2>
                            <hr class="my-4" />
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div class="row">
                        <div class="col-lg-4 my-3">
                            <div class="about-icon">
                                <i class="fas fa-chart-line fa-3x"></i>
                            </div>
                            <h3 class="text-center">Misión</h3>
                            <p class="text-muted">Nuestra misión es ayudar a nuestros clientes a alcanzar sus objetivos de marketing a través de soluciones innovadoras y efectivas.</p>
                        </div>
                        <div class="col-lg-4 my-3">
                            <div class="about-icon">
                                <i class="fas fa-eye fa-3x"></i>
                            </div>
                            <h3 class="text-center">Visión</h3>
                            <p class="text-muted">Nuestra visión es ser reconocidos como la agencia líder en marketing en la industria, ofreciendo servicios de alta calidad y resultados sorprendentes para nuestros clientes.</p>
                        </div>
                        <div class="col-lg-4 my-3">
                            <div class="about-icon">
                                <i class="fas fa-handshake fa-3x"></i>
                            </div>
                            <h3 class="text-center">Valores</h3>
                            <p class="text-muted">Nuestros valores son la ética, la transparencia, la innovación y la satisfacción del cliente. Trabajamos incansablemente para garantizar que cada cliente tenga una experiencia de primera clase con nosotros.</p>
                        </div>
                    </div>
                </div>
            </section>

            <PortfolioPage />
            <ContactPage />

        </div>
    )
}

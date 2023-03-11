import React from "react"
import Lottie from "lottie-web"
import animationData from "../../data/131481-rotating-social-media-cards.json"
import { Helmet } from "react-helmet";

import { successfulProjectsData } from '../../data/successfulProjectsData';

export const HomePage = () => {

    const containerRef = React.useRef(null)

    React.useEffect(() => {
        const anim = Lottie.loadAnimation({
            container: containerRef.current,
            renderer: "svg",
            loop: true,
            autoplay: true,
            animationData: animationData,
        })

        return () => {
            anim.stop()
            anim.destroy()
        }
    }, [animationData])

    React.useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (

        <section id="home" className="text-center py-5 bg-light_2 ">
            <div className="container">

                <h1 className="display-4 py-5">
                    Eleva tu negocio con nuestros servicios de marketing digital
                </h1>
                <Helmet>
                    <title>Totoro & Co | Marketing Digital y Diseño Web</title>
                    <meta name="description" content="Ofrecemos servicios de marketing digital para mejorar la imagen de tu marca y aumentar tus conversiones en línea. Estrategias de marketing y análisis de competidores incluidos." />
                    <meta name="keywords" content="Marketing digital, SEO, SEM, Estrategias de marketing en línea, Publicidad en línea, Palabras clave, Análisis de competidores, Marketing de contenidos, Redes sociales, Email marketing, Analítica web, Diseño web, Experiencia de usuario, Optimización de la conversión, Tiendas en línea, E-commerce, Mejoramiento de imagen de marca, Branding digital, Diseño gráfico, Identidad visual" />
                </Helmet>
                <h3 className="lead py-5 text-secondary">
                    Ofrecemos servicios de marketing digital y diseño web para ayudar a
                    nuestros clientes a alcanzar sus objetivos en línea.
                </h3>
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-lg-6 my-3">
                        <div className="embed-responsive embed-responsive-16by9">
                            <div ref={containerRef} />
                        </div>
                    </div>
                    <div className="col-lg-6 my-3 ">
                        <h3 className="text-uppercase">Proyectos exitosos</h3>
                        <ul className="list-group ">
                            {successfulProjectsData.map((project) => (
                                <p key={project.id} className="list-group-item bg-light_3">
                                    {project.description}
                                </p>
                            ))}
                        </ul>
                    </div>
                </div>
                <a href="#services" className="btn btn-dark btn-lg mt-3">Conoce más sobre nuestros servicios</a>
            </div>
        </section>
    )
}

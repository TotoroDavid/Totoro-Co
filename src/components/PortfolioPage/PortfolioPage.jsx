import { projects } from '../../data/projects';

export const PortfolioPage = () => {
    return (
        <section id="portfolio" className="text-center py-5 bg-dark text-white">
            <div className="container">
                <h2 className="text-uppercase py-5">Galería de éxitos: Una exhibición de proyectos con resultados tangibles</h2>
                <p className="lead pb-3">Ejemplos de proyectos exitosos realizados por la agencia y resultados tangibles para los clientes.</p>
                <div className="row">
                    {projects.map(project => (
                        <div key={project.id} className="col-lg-4 my-3">
                            <div
                                className="card d-flex justify-content-center align-items-center bg-dark text-white">
                                <iframe
                                    src={project.image}
                                    width="350"
                                    height="350"
                                    frameBorder="0"
                                    className=''
                                    allowFullScreen>
                                </iframe>
                                <div className="card-body">
                                    <h3 className="card-title py-4">{project.title}</h3>
                                    <p className="card-text">{project.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>)
}

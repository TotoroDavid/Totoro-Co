import React from 'react'
import { Link } from 'react-router-dom'

export const BlogPage = () => {
    return (
        <section id="blog">
            <div className="container">
                <h2 className="text-center mb-5 py-5">Nuestro Blog</h2>
                <div className="row">
                    <div className="col-md-8 mb-5">
                        <div className="card bg-dark text-white">
                            <img
                                src="https://raw.githubusercontent.com/TotoroDavid/You-dont-know-JS/master/photo-1563986768494-4dee2763ff3f%20(1)%202%202.jpg"
                                alt="Post 1"
                                className="card-img-top" />
                            <div className="card-body">
                                <h3 className="card-title">Consejos para mejorar tu presencia en redes sociales</h3>
                                <p className="card-text">Mejora tu presencia en las redes sociales con estos simples consejos: se constante en la publicación de contenido relevante y atractivo, interactúa con tu audiencia y utiliza herramientas analíticas para medir tus resultados y optimizar tus estrategias.</p>
                                <Link
                                    to={`/blog`}
                                    className="btn btn-dark_secondary"
                                >
                                    Leer más
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-5">
                        <h3>Suscribete a nuestro boletín</h3>
                        <form>
                            <div className="form-group py-3">
                                <input
                                    type="email" className="form-control pt-3" id="email/"
                                    placeholder="Ingresa tu correo electrónico"
                                />
                            </div>
                            <a className="btn btn-dark_secondary">Suscribirse</a>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

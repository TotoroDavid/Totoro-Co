import { Link } from "react-router-dom";

const pricingPackages = [
    {
        name: 'Paquete Básico',
        price: '',
        features: [
            'Diseño de logotipo',
            'Creación de página web',
            'Publicación en redes sociales'
        ]
    },
    {
        name: 'Paquete Premium',
        price: '',
        features: [
            'Diseño de logotipo',
            'Creación de página web',
            'Publicación en redes sociales',
            'Boletín electrónico',
            'Análisis y seguimiento'
        ]
    },
    {
        name: 'Paquete Personalizado',
        price: '',
        features: [
            'Contáctanos para un paquete personalizado que se ajuste a tus necesidades y presupuesto.'
        ]
    }
];

export const PricesPage = () => {
    return (
        <section id="pricing">
            <div className="container py-5">
                <h2 className="text-center mb-5">Nuestros Precios</h2>
                <div className="row">
                    {pricingPackages.map((package_, index) => (
                        <div className="col-md-4 mb-5" key={index}>
                            <div className="card">
                                <div className="card-header">
                                    <h3>{package_.name}</h3>
                                </div>
                                <div className="card-body">
                                    <h4 className="card-title">{package_.price}</h4>
                                    <p className="card-text">Incluye:</p>
                                    <ul>
                                        {package_.features.map((feature, i) => (
                                            <li key={i}>{feature}</li>
                                        ))}
                                    </ul>
                                    {package_.name === 'Paquete Personalizado' ? (
                                        <Link
                                            className="btn btn-dark_secondary"
                                            to={`/pricing`
                                            }>
                                            Solicitar
                                        </Link>
                                    ) : (
                                        <Link
                                            className="btn btn-dark_secondary"
                                            to={`/pricing`
                                            }>
                                            Solicitar
                                        </Link>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

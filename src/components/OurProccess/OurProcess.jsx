import { processStages } from '../../data/processStages';

export const OurProcess = () => {
    return (
        <section id="process" className="text-center py-5">
            <div className="container">
                <h2 className="text-uppercase pb-5">Nuestro Proceso</h2>
                <p className="lead">Nos aseguramos de seguir un proceso detallado y riguroso en cada proyecto para garantizar resultados óptimos para nuestros clientes.</p>
                <div className="row">
                    {processStages.map((stage, index) => (
                        <div key={index} className="col-lg-3 my-3 ">
                            <div className="card bg-dark text-white h-100">
                                <div className="card-body">
                                    <img
                                        style={{
                                            width: '150px'
                                        }}
                                        src={stage.img} alt="Icono de proceso" />
                                    <h4 className="card-title">{stage.title}</h4>
                                    <p className="card-text">{stage.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    )
}

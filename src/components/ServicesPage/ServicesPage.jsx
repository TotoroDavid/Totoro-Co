
import { services } from '../../data/services';
import { Link } from 'react-router-dom';

export const ServicesPage = () => {

  function limitText(text, limit) {
    if (text.length > limit) {
      return text.substring(0, limit) + "...";
    } else {
      return text;
    }
  }


  return (
    <section id="services" className="text-center py-5">
      <div className="container">
        <h2 className="text-uppercase py-5">Descubre lo que podemos hacer por ti</h2>
        <h4 className="lead">Transformamos presencias digitales con servicios de marketing, diseño web, tiendas en línea, alojamiento y dominios, diseño gráfico y comercio electrónico..</h4>
        <div className="row">
          {services.map((service, index) => (
            <div key={index} className="col-lg-4 my-3">
              <div className="card card-fixed-height h-100">
                <div className="card-body bg-dark text-white">
                  <h3 className="card-title py-5">{service.title}</h3>
                  <p className="card-text py-3 ">{limitText(service.description, 182)}</p>
                  <Link to={`/services/${service.id}`} className='btn btn-dark_secondary'>
                    Ver Más
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Link to='/services' className='btn btn-dark'>
          Ver Todos Nuestros Servicios
        </Link>
      </div>
    </section >
  )
}

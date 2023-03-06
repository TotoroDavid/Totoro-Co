import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { dataServicesById } from '../data/dataServicesById';
import { ContactPage } from '../components/ContactPage/ContactPage';


export const ServicesById = () => {

    const { id } = useParams()
    const service = dataServicesById.find(service => service.id === id)

    if (!service) {
        return <p>No se encontró el servicio solicitado</p>
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <p className='bg-dark line_'></p>
            <header className="header text-center py-5">
                <h1 className="text-uppercase">{service.title}</h1>
                <h4 className="pt-5 container">{service.description}</h4>
            </header>

            <div className='container'>
                <div class="row">
                    {service.images.map((image, index) => (
                        <div class="col-sm-4" key={index}>
                            <img src={image.src} class="img-fluid" alt={image.alt} />
                        </div>
                    ))}
                </div>
            </div>

            <section className="my-3 pt-4">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 mx-auto">
                            {service.content && (
                                <>
                                    <h4>{service.content}</h4>
                                    <ul className='py-5'>
                                        {service.list.map(item => (
                                            <li className='pt-4' key={item.id}>{item.text}</li>
                                        ))}
                                    </ul>

                                </>
                            )}
                        </div>
                    </div>
                </div>
            </section>



            <ContactPage />
        </>
    )
}

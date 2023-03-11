import React from 'react'
import { testimonials } from '../../data/testimonials';

export const TestimonialsPage = () => {
    return (
        <section id="testimonials" className="text-center py-5 bg-secondary text-white">
            <div className="container">
                <h2 className="text-uppercase py-5">Testimonios de nuestros clientes</h2>
                <div className="row">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="col-lg-4 my-3">
                            <div className="card h-100">
                                <div className="card-body bg-secondary text-white rounded border border-dark">
                                    <div className="testimonial-img">
                                        <img src={testimonial.image} className="img-fluid rounded-circle" />
                                    </div>
                                    <p className="card-text">{testimonial.text}</p>
                                    <h4 className="card-title">{testimonial.name}</h4>
                                    <h6 className="card-subtitle">{testimonial.company}</h6>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

import React, { useState } from 'react'
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

const YOUR_SERVICE_ID = 'service_pfdj9wf';
const YOUR_TEMPLATE_ID = 'template_5ny5tie';
const YOUR_PUBLIC_KEY = '7Our-uGa_jzZ8pLQG';

export const ContactPage = () => {

    // Estados iniciales
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [note, setNote] = useState('');
    const [telefono, setTelefono] = useState('');


    // Configuración del mensaje de éxito
    const successMessage = {
        title: 'Sweet!',
        text: `Gracias ${name} tu mensaje fue enviado con éxito, pronto nos pondremos en contacto`,
        imageUrl: 'https://images.unsplash.com/photo-1521685468847-de0a1a3c41a8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        imageWidth: 600,
        imageHeight: 300,
        imageAlt: 'Custom image',
    };

    // Función para enviar el formulario
    const handleSubmit = (e) => {
        e.preventDefault();

        const templateParams = {
            name: name,
            email: email,
            phone: telefono,
            note: note,
        };

        // Enviar correo electrónico utilizando emailjs
        emailjs.send(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, templateParams, YOUR_PUBLIC_KEY)
            .then((response) => {
                console.log('El correo se ha enviado correctamente', response.status, response.text);
                // Mostrar mensaje de éxito utilizando sweetalert2
                Swal.fire({
                    ...successMessage,
                });
                // Reiniciar estados
                setName('');
                setEmail('');
                setNote('');
                setTelefono('')
            })
            .catch((error) => {
                console.log('Hubo un error al enviar el correo electrónico', error);
                // Mostrar mensaje de error utilizando sweetalert2
                Swal.fire({
                    icon: 'error',
                    title: 'Error al enviar el correo electrónico',
                    text: 'Por favor, inténtalo de nuevo más tarde.',
                    confirmButtonText: 'OK'
                });
            });
    };

    return (
        <section id="contact">
            <div className="container py-5">
                <h2 className="text-center mb-5">Contactanos</h2>
                <div className="row">
                    <div className="col-md-8 mb-5">
                        <form onSubmit={handleSubmit} className="my-2 mb-4">
                            <div className="form-group mb-2">
                                <label htmlFor="nombre">Nombre:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="nombre"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="form-group mb-2">
                                <label htmlFor="correo">Correo:</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="correo"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>

                            <div className="form-group mb-2">
                                <label htmlFor="telefono">Telefono:</label>
                                <input
                                    type='number'
                                    className="form-control"
                                    id="telefono"
                                    value={telefono}
                                    onChange={(e) => setTelefono(e.target.value)}
                                    required
                                />
                            </div>


                            <div className="form-group mb-2">
                                <label htmlFor="nota">Nota:</label>
                                <textarea
                                    className="form-control"
                                    id="nota"
                                    rows="3"
                                    value={note}
                                    onChange={(e) => setNote(e.target.value)}
                                    required
                                ></textarea>
                            </div>
                            <div className="text-center">
                                <button type="submit" className="btn btn-primary mt-2">Enviar</button>
                            </div>
                        </form>
                    </div>
                    <div className="col-md-4 mb-5">
                        <h3>Información de Contacto</h3>
                        <p>
                            Envíenos sus detalles y nos pondremos en contacto con usted pronto para discutir cómo podemos mejorar su presencia en línea con Totoro&co.
                        </p>
                        <p>
                            Teléfono: +57 - 324 300 6432
                        </p>
                        <p>
                            Email: totorodesignco@hotmail.com
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

import React from 'react'
import { ContactPage } from '../components/ContactPage/ContactPage';

export const HeaderBarPage = () => {
    return (
        <div className='container py-5 text-center'>
            <h2>
                ¡Bienvenido a nuestro servicio de estudio de negocio gratuito!
            </h2>
            <h4>
                Aquí podrá obtener una evaluación exhaustiva de su negocio y recibir recomendaciones para mejorar su rendimiento y alcanzar sus objetivos.
            </h4>

            <button className='btn btn-dark my-4' onClick={() => window.open("https://forms.gle/B2aXW9zZTehQighe6", "_blank")}>
                Llenar el formulario
            </button>

            <p className='container py-5'>
                Para aprovechar esta oportunidad única, simplemente complete el siguiente formulario con información detallada sobre su negocio. Nuestro equipo de expertos analizará su situación y le proporcionará un informe detallado con estrategias efectivas para impulsar su éxito.
            </p>

            <button className='btn btn-dark my-4' onClick={() => window.open("https://forms.gle/B2aXW9zZTehQighe6", "_blank")}>
                Llenar el formulario
            </button>

            <p className='py-5'>
                💡 ¡No espere más! 💡 Llene el formulario ahora y 🚀 aproveche la oportunidad de mejorar su negocio y destacar en su sector. 💪 Estamos aquí para ayudarlo a alcanzar sus metas. 🔥 ¡No pierda esta oportunidad única! 🔥
            </p>

            <ContactPage />

        </div>
    )
}

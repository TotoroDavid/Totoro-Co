export const enlaces = [
    { nombre: "Página de Inicio", url: "#" },
    { nombre: "Servicios", url: "#" },
    { nombre: "Portafolio", url: "#" },
    { nombre: "Precios", url: "#" },
    { nombre: "Blog", url: "#" },];

export const redesSociales = [
    {
        nombre: "WhatsApp",
        link: "https://wa.me/message/DV7VFDYSRPTPE1",
        url: "https://cdn-icons-png.flaticon.com/512/4494/4494495.png"
    },
    {
        nombre: "FaceBook",
        link: "https://www.facebook.com/profile.php?id=100090901749139",
        url: "https://cdn-icons-png.flaticon.com/512/145/145802.png"
    },
    {
        nombre: "Instagram",
        link: "https://www.instagram.com/totorocoagency/",
        url: "https://cdn-icons-png.flaticon.com/512/3955/3955024.png"
    },
    {
        nombre: "LinkedIn",
        link: "fab fa-linkedin-in",
        url: "https://cdn-icons-png.flaticon.com/512/145/145807.png"
    },
]


export const Footer = () => {
    return (
        <footer className="bg-dark text-white py-5">
            <div className="container">
                <div className="row py-5">
                    <div className="col-md-3 ">
                        <h3>Totoro&Co.</h3>
                        <p>una agencia de marketing digital que ofrece soluciones estratégicas y de diseño web para mejorar la presencia en línea de sus clientes. Con un equipo capacitado, ayudan a alcanzar objetivos en línea.</p>
                    </div>
                    <div className="col-md-3">
                        <h3>Enlaces</h3>
                        <ul>
                            {enlaces.map((enlace, index) => (
                                <li key={index}><a href={enlace.url}>{enlace.nombre}</a></li>
                            ))}
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h3>Contacto</h3>
                        <p>Envíenos sus detalles y nos pondremos en contacto con usted pronto para discutir cómo podemos mejorar su presencia en línea con Totoro&co.</p>
                        <p>Teléfono: <br /> +57-324 300 6432</p>
                        <p>Correo Electrónico: totorodesignco@hotmail.com</p>
                    </div>
                    <div className="col-md-3">
                        <h3>Síguenos</h3>
                        <ul className="social-links">
                            {redesSociales.map((red, index) => (
                                <a
                                    href={red.link} target="_blank" rel="noopener noreferrer" style={{ cursor: 'pointer' }}
                                    className="container d-flex p-2">
                                    <img
                                        className="px-1"
                                        style={{
                                            width: '50px'
                                        }}
                                        src={red.url} alt={red.nombre} />
                                    <p>{red.nombre}</p>
                                </a>

                            ))}
                        </ul>
                    </div>
                </div>
                <hr />
                <p>&copy; [Totoro&Co.] 2023</p>
            </div>
        </footer>
    )
}

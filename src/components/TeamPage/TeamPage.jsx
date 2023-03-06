import { team } from '../../data/team';

export const TeamPage = () => {
    return (
        <section id="team" className="bg-light py-5">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <h2 className="section-heading text-uppercase py-3">Conoce nuestro equipo</h2>
                        <h3 className="section-subheading text-muted py-3">Conoce a los expertos detrás de nuestros servicios de marketing digital y diseño de páginas web.</h3>
                    </div>
                </div>
                <div className="row ">
                    {team.map((member, index) => (
                        <div key={index} className="col-sm-4">
                            <div className="team-member d-flex flex-column justify-content-center align-items-center text-center">
                                <img
                                    className="mx-auto rounded-circle"
                                    src={member.image}
                                    alt=""
                                    style={{
                                        width: '200px'
                                    }}
                                />
                                <h4>{member.name}</h4>
                                <p className="text-muted">{member.position}</p>
                                <p className="text-justify">{member.description}</p>
                                <ul className="list-inline social-buttons">
                                    {member.social.map((link, index) => (
                                        <li className="list-inline-item" key={index}>
                                            <a href={link.url}>
                                                <i className={link.icon}></i>
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

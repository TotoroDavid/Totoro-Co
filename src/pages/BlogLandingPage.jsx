import React from 'react'

export const BlogLandingPage = () => {

    React.useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <div class="container mt-5">
                <div class="row">
                    <div class="col-lg-8">
                        <article>
                            <header class="mb-4">
                                <h2 class="fw-bolder mb-1">Consejos para mejorar tu presencia en redes sociales!</h2>
                                <div class="text-muted fst-italic mb-2">Posteado en Enero 1, 2022 by Totoro&Co.</div>
                                <a class="badge bg-secondary text-decoration-none link-light" href="#!">Web Design</a>
                                <a class="badge bg-secondary text-decoration-none link-light" href="#!">Freebies</a>
                            </header>
                            <figure class="mb-4"><img class="img-fluid rounded" src="https://raw.githubusercontent.com/TotoroDavid/You-dont-know-JS/master/photo-1563986768494-4dee2763ff3f%20(1)%202%202.jpg" alt="..." /></figure>
                            <section class="mb-5">
                                <p class="fs-5 mb-4">Crea una estrategia clara: Antes de comenzar a publicar en tus redes sociales, es importante que tengas una estrategia clara en mente. ¿Qué quieres lograr con tus publicaciones? ¿Quiénes son tus objetivos? Con una estrategia clara, podrás publicar de manera más efectiva y lograr tus objetivos.</p>
                                <p class="fs-5 mb-4">Se auténtico: Las redes sociales son un lugar para conectarse con otros y mostrar tu verdadera personalidad. No trates de ser alguien que no eres. Sé auténtico y muestra tu verdadera personalidad en tus publicaciones.</p>
                                <h2 class="fw-bolder mb-4 mt-5">Interactúa con tu audiencia</h2>
                                <p class="fs-5 mb-4">Crea contenido atractivo: El contenido es el rey en las redes sociales. Asegúrate de publicar contenido de calidad, atractivo y relevante para tu audiencia. Esto no solo aumentará el engagement, sino que también mejorará tu visibilidad en las redes sociales.</p>
                                <p class="fs-5 mb-4">Sé consistente: La consistencia es fundamental para mejorar tu presencia en redes sociales. Asegúrate de publicar regularmente y de mantener un horario fijo para publicar. Esto mantendrá a tu audiencia interesada y les dará una razón para seguirte y interactuar con tu contenido.</p>
                            </section>
                        </article>

                        <section class="mb-5">
                            <div class="card bg-light">
                                <div class="card-body">
                                    {/* <form class="mb-4"><textarea class="form-control" rows="3" placeholder="Join the discussion and leave a comment!"></textarea></form> */}
                                    <div class="d-flex mb-4">
                                        <div class="flex-shrink-0"><img class="rounded-circle" src="https://dummyimage.com/50x50/ced4da/6c757d.jpg" alt="..." /></div>
                                        <div class="ms-3">
                                            <div class="fw-bold">Maria</div>
                                            "Interactuar con tu audiencia es clave para una presencia fuerte en redes sociales. Contesta a tus seguidores, haga preguntas y haz que se sientan valorados. Esto ayudará a construir relaciones duraderas y a mejorar tu presencia en línea."
                                            <div class="d-flex mt-4">
                                                <div class="flex-shrink-0"><img class="rounded-circle" src="https://dummyimage.com/50x50/ced4da/6c757d.jpg" alt="..." /></div>
                                                <div class="ms-3">
                                                    <div class="fw-bold">David</div>
                                                    "Creo que es fundamental publicar contenido de calidad y relevante para tu audiencia. Esto hará que tu marca sea reconocida y te permitirá destacar entre la competencia."
                                                </div>
                                            </div>
                                            <div class="d-flex mt-4">
                                                <div class="flex-shrink-0"><img class="rounded-circle" src="https://dummyimage.com/50x50/ced4da/6c757d.jpg" alt="..." /></div>
                                                <div class="ms-3">
                                                    <div class="fw-bold">Lucia</div>
                                                    "También es importante estar activo en las redes sociales y publicar de manera regular. Esto mantendrá a tu audiencia interesada y te permitirá llegar a más personas."
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="d-flex">
                                        <div class="flex-shrink-0"><img class="rounded-circle" src="https://dummyimage.com/50x50/ced4da/6c757d.jpg" alt="..." /></div>
                                        <div class="ms-3">
                                            <div class="fw-bold">Sofia.</div>
                                            "Creo que es importante utilizar las redes sociales de manera estratégica para mejorar tu presencia en línea. Es necesario comprender a tu audiencia y publicar contenido relevante y atractivo para ellos."
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                    <div class="col-lg-4">
                        <div class="card mb-4">
                            <div class="card-header">Search</div>
                            <div class="card-body">
                                <div class="input-group">
                                    <input class="form-control" type="text" placeholder="Enter search term..." aria-label="Enter search term..." aria-describedby="button-search" />
                                    <button class="btn btn-dark" id="button-search" type="button">ver</button>
                                </div>
                            </div>
                        </div>
                        <div class="card mb-4">
                            <div class="card-header">Categories</div>
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-sm-6">
                                        <ul class="list-unstyled mb-0">
                                            <li><a href="#!">Web Design</a></li>
                                            <li><a href="#!">HTML</a></li>
                                            <li><a href="#!">Freebies</a></li>
                                        </ul>
                                    </div>
                                    <div class="col-sm-6">
                                        <ul class="list-unstyled mb-0">
                                            <li><a href="#!">JavaScript</a></li>
                                            <li><a href="#!">CSS</a></li>
                                            <li><a href="#!">Tutorials</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card mb-4">
                            <div class="card-header">resumen</div>
                            <div class="card-body">La presencia en redes sociales es fundamental para el éxito de cualquier negocio, por lo que es importante interactuar con la audiencia, publicar contenido de calidad y estar al tanto de las tendencias y cambios en el mercado.</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

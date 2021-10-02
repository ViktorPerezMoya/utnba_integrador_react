import React from 'react';
import './Nosotros.css'

const Nosotros = (props) => {
    return (
        <section className="section">
            <article id="nosotros">            
                <div className="content">
                    <div className="row">
                        <div className="col text-center buscados">
                            <h1>Nosotros</h1>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-md-11">
                            <div className="card mb-3">
                                <div className="row g-0">
                                <div className="col-md-4">
                                    <img src="./img/nosotros2.jpg" className="img-fluid rounded-start" alt="Nosotros"/>
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                    <h5 className="card-title">Nuestra Historía</h5>
                                    <p className="card-text">
                                        Mascotas Perdidas comienza hace un año, en el hogar de uno de nuestros integrantes el cual se usaba de hogar de tránsito para perros y gatos callejeros que necesitaban de asilo. Para poder encontrarles familia se hacía uso de las redes sociales, en muchas ocasiones los animales resultaban ser mascotas extraviadas y sus dueños lograban encontrarlas gracias a nuestro arduo trabajo de buscar un hogar para cada animalito de la calle. Con el tiempo fuimos construyendo una idea, la de generar un portal en internet donde cada persona publique sus mascotas perdidas y mascotas que buscan asilo con el objetico que logren encontrar familia o reencontrar con sus dueños que tanto extrañan.
                                        </p>
                                        <h5 className="card-title">Misión</h5>
                                        <p className="card-text">
                                            La misión de Mascotas Perdidas es poder hacer posible ese encuentro tan preciado para esos animalitos extraviados y sus dueños tristes, mediante la publicación y el compartir en redes sociales cada uno de los animalitos que sean agregados a la página y hacer que esta página sé una de las primeras opciones de búsqueda al momento de perder a ese miembro tan querido de la familia.
                                        </p>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </section>
    );
}

export default Nosotros;
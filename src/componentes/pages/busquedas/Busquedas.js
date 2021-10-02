import React from 'react';
import { ItemPerro } from "../home/Home";
import './Busquedas.css'

const Filtro = (props) => {
    return (
        <aside className="filtro-busqueda">                
            <div className="row">
                <div className="col">
                    <div className="accordion accordion-flush" id="acordeonSearch">
                        <div className="accordion-item">
                        <h3 className="accordion-header" id="flush-headingOne">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="true" aria-controls="flush-collapseOne">
                                <h4>Filtros</h4>
                            </button>
                        </h3>
                        <div id="flush-collapseOne" className="accordion-collapse" aria-labelledby="flush-headingOne" data-bs-parent="#acordeonSearch">
                            <div className="accordion-body">
                                <form>                        
                                    <div className="mb-3">
                                        <label htmlFor="provincia" className="form-label">Provincia:</label>
                                        <select defaultValue="" className="form-select form-select-sm" aria-label="Default select example">
                                            <option value="" disabled>Seleccione...</option>
                                            {props.provincias.map((prov,index) => <option key={index} value={index}>{prov}</option>)}
                                        </select>
                                    </div>
                                    
                                    <div className="mb-3">
                                        <label htmlFor="edad" className="form-label">Edad:</label>
                                        <input type="number" min="0" className="form-control form-control-sm" id="edad" placeholder="Edad de mascota"/>
                                    </div>
                                    
                                    <div className="mb-3">
                                        <label htmlFor="raza" className="form-label">Raza:</label>
                                        <input type="text" className="form-control form-control-sm" id="raza" placeholder="Raza de mascota"/>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="color" className="form-label">Color:</label>
                                        <input type="text" className="form-control form-control-sm" id="color" placeholder="Color de mascota"/>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="tamano" className="form-label">Tamaño:</label>
                                        <select defaultValue="" className="form-select form-select-sm" aria-label="Tamaño de mascota">
                                            <option value="" disabled>Seleccione...</option>
                                            <option value="1">Pequeño</option>
                                            <option value="2">Mediano</option>
                                            <option value="3">Grande</option>
                                        </select>
                                    </div>
                                    <div className="mb-3 form-check">
                                    <input type="radio" className="form-check-input" name="sexo" id="sexo-hembra"/>
                                    <label className="form-check-label" htmlFor="sexo-hembra">Hembra</label>
                                    </div>
                                    <div className="mb-3 form-check">
                                    <input type="radio" className="form-check-input"  name="sexo" id="sexo-macho"/>
                                    <label className="form-check-label" htmlFor="sexo-macho">Macho</label>
                                    </div>
                                    <button type="submit" className="btn btn-sm btn-primary btn-buscar">Buscar</button>
                                </form>
                            </div>
                        </div>
                        </div>
                    </div>                    
                </div>
            </div>
        </aside>
    );
}

const Busquedas = (props) => {
    return (
        <section className="section-busquedas">  
            <Filtro provincias={props.provincias}></Filtro>
            <article id="mascotas-perdidas" className="mascotas-perdidas">
                <div className="container">
                    <div className="row">
                        <div className="col text-center buscados">
                            <h1>Cartelera de Busquedas</h1>
                        </div>
                    </div>
                    <div className="row">
                        {props.perros.map((item,index) => <ItemPerro key={index} perro={item}></ItemPerro>)}                     
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-md-4">
                            <nav aria-label="Page navigation example">
                                <ul className="pagination">
                                <li className="page-item"><a className="page-link" href="/#">Previous</a></li>
                                <li className="page-item"><a className="page-link" href="/#">1</a></li>
                                <li className="page-item"><a className="page-link" href="/#">2</a></li>
                                <li className="page-item"><a className="page-link" href="/#">3</a></li>
                                <li className="page-item"><a className="page-link" href="/#">Next</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>    
                </div>
            </article>
        </section>
    );
}

export default Busquedas;
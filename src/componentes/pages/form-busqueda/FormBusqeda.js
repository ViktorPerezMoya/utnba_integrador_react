import React from 'react';
import './FormBusqueda.css'

const FormBusqueda = (props) => {
    return (
        <section className="section">
            <article id="nosotros">            
                <div className="container">
                    <div className="row">
                        <div className="col text-center buscados">
                            <h1>Publica tu Busqueda</h1>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-md-8">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="nombre" className="form-label">Nombre:</label>
                                    <input type="text" className="form-control" id="nombre" placeholder="Nombre de mascota"/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="edad" className="form-label">Edad:</label>
                                    <input type="number" min="0" className="form-control" id="edad" placeholder="Edad de mascota"/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="raza" className="form-label">Raza:</label>
                                    <input type="text" className="form-control" id="raza" placeholder="Raza de mascota"/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="color" className="form-label">Color:</label>
                                    <input type="text" className="form-control" id="color" placeholder="Color de mascota"/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="tamano" className="form-label">Tamaño:</label>
                                    <select defaultValue="" className="form-select" aria-label="Tamaño de mascota">
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
                                <div className="mb-3">
                                    <label htmlFor="provincia" className="form-label">Provincia:</label>
                                    <select defaultValue="" className="form-select" aria-label="Provincia residente">
                                        <option value="" disabled>Seleccione...</option>
                                        {props.provincias.map((prov,index) => <option key={index} value={index}>{prov}</option>)}
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="foto" className="form-label">Suba una foto</label>
                                    <input className="form-control" type="file" id="foto"/>
                                </div>
                                <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input type="email" className="form-control" id="email"/>
                                </div>
                                <div className="mb-3">
                                <label htmlFor="descripcion" className="form-label">Descripción detallada de la mascota</label>
                                <textarea className="form-control" id="descripcion" rows="3"></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary">Enviar</button>
                            </form>
                        </div>
                    </div>
                </div>
            </article>
        </section>
    );
}

export default FormBusqueda;
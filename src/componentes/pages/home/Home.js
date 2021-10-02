import React from 'react';
import './Home.css'

const IndicatorItemCarrousel = (props) => {
    return (
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={props.index} className={props.index === 0 ? "active" : ""} aria-current="true" aria-label="Slide 1"></button>        
    );
}

const ItemCarrousel = (props) => {
    return (
        <div className={props.active ? "carousel-item active": "carousel-item" }>
            <img src={props.banner.imagen} className="d-block w-100" alt="..."/>
            <div className="carousel-caption d-none d-md-block">
                <h5>{props.banner.titulo}</h5>
                <p>{props.banner.descripcion}</p>
            </div>
        </div>
    );
}

const Carrousel = (props) => {
    console.log(props.banners);
    return (        
        <article id="mascotas-mas-buscadas">            
            <div className="container-fluid container-carousel">
                <div className="row">
                    <div className="col">
                        <div id="carouselExampleIndicators" className="carousel slide carousel-fade" data-bs-ride="carousel">
                            <div className="carousel-indicators">
                                {
                                    props.banners.map((item,index) => <IndicatorItemCarrousel key={index} index={index}></IndicatorItemCarrousel>)
                                }
                            </div>
                            <div className="carousel-inner">
                                {
                                    props.banners.map((item,index) => <ItemCarrousel key={index} banner={item} active={index === 0}></ItemCarrousel>)
                                }                                
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
}

export const ItemPerro = (props) => {
    return (
        <div className="col-md-3">
            <div className="card">
                <img src={props.perro.imagen} className="card-img-top" alt="imagen de perro"/>
                <div className="card-body">
                <h5 className="card-title">{props.perro.titulo}</h5>
                <p>Ubicacion: {props.perro.ubicacion}</p>
                <p className="card-text">{props.perro.descripcion}</p>
                <a href="/#" className="btn btn-primary">Ver mas</a>
                </div>
            </div>
        </div>
    );
}

const Perros = (props) => {
    return (
        <article id="mascotas-perdidas" className="mascotas-perdidas">
            <div className="container-fluid">
                <div className="row">
                    <div className="col text-center buscados">
                        <h2>Buscados Recientemente</h2>
                    </div>
                </div>
                <div className="row">
                    {props.perros.map((item,index) => <ItemPerro key={index} perro={item}></ItemPerro>)}    
                </div>    
            </div>
        </article>
    );
}

const Home = (props) => {
    return (
        <section className="section">
            <Carrousel banners={props.banners}></Carrousel>
            <Perros perros={props.perros}></Perros>
        </section>
    );
}

export default Home;
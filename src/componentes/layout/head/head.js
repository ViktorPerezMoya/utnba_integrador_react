import React from 'react';
import './head.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    return(        
        <header>        
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container-fluid">
                    <img src="./img/logo.png" alt="" height="34" className="d-inline-block align-text-top"/>
                    <NavLink to="/" className="navbar-brand">Mascotas Perdidas</NavLink>
                    
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <NavLink to="/" exact className="nav-link" activeClassName="active">Home</NavLink>
                            <NavLink to="/busquedas" exact className="nav-link" activeClassName="active">Buesquedas</NavLink>
                            <NavLink to="/nueva-busqueda" exact className="nav-link" activeClassName="active">Nueva Busqueda</NavLink>
                            <NavLink to="/nosotros" exact className="nav-link" activeClassName="active">Nosotros</NavLink>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;
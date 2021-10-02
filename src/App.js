import './App.css';
import Header from './componentes/layout/head/head';
import Footer from './componentes/layout/footer/footer';

import DATA from './data.json';
import Home from './componentes/pages/home/Home';
import Busquedas from './componentes/pages/busquedas/Busquedas';
import FormBusqueda from './componentes/pages/form-busqueda/FormBusqeda';
import Nosotros from './componentes/pages/nosotros/Nosotros';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Header></Header>
        <Switch>
          <Route path="/" exact>
            <Home banners={DATA.home.listaBanners} perros={DATA.home.listaPerros}/>
          </Route>
          <Route path="/busquedas" exact>
            <Busquedas perros={DATA.busquedas.listaPerros} provincias={DATA.datos.provincias}/>
          </Route>
          <Route path="/nueva-busqueda" exact>
            <FormBusqueda provincias={DATA.datos.provincias}/>
          </Route>
          <Route path="/nosotros" exact>
            <Nosotros/>
          </Route>
        </Switch>
      {/*<Home banners={DATA.home.listaBanners} perros={DATA.home.listaPerros}></Home>*/}
      {/*<Busquedas perros={DATA.busquedas.listaPerros} provincias={DATA.datos.provincias}></Busquedas>*/}
      {/*<FormBusqueda provincias={DATA.datos.provincias}></FormBusqueda>*/}
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;

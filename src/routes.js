import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Home from "./Components/Home";
import Sobre from "./Components/Sobre";
import Usuario from './Components/Usuario';

const Routes = () => {
    return(
        <BrowserRouter>
            <Route component = { Home }  path="/" exact />
            <Route component = { Sobre }  path="/sobre" />
            <Route component = { Usuario }  path="/usuario" />
        </BrowserRouter>
    )
}

export default Routes;
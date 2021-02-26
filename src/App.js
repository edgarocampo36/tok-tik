/* App principal
Utiliza react-router-dom para manejar la redireccion de paginas y 
el renderizado de componentes de manera mas eficiente.
*/

import React from "react"
import "./App.css";
import { HashRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Header"
import Home from "./pages/Home";
import Upload from "./pages/Upload";

const App = () => {
  return (
    <HashRouter>
    <Header/>
      <Switch>
        <Route path="/upload" component={Upload} />
        <Route path="/" component={Home} />
      </Switch>
    </HashRouter>
  );
};

export default App;

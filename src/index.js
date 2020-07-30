import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/cadastro/Video/Home/App';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CadastroVideo from './pages/cadastro/Video'
import CadastroCategoria from './pages/cadastro/Categoria';


const Pagina404 = () =>(<div>Pagina404</div>)

ReactDOM.render(
  <BrowserRouter>
    <Switch>

      <Route path="/" component={App} exact/>
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route path="/cadastro/Categoria" component={CadastroCategoria} />
      <Route component={Pagina404} />
      
    </Switch>
  </BrowserRouter>,

 // <React.StrictMode>
 //   <App />
 // </React.StrictMode>,
  document.getElementById('root')
);



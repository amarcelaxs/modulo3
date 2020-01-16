import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


import Main from '../pages/main';
const Routes = () => (
  <BrowserRouter>
    <Switch>      
      
      <Route exact  path="/" component={Main} />
      

    </Switch>
  </BrowserRouter>
  //
  //exact pega exatamenta a rota especifica <Route exact path="/teste" component={Main} />
  //<Route path="/teste/2" component={Main} />

);

export default Routes
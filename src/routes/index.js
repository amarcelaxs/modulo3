import React, { Fragment } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

//importando po component footer
import Footer from '../components/Footer';


import Main from '../pages/main';
const Routes = () => (
  <BrowserRouter>
    <Fragment>
      <Switch>      
        
        <Route exact  path="/" component={Main} />
        

      </Switch>
      <Footer />
    </Fragment>
  </BrowserRouter>
  //
  //exact pega exatamenta a rota especifica <Route exact path="/teste" component={Main} />
  //<Route path="/teste/2" component={Main} />

);

export default Routes;
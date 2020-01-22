import React, {Component, Fragment} from 'react';

export default class Main extends Component {
  //nesse caso usa -se para compos mas simples
  state = {
    repositoryInput:'',    
  };
  render(){
    return(        
      <Fragment>
        <form onSubmit={this.handleAddRepository}>
          <input
            placeholder="usuário/repositório"
            value={this.state.repositoryInput}
            onChange={e => this.setState({ repositoryInput:e.target.value})}
            />
            <button type="submit">Adicionar</button>
            <ul>
              <li>
                <p>
                  <strong>facebook/react</strong>
                  (A declarative, efficient, and flexible JavaScript library for building user interfaces.)
                </p>
                <a href="http://github.com/facebook/react">Acessar</a>
              </li>
            </ul>
        </form>
      </Fragment>
    ); 
  }
}



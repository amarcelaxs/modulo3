import React, {Component, Fragment} from 'react';

import PropTypes from 'prop-types';


//É PRECISO CONECTAR O MAIN 
//importar o connect do react redux
import {connect} from 'react-redux';
import { bindActionCreators} from 'redux';
import * as FavoriteActions from '../../store/actions/favorites';


//importat o bind actions do redux


class Main extends Component {
//fazendo a validação de proptypes nas propriedades
static propTypes =  {
  addFavoriteRequest: PropTypes.func.isRequired,
  favorites: PropTypes.arrayOf(PropTypes.shape({
    id:PropTypes.number,
    name:PropTypes.string,
    description:PropTypes.string,
    url:PropTypes.string

  })).isRequired,
}

  //nesse caso usa -se para compos mas simples
  state = {
    repositoryInput:'',    
  };


  //setar a função  handleAddRepository, que é o submit do formularios
  //chamando as favorites
  handleAddRepository = (event) =>{
    //evita que a pagina va para alguma lugar
    //action addFavorite
    event.preventDefault();
     // this.props.addFavorite();
     this.props.addFavoriteRequest(this.state.repositoryInput);
  };

  render(){
    return(        
      //criação do map ul usando o reducers que esta conectado  e é um array e passando para cada favorite é retornado uma estrutura de li 
      //que são os campos que estão no redurders
      <Fragment>
        <form onSubmit={this.handleAddRepository}>
          <input
            placeholder="usuário/repositório"
            value={this.state.repositoryInput}
            onChange={e => this.setState({ repositoryInput:e.target.value})}
            />
            <button type="submit">Adicionar</button>
            <ul>              
              {this.props.favorites.map(favorite => (
                <li key={favorite.id}>
                  <p>
                    <strong>{favorite.name}</strong>
                    ({favorite.description})
                  </p>
                  <a href={favorite.url}>Acessar</a>
                </li>
              ))}              
            </ul>
        </form>
      </Fragment>
    ); 
  }
}



//DEVE SER CRIADO O MAP

const mapStateToProps = state => ({
  favorites:state.favorites,
});
const mapDispatchToProps = dispatch =>  bindActionCreators(FavoriteActions, dispatch);


//FAZER UM EXPORT DEFAULT CONNECT QUANDO SE IMPORTA O CONNECT LA DE CIMA RETIRANDO O EXPORT DE CIMA
export default  connect(mapStateToProps, mapDispatchToProps)(Main);
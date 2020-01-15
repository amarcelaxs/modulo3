import React, {Fragment} from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as TodoActions from './store/actions/todos';

const TodoList = ({ todos, addTodo, removeTodo}) => (
  <Fragment>
  <ul>
    {todos.map(todo => <li key={todo.id}>
    {todo.text}
    <button onClick={() => removeTodo(todo.id)}>Remover Todo</button></li>)}
  </ul>
  
  <button onClick={() => addTodo('Novo Todo')}>Adicionar</button>
  </Fragment>
  //botao para redenrizar baseando da action 
);

  // repassasdo o estado dque estava no state para o redux , uma funcionalidade trabalhando com arrays junto com a action



  TodoList.propTypes = {
    //ADICIONAR O ADDTODO NAS  PROPTYPES 
    addTodo:PropTypes.func.isRequired,
    removeTodo:PropTypes.func.isRequired,
    todos: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      text: PropTypes.string,
    })).isRequired,
  };




const mapStateToProps = state => ({
  todos: state.todos,
}); 


const mapDispatchToProps = dispatch => bindActionCreators(TodoActions, dispatch);
//mapear do estado em prorpiedades

//sintaxe hight oder components
export default connect(mapStateToProps,mapDispatchToProps)(TodoList);





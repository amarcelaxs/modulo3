// o footer e um component de podera se usado em outra aplicação por isso que foi criada a pasta component no src é para esse tipo de situação
import React from 'react';
import PropTypes from 'prop-types';

//como estatico
//const Footer = () => <p>você tem 3 favoritos.</p>;
 
//importar o connect para deixar a contagem dinamica
import {connect} from 'react-redux';
//exibindo a quantidade contavel dentro da frase
const Footer = ({ count}) => <p>você tem {count} favoritos.</p>

// validação do proptype
Footer.propTypes = {
    count: PropTypes.number.isRequired,
};


const mapStateToProps = state =>({
  //é possivel fazer operações dentro do do map state do props
  count: state.favorites.data.length,
  // isso atualiza ao mesmo tempo o repositorio adicional e a quantidade
});



export default connect(mapStateToProps)(Footer);
//state iniciando do array vazio
const INITIAL_STATE = [];

//É CRIADO UM ESTADO QUE RECEBE A ACTION
export default function favorites(state = INITIAL_STATE, action ){
  switch(action.type){
    case 'ADD_FAVORITE':
      return [
        ...state,
        {
          //AS INFORMAÇÕES ESTÃO COMO ESTATICO
          //CADA VES QUE FOR CHAMADA A ACTION ADD_FAVORITE É PRA ELE ADICIONAR NOVAMENTE O REPOSITORIO DO FACEBOOK ABAIXO
        id: Math.random(),
        name:'facebook/react',
        description:'A declarative, efficient, and flexible JavaScript library for building user interfaces.',
        url:'http://github.com/facebook/react',
        },
      ];
      default:
          return state;
  }
}


//state iniciando do array vazio
//const INITIAL_STATE = [];
const INITIAL_STATE = {
  loading:false,
  data:[],
  error: null,

}


//É CRIADO UM ESTADO QUE RECEBE A ACTION
export default function favorites(state = INITIAL_STATE, action ){
  switch(action.type){
    case 'ADD_FAVORITE_REQUEST': 
      return {...state, loading:true};
    case 'ADD_FAVORITE_SUCCESS':
      return {...state, loading:false, error:null, data:[...state.data,action.payload.data]};
    case 'ADD_FAVORITE_FAILURE':
      return {...state, loading: false, error:action.payload.error};
      
      //return [
        //...state, action.payload.data];
       // {
          //AS INFORMAÇÕES ESTÃO COMO ESTATICO
          //CADA VES QUE FOR CHAMADA A ACTION ADD_FAVORITE É PRA ELE ADICIONAR NOVAMENTE O REPOSITORIO DO FACEBOOK ABAIXO
      //  id: Math.random(),
       // name:'facebook/react',
        //description:'A declarative, efficient, and flexible JavaScript library for building user interfaces.',
       // url:'http://github.com/facebook/react',
       // },
      //];
      default:
          return state;
  }
}


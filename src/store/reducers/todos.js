const INITIAL_STATE = [
  {id:1,text:'Fazer café'},
  {id:2,text:'EstudarReact'},
];

export default function todos(state= INITIAL_STATE , action){
  //reducers e o cara que vai ouvir sempre que uma action for disparada , falando para oi reducers que uma ação foi iniciada ou terminada 
  //o reducer vai alterar o nosso estado o STATE é como o estado esta antes dessa alteração exe:
  //[‘Fazer café,’estudar react’’]
  //ai foi desparada uma action => addTodo(‘Entrar na comunidade’)
  //o reduce vai mudar o state para [‘Fazer café,’estudar react’,’Entrar na comunidade’]
  //todos os reducers vão ouvir todas as actions
  // toda action tem um TYPE que  É COMO UM ID QUE REPRESENTADA ELA UNICAMENTO DENTRO DA APLICAÇÃOEX:
  //['ADD_TODO','REMOVE_TODO']
  //importante o DEFAULT NO SWITCH  return state pois se não retornar nada vai retornar um estado padrão




  switch (action.type){
    case 'ADD_TODO':
      // nesse caso tem que adicionar todas as informações do state e n usar o state.push
      return [...state,{id:Math.random(),text: action.payload.text} ]
      //acrescenta uma nova propriedade no componente a cada click
    case 'REMOVE_TODO':
      return state.filter(todo => todo.id != action.payload.id); 
    default:
      return state;

  }


}
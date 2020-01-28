export const addFavoriteRequest =  repository => ({
  //exportando uma action addFavorite
  type: "ADD_FAVORITE_REQUEST",
  payload: {repository},
});//REQUEST -> SAGA -> CHAMADA -> API SUCCESS

export const addFavoriteSuccess = data => ({
  //exportando uma action addFavorite
  type: "ADD_FAVORITE_SUCCESS",
  payload: {data},
});



export const addFavoriteFailure = error => ({
  //exportando uma action addFavoritefalha
  type: "ADD_FAVORITE_FAILURE",
  payload: {error},
});



//COMO A ACTION NÃO ESTA SENDO USADA NO FAVORITES EM REDUCERS ENTÃO NÃO É PRECISO  ENVIAR INFORMAÇÕES PELO PAYLOAD DA ACTION
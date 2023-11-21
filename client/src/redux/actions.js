import axios from 'axios';
export const ADD_FAVORITE = 'ADD_FAVORITE';
export const REMOVE_FAVORITE = 'REMOVE_FAVORITE';
export const FILTER = 'FILTER';
export const ORDER = 'ORDER';
export const RESET = 'RESET';

export const addFavorite = (character) => {
   const endpoint = 'http://localhost:3001/rickandmorty/fav';
   return async (dispatch) => {
      try {
      const { data } = await axios.post(endpoint, character);

      return dispatch({
         type: ADD_FAVORITE,
         payload: data
      });
      
   } catch (error) {
      console.log(error.message);
   }
     
}};

export const removeFavorite = (id) => {
   const endpoint = `http://localhost:3001/rickandmorty/fav/${id}`;
   return async (dispatch) => {
      try {
      const { data } = await axios.delete(endpoint);
            
        return dispatch({
            type: REMOVE_FAVORITE,
            payload: data,
      });
      
   } catch (error) {
      console.log(error.message);
   }
     
  };
};


export const filterCards = (gender) => {
  return { type: FILTER, payload: gender };
};

export const orderCards = (orden) => {
  return { type: ORDER, payload: orden};
};

export const resetFavorites = () => {
  return { type: RESET, }
};
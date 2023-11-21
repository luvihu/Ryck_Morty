import Card from '../card/Card';
import { connect, useDispatch } from 'react-redux';
import { filterCards, orderCards, resetFavorites } from '../../redux/actions.js';
import { useState } from 'react';
import style from './favorites.module.css'



  const  Favorites =({myFavorites})=>{
  const [aux, setAux] = useState(false); // esta linea es para forzar el renderizado 
  const dispatch = useDispatch();
 
  const handleOrder = (event)=>{
    dispatch(orderCards(event.target.value));
    setAux(!aux); 
  };

  const handleFilter = (event)=>{
    dispatch(filterCards(event.target.value));
  };

  const handleReset = () => {
    dispatch(resetFavorites());
  };  
    

  return (
    <div>
    <div className={style.selectBtn}>
    <select onChange={handleOrder} >
      <option value="A">△ Ascendente</option>
      <option value="D">▽ Descendente</option>
    </select>
    <select onChange={handleFilter}>
      <option value="Male">◊ Male</option>
      <option value="Female">◊ Female</option>
      <option value="Genderless">◊ Genderless</option>
      <option value="unknown">◊ unknown</option>
      <option value="All">◊ All</option>
    </select>
    <div className={style.btn}>
     <button onClick={handleReset} >Remove Filters</button>
    </div>

    </div>
    <div className={style.cardFav}>
     {
      myFavorites?.map((fav)=>{
        return (
          <Card 
                   key={fav.id}
                   id={fav.id}
                   name={fav.name}
                   status={fav.status}
                   species={fav.species}
                   gender={fav.gender}
                   origin={fav.origin?.name}
                   image={fav.image}
                   onClose={fav.onClose}
                                  
                   />
        )
        })
    }
    </div>
    </div>
  )
}

const mapStateToProps = (state)=>{
  return {
    myFavorites: state.myFavorites
 }
}
export default connect(mapStateToProps, null)(Favorites);
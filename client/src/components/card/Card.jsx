import { NavLink, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import style from './card.module.css'
import { useSelector, useDispatch} from 'react-redux';
import { addFavorite, removeFavorite } from '../../redux/actions';


 function Card({id,name,origin, status,species, gender, image, onClose }) {

    const dispatch = useDispatch();
    const myFavorites = useSelector((state) => state.myFavorites);
    const location = useLocation();
    const [isFav, setIsFav] = useState(false);

   // const [ closeBt, setCloseBt] = useState(true);

   // useEffect(()=> {
   //    if(!onClose){
   //       setCloseBt(false);
   //    }
   // },[]);

   const handleFavorite = ()=> {
      if(isFav) {
         dispatch(removeFavorite(id));
         setIsFav(false);
      } else {
         dispatch(addFavorite({id,name, status,species,origin, gender, image}));
         setIsFav(true);
      }
   };

   //if (data.name && !characters.find((charater) => charater.id === data.id))

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         } 
      });
   }, [id,myFavorites]);
   
   
   return (
      <div className={style.cardConten}>
         <div className={style.imageConten}>
         <button className={style.fav} onClick={handleFavorite}>{isFav ? '❤️' : '🤍'}</button>
          <img src={image} alt='imagen'/>         
         </div>

        <div className={style.atrib}>
         <div className={style.closeButn}>
         {location.pathname === "/home" && (
           <button onClick={() => {onClose(id)}}>X</button>
           )}
         <NavLink to={`/detail/${id}`}><h2 >{name}</h2>
         </NavLink>
         </div>
         <h2>Especie: {species}</h2>
         <h2>Género: {gender}</h2>      
         </div>
      </div>
   );
};


export default Card;    


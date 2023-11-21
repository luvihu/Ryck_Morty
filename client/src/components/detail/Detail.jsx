
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useState, useEffect} from 'react';
import './detail.css';

export default function Detail() {

const {id}= useParams();
const [charDetail, setCharDetail] = useState({});
// charDetail, en este estado temporal se guardan los personajes.

useEffect(() => {
  axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
     if (data.name) {
      setCharDetail(data);
     } else {
        window.alert('No hay personajes con ese ID');
     }
  })
  .catch((err) => {
    window.alert("No hay personajes con ese ID");
  });
  return setCharDetail({});
}, [id]);

  return (
    <div className='detailConten'>
      <div className='imgConten'>
      <img src={charDetail.image} alt={charDetail.image} />
      <h2>{charDetail.name}</h2>
      </div>
      <div className="details">
      <div>
          <h3>Species:</h3>
          <p>{charDetail.species}</p>
        </div>
        <div>
          <h3>Gender:</h3>
          <p>{charDetail.gender}</p>
        </div>
        <div>
          <h3>Status:</h3>
          <p>{charDetail.status}</p>
        </div>
        <div>
          <h3>Origin:</h3>
          <p>{charDetail.origin}</p>
        </div>
         </div>
    </div>
  );
}
 // operador de encadenamiento opcional '?', llama a un objto ó func. en objetos anidados,más inf en mdn, es para
 // que no se rompa la página si alguno no existe.
 // charDetail.origin && charDetail.origin.name , es lo mismo q escribir esto

 // let aux = 'hola';
 //let nuevo = aux || 'otro'; si el primero es true, muestra eso, si es falso muestra el segundo.
 



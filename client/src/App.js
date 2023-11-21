import './App.css';
import Cards from './components/cards/Cards.jsx';
import Nav from './components/nav/Nav.jsx';

import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import About from './components/about/About.jsx';
import Detail from './components/detail/Detail.jsx';
import Error from './components/error/Error.jsx';
import LoginForm from './components/loginForm/LoginForm';
import Favorites from './components/favorites/Favorites.jsx';
import { removeFavorite } from './redux/actions';
import { useDispatch } from 'react-redux';
import axios from 'axios';


function App() {

   const [characters, setCharacters] = useState([]);
   const location = useLocation();
   const navigate = useNavigate();
   let [access, setAccess] = useState(false);
   const dispatch = useDispatch();

   
   const onSearch= async (id)=> {

      try {
         const { data } = await axios(`http://localhost:3001/rickandmorty/character/${id}`);

         if (data.name && !characters.find((charater) => charater.id === data.id)) {
               setCharacters((oldChars) => [...oldChars, data]);
            };
            
         } catch (error) {
         alert('¡No hay personajes con este ID!');
         
      }      
   };

   const onClose = (id) => {

      let deleted = characters.filter((elem) => elem.id !== Number(id))

      setCharacters(deleted);
      dispatch(removeFavorite(id)); //ojo

   }

   const randomHandler = async () => {
   let randomId = (Math.random() * 826).toFixed();
    randomId = parseInt(randomId);
    if (!characters.includes(randomId)) {
      onSearch(randomId);
    } else {
      alert("Este personaje ya ha sido agregado");
      return;
    }
      };
  
   const URL = 'http://localhost:3001/rickandmorty/login/';
   
   const loginHandler = async (userData) => {
      try {
         const { email, password } = userData;
         const { data } = await axios(URL + `?email=${email}&password=${password}`);
         const { access } = data;
         setAccess(access);
         access && navigate('/about');
      } catch (error) {
         console.log(error.message);
      }
      
      };

   useEffect(() => {
      !access && navigate('/');
   }, [access, navigate]);



   return (
      <div className='App'>
         <div className="video-background">
        <video loop muted autoPlay playsInline>
          <source src="/media/background-video.mp4" type="video/mp4" />
          Su navegador no soporta la etiqueta de vídeo.
        </video>
      </div>

         {location.pathname !== "/" && (<Nav onSearch={onSearch} random={randomHandler} setAccess={setAccess}/>)}

         <Routes>
         <Route exact path='/' element={<LoginForm loginHandler={loginHandler} />}/>
         <Route exact path='/home' element={<Cards characters={characters} onClose={onClose} />} />
         <Route exact path='/about' element={<About />} />
         <Route exact path='/favorites' element={<Favorites />} />
         <Route exact path='/detail/:id' element={<Detail />}/>
         <Route path="/*" component={<Error />} />
         </Routes>
           
      </div>
   );
}



export default App;

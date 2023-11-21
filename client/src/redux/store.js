import {createStore, applyMiddleware, compose} from "redux";
import rootReducer from './reducer';
import thunkMiddleware from "redux-thunk"; 

 
//const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE_ || compose;
// esta linea sirve para conectar nuestra app con la extension REDUX DEVTOOLS DEL NAVEGADOR
// para usar esta variable tambien se debe importar el compose de redux, y usarlo en la variable store de abajo

 

 
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    composeEnhancer(applyMiddleware(thunkMiddleware))
);

export default store;


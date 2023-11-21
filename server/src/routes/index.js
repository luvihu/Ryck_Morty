const { Router } = require("express");
const { getCharById } = require("../controllers/getCharById")
const login = require("../controllers/login");
const {postFav, deleteFav} = require('../controllers/postFav');
const postUser = require('../controllers/postUser');

// const router =require("express").Router();

const mainRouter = Router();

 // de esta manera es igual

// mainRouter.get("/character/:id", (req, res)=>{
//   getCharById(req,res);
// });


mainRouter.get("/character/:id", getCharById);
mainRouter.delete("/fav/:id", deleteFav);
mainRouter.get("/login", login);
mainRouter.post("/login", postUser);
mainRouter.post("/fav", postFav);


module.exports =  mainRouter;


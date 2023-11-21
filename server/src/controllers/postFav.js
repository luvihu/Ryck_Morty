// const { Favorite } = require('../DB_connection');

// const postFav = async (req, res)=> {
//   try {
//     const { id, name, status, image, species, origin, gender} = req.body;

//     if(!id || !name || !status || !origin || !image|| !species || !gender) return res.status(401).send('faltan datos');

//     await Favorite.create(
//        {id,name, status, image,origin, species, gender}
//     );

//     const allFavorites = await Favorite.findAll();
//     return res.status(200).json(allFavorites);
    
//   } catch (error) {
//     return res.status(500).json({error: error.message});
//   }
// };

let myFavorites = [];

const postFav = (req, res) => {
  const character = req.body;

  myFavorites.push(character);

  return res.status(200).json(myFavorites);
};

const deleteFav = (req, res) => {
  let { id } = req.params;
  myFavorites = myFavorites.filter((favorite) => favorite.id !== +id);
  return res.status(200).json(myFavorites);
};

module.exports = {postFav, deleteFav};
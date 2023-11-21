const axios = require('axios');
const URL = "https://rickandmortyapi.com/api/character/";
// const { KEY, URL }= process.env; esto aplica cuando las variables de entorno lo guardo en .env


const getCharById = async (req,res)=>{
   try {
      const { id }= req.params;
      const { data } = await axios.get(`${URL}/${id}`);

      if(!data.name) throw Error(`Faltan datos del personaje con ID: ${id}`);
             
         let character = {
            id: data.id, 
            name: data.name, 
            species: data.species,
            origin: data.origin?.name,
            image: data.image,
            gender: data.gender,
            status: data.status,
         }
       return  res.status(200).json(character);
             
   } 
    catch (error) {
      return error.message.includes('ID')
      ? res.status(404).send(error.message)
      : res.status(500).send(error.message);
   }
    
};


module.exports = {
   getCharById
}

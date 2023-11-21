const { User } = require('../DB_connection');

const postUser = async (req, res)=> {

  const { email, password } = req.body;
  try {
    if(!email || !password) return res.status(400).send('Faltan datos');
      const [user, create] = await User.findOrCreate({
        where: {
          email,
          password,
        }
      });
      create? console.log('usuario creado', user) : console.log('usuario encontrado', user);
      return res.status(200).json(user);
    
  } catch (error) {
    return res.status(500).json({error: error.message});
    
  }

};

module.exports = postUser;
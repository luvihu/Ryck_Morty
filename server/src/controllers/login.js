const users = require("../utils/user");

const login = async (req, res)=> {
 
    const { email, password } = req.query;
    if(!email || !password) return res.status(400).send('Faltan datos');
   
    const userFound = users.find(
      (user) => user.email === email && user.password === password
    );
  
    const access = userFound ? true : false;
  
    res.status(200).json({ access });

};

module.exports = login;


export default function validate(userData) {
   // Expresión regular para validar el email
   const emailRegex = new RegExp(/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i);

   // Expresión regular para validar la contraseña
  // const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{4,16}$/;
    
  let errors = {};

  // Validación del email:

  if (!emailRegex.test(userData.email)) {
    errors.email = "You must enter a valid email address";
  };

  if (userData.email.length === 0) {
    errors.email = "You must enter an email";
  }

  if(userData.email.length >35) {
    errors.email = "The email must be less than 35 characters";
  };

   // Validación de la contraseña:

   if (!/\d/.test(userData.password)) {
    errors.password = "The password must contain at least one number";
  }
     
   if (userData.password.length < 6 || userData.password.length > 10) {
    errors.password = "Pasword must be between 6 and 10 characters long"
  }
  
  return errors;
}
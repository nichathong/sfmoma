const Validator  = require ("validator");
const validText = require("./valid-text");

module.exports = function validRegister(data){
    let errors={};
    data.firstname = validText(data.firstname) ? data.firstname : ''
    data.lastname = validText(data.lastname) ? data.lastname : ''
    data.email = validText(data.email) ? data.email : ''
    data.password = validText(data.password) ? data.password : ''
    data.dateOfBirth = validText(data.dateOfBirth) ? data.dateOfBirth : ''

      if (!Validator.isLength(data.firstname, { min: 2, max: 30 })) {
        errors.firstname = 'Firstname must be between 2 and 30 characters';
      }
    
      if (Validator.isEmpty(data.firstname)) {
        errors.firstname = 'Firstname field is required';
      }

      if (!Validator.isLength(data.lastname, { min: 2, max: 30 })) {
        errors.lastname = 'Lastname must be between 2 and 30 characters';
      }
    
      if (Validator.isEmpty(data.lastname)) {
        errors.lasttname = 'Lastname field is required';
      }

      if (!Validator.isEmail(data.email)) {
          errors.email = 'Email is invalid';
        }
      
      if (Validator.isEmpty(data.email)) {
        errors.email = 'Email field is required';
      }
    
      if (Validator.isEmpty(data.password)) {
        errors.password = 'Password field is required';
      }

      if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
        errors.password = 'Password must be at least 6 characters';
      }

      if (!Validator.isISO8601(data.dateOfBirth)) {
        errors.dateOfBirth = 'Date of Birth is invalid'
      }
    
      return {
        errors,
        isValid: Object.keys(errors).length === 0
      };
}
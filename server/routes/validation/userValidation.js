 const joi = require('joi');

function userValidation(){
    const schema = {
        name: joi.string().min(5).required(),
        password: joi.string().min(5).required(),
        email: joi.string().email().required(),
        mobileNumber: joi.string().phoneNumber().required(),
        adress1: joi.string().required()
    }
}

 /**
  * user : 
  * name
  * password
  * email
  * mobileNumber
  * address1
  * address2
  */
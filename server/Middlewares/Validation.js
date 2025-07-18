const joi = require('joi');
const signupValidation=(req,res,next)=>{
   const schema = joi.object({ 
    name: joi.string().min(3).max(30).required(),
    email: joi.string().email().required(),
    password: joi.string().min(4).max(30).required(),
    height: joi.number().min(50).max(250).optional(),
    weight: joi.number().min(20).max(300).optional(),
    age: joi.number().min(10).max(100).required(),
    goal: joi.string().valid('Muscle gain', 'Fat loss').optional()
   });
    const { error } = schema.validate(req.body);
    if (error) {
        return res.status(400).json({ message:"Bad Request",error });
    }
    next();
}
const loginValidation=(req,res,next)=>{
   const schema = joi.object({ 
    email: joi.string().email().required(),
    password: joi.string().min(4).max(30).required()
   });
    const { error } = schema.validate(req.body);
    if (error) {
        return res.status(400).json({ message:"Bad Request",error });
    }
    next();
}
module.exports = {
    signupValidation,
    loginValidation
};

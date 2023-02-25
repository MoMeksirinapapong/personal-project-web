import Joi from 'joi';

const registerSchema = Joi.object({
    fullname : Joi.string().trim().required().messages({
        'string.empty':'Full name is required'}),
    email: Joi.string().email({tlds:false}).messages({
            'alternatives.match' : 'Must be valid email'
        }),
    password: Joi.string().alphanum().min(8).required().trim().messages({
        'string.empty' : 'Password is required',
        'string.alphanum':'Password must contain number or alphabet only',
        'string.min' : 'password must have at least 8 characters'
    }),
    conpass: Joi.string().valid(Joi.ref('password')).required().trim().messages({
        'any.only': 'password and confirm password did not match',
        'string.empty' : 'Confirmed password is required'
    })
    });

    const validateRegister = input => {
    const {error} = registerSchema.validate(input,{
        abortEarly:false
    });
    console.dir(error);
    if(error){
        // return error object
        const result = error.details.reduce((acc,el) => {
            acc[el.path[0]] = el.message;
            return acc;
        },{});
        return result;
    }
    };

    export default validateRegister;
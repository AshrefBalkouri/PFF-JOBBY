const { body, validationResult } = require('express-validator')

exports.ValidationRegister = [
    body('email','Not a valid Email').isEmail(),
    body('password', 'You password must contain min 8 char').isLength({min : 8})
]


exports.ValidationLoggIn = [
    
    body('password', 'You password must contain min 8 char').isLength({min : 8})
]


exports.Validation=(req,res,next)=>{
    const errors = validationResult(req)

    if(!errors.isEmpty()){
        return res.status(400).send(errors)
    }

    next()
}
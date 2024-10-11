const express = require('express')
const { SignUp, SignIn, DeleteUser, GetUser, UpdateUser } = require('../Controllers/User');
const { Validation, ValidationRegister, ValidationLoggIn } = require('../Middelwars/CheckData');
const { isAuth } = require('../Middelwars/isAuth');



const userRouter = express.Router()


userRouter.post('/SignUp',ValidationRegister,Validation,SignUp)

userRouter.post('/signIn',ValidationLoggIn , Validation, SignIn)

userRouter.get('/currentUser',isAuth, (req,res)=> res.send(req.user))

userRouter.delete("/deleteUser/:id",DeleteUser)

userRouter.get("/getUsers",GetUser)

userRouter.put("/updateUser/:id",UpdateUser)





module.exports = userRouter
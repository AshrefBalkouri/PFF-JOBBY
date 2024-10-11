const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
const User = require('../Models/User');
const Offer = require('../Models/Offer');
const Demande = require('../Models/Demande');



exports.SignUp = async(req,res)=>{
    try {
        const {email,password} = req.body

        const found = await User.findOne({email})

        if(found){
            return res.status(400).send({errors : [{msg : "Email used"}]})
        }

        const newAccount = new User(req.body)
        
        const saltRounds = 10;
        const salt = bcrypt.genSaltSync(saltRounds);
        const hashedPassword = bcrypt.hashSync(password, salt);

        newAccount.password = hashedPassword

        newAccount.save()

        const payload = {id : newAccount._id}
        var token = jwt.sign(payload, process.env.privateKey, { expiresIn: '5h' })

        res.status(200).send({msg : "ACCOUNT CREATED SUCCESFFULY",newAccount,token})

    } catch (error) {
        res.status(500).send({errors : [{msg : "Could not create account"}]})
    }
}
    
exports.SignIn = async (req,res)=>{

    try {
        const {email,password} = req.body
        const found = await User.findOne({email})

        if (!found) {
         return res.status(400).send({errors : [{ msg : 'SOMETHING WRONG'}]})   
        }

        const matched = bcrypt.compareSync(password, found.password)

        if (!matched) {
            return res.status(400).send({errors:[{msg: "SOMETHING WRONG"}]})
        }

        const payload = {id : found._id}
        var token = jwt.sign(payload, process.env.privateKey, { expiresIn: '5h' })

        res.status(200).send({msg :"Logged In",found,token})

    } catch (error) {
        res.status(500).send({errors : [{msg : "Could not Logg In"}]})
    }

}

exports.DeleteUser=async(req,res)=>{
    try {
        const {id} = req.params
        const found = await User.findById(id)
        if (found.role=="Entreprise"){
            await Offer.deleteMany({owner : id})
            await  Demande.deleteMany({ownerOffer : id})
        } else {
            await  Demande.deleteMany({owner : id})
        }
        
        await User.findByIdAndDelete(id)

        res.status(200).send("User Deleted")
    } catch (error) {
        res.status(500).send("Could not delete User")   
    }
}

exports.GetUser=async(req,res)=>{
    try {
        const Users = await User.find()

        res.status(200).send({msg : "Users List",Users})
    } catch (error) {
        res.status(500).send("Could not get Users")
    }
}

exports.UpdateUser=async(req,res)=>{
    try {
        const {id} = req.params

        await User.findByIdAndUpdate(id,{$set : req.body})

        res.status(200).send("User Updated")
    } catch (error) {
        res.status(500).send("Could not update User")   
    }
}

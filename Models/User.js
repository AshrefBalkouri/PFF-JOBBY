const mongoose = require ('mongoose')

const userSchema = new mongoose.Schema(
    {
        name : String,
        email : {type : String , unique : true , required : true },
        password : {type : String , required : true },
        role : String,
        photo : String
    }
)

module.exports = mongoose.model('yalla' , userSchema)


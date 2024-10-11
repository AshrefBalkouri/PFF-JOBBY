const mongoose = require ('mongoose')




const demandeSchema = new mongoose.Schema(
          {
            
            status: {type : String, default : "In progress"},

            offer :{
              type : mongoose.Types.ObjectId,
              ref : 'offer'
            },
            ownerOffer :  {
              type : mongoose.Types.ObjectId,
              ref : 'yalla'
            }
            ,
            owner : {
              type : mongoose.Types.ObjectId,
              ref : 'yalla'
            }
          }
        )


        module.exports = mongoose.model( 'demande' , demandeSchema)
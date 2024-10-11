const mongoose = require ('mongoose')




const offerSchema = new mongoose.Schema(
          {
            intitulePoste: String,
            descriptionPoste:  String,
            qualifications: String,
            contrat:String,
            owner : {
              type : mongoose.Types.ObjectId,
              ref : 'yalla'
            }
          }
        )


        module.exports = mongoose.model( 'offer' , offerSchema)
const Offer = require("../Models/Offer")


exports.AddOffer =async(req,res)=>{
    try {

        const NewOffer = await new Offer({...req.body, owner : req.user._id})

        await NewOffer.save()

        res.status(200).send({msg : "Offer Added",NewOffer})
    } catch (error) {
        res.status(500).send("Could not add Offer")
    }
}

exports.GetOffers=async(req,res)=>{
    try {
        const Offers = await Offer.find().populate('owner')

        res.status(200).send({msg : "Offer List",Offers})

    } catch (error) {
        res.status(500).send("Could not get Offers")
    }
}


exports.GetOneOffer=async(req,res)=>{
    try {
        const {id} = req.params

        const oneOffer = await Offer.findById(id).populate('owner')

        res.status(200).send({msg :"Offer", oneOffer})

    }
     catch (error) {
        res.status(500).send("Could not get this Offer")    
    }
}

exports.DeleteOffer=async(req,res)=>{
    try {
        const {id} = req.params

        await Offer.findByIdAndDelete(id)

        res.status(200).send("Offer Deleted")
    } catch (error) {
        res.status(500).send("Could not delete Offer")   
    }
}


exports.UpdateContact=async(req,res)=>{
    try {
        const {id} = req.params

        await Offer.findByIdAndUpdate(id,{$set : req.body})

        res.status(200).send("Offer Updated")

    } 
    catch (error) {
        res.status(500).send("Could not update Offer")   
    }
}

exports.GetMyOffers=async(req,res)=>{
    try {
       

        const myOffers = await Offer.find({owner : req.user._id})

        res.status(200).send({msg :"your Offers", myOffers})

    }
     catch (error) {
        res.status(500).send("Could not get your Offers")    
    }
}

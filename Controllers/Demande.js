const Demande = require("../Models/Demande")



exports.AddDemande =async(req,res)=>{
    try {

        const NewDemande = await new Demande({...req.body, owner : req.user._id})

        await NewDemande.save()

        res.status(200).send({msg : "Demande Sended",NewDemande})
    } catch (error) {
        res.status(500).send("Could not add Demande")
    }
}

exports.GetDemandeByOwner=async(req,res)=>{
    try {
        const {id} = req.params

        const Demandes = await Demande.find({owner : id}).populate('owner').populate('ownerOffer').populate('offer')

        res.status(200).send({msg : "Demandes List",Demandes})

    } catch (error) {
        res.status(500).send("Could not get Demandes")
    }
}

exports.GetDemandeByOwnerOffer=async(req,res)=>{
    try {
        const {id} = req.params

        const Demandes = await Demande.find({ownerOffer : id}).populate('owner').populate('ownerOffer').populate('offer')

        res.status(200).send({msg : "Demandes List",Demandes})

    } catch (error) {
        res.status(500).send("Could not get Demandes")
    }
}



exports.DeleteDemande=async(req,res)=>{
    try {
        const {id} = req.params

        await Demande.findByIdAndDelete(id)

        res.status(200).send("Demande Deleted")
    } catch (error) {
        res.status(500).send("Could not delete Demande")   
    }
}


exports.UpdateDemande=async(req,res)=>{
    try {
        const {id} = req.params

        await Demande.findByIdAndUpdate(id,{$set : req.body})

        res.status(200).send("Demande Updated")

    } 
    catch (error) {
        res.status(500).send("Could not update Demande")   
    }
}
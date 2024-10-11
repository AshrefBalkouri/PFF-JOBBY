const express = require ("express")
const { isAuth } = require("../Middelwars/isAuth")
const { AddDemande, GetDemandeByOwner, GetDemandeByOwnerOffer, DeleteDemande, UpdateDemande } = require("../Controllers/Demande")

const demandeRouter = express.Router()



demandeRouter.post("/addDemande",isAuth,AddDemande)

demandeRouter.get("/getDemandeByOwner/:id",GetDemandeByOwner)

demandeRouter.get("/getDemandeByOwnerOffer/:id",GetDemandeByOwnerOffer)

demandeRouter.delete("/deleteDemande/:id",DeleteDemande)

demandeRouter.put("/updateDemande/:id", UpdateDemande)




module.exports = demandeRouter
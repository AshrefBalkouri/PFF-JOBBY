const express = require('express')
const { AddOffer, GetOneOffer, DeleteOffer, UpdateContact, GetOffers, GetMyOffers } = require('../Controllers/Offer')
const { isAuth } = require('../Middelwars/isAuth')

const offerRouter = express.Router()



offerRouter.post("/addOffer",isAuth,AddOffer)

offerRouter.get("/getOffers",GetOffers)

offerRouter.get("/getOneOffer/:id",GetOneOffer)

offerRouter.delete("/deleteOffer/:id",DeleteOffer)

offerRouter.put("/updateOffer/:id",UpdateContact)

offerRouter.get("/getMyOffers",isAuth, GetMyOffers)







// getALL,getOne,add,update,delete

module.exports = offerRouter
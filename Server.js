const express = require ('express')
const ConnectDB = require('./Config/ConnectDB')
const userRouter = require('./Routes/User')
const offerRouter = require('./Routes/Offer')
const demandeRouter = require('./Routes/Demande')


const app = express()


require('dotenv').config()
ConnectDB()
 
app.use(express.json())

app.use('/api/auth',userRouter)

app.use('/api/offer', offerRouter)

app.use('/api/demande' , demandeRouter )

app.listen(process.env.port , console.log(`Server is connected on the port ${process.env.port}`))
const express = require('express')
const app = express()
const cors = require('cors')
const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()


app.use(cors())



app.get('/users',async(req, res)=>{
    const users = await prisma.user.findMany()

    res.json(users)
})




app.listen(2000, ()=>{
    console.log('Server Running on port 2000')
})
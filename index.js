const express=require('express')
const db = require('./db')
const app=express()
const cors=require('cors')
const todoRouter = require('./routes')
require('dotenv').config()

const port=process.env.port||8089
app.use(cors())
app.use(express.json())

app.use('/',todoRouter)


app.listen(port,async()=>{
    try {
        await db
        console.log('Database is connected successfully')
    } catch (error) {
        console.log(error)
    }
    console.log(`Server is running at ${port}`)
})
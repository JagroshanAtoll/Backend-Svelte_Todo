const mongoose=require('mongoose')
require('dotenv').config()

const db=mongoose.connect(process.env.mongodb)

module.exports=db
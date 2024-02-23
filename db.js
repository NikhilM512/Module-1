const mongoose=require("mongoose");
require("dotenv").config();

mongoose.set('strictQuery', true);
// console.log(process.env.mongo_url)

let connection=mongoose.connect(process.env.mongo_url);

module.exports={connection}


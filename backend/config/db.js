require('dotenv').config()
const mongoose =require('mongoose')
const connectDB=async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser:true,
            useUnifiedTopology:true,

        })
        console.log('Connect MONGO DB successfull')

    }
    catch(err){console.error(err)}
}
module.exports =connectDB
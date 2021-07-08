require('dotenv').config();
const productData=require('./data/product')
const Product=require('./models/Product')
const connectDB=require('./config/db')
connectDB()
const importData=async()=>{
    try{
        await Product.deleteMany({})
        await Product.insertMany(productData)
        console.log('imported sucessfull')
        process.exit(0)
    }
    catch(e){console.log(e)}
}
importData()
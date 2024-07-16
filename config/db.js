const mongoose=require('mongoose')
const colors =require('colors')

const connectToDb = async() =>
{
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log(`connected to ${mongoose.connection.host}`)
    } catch (error) {
        console.log(error);
    }
}

module.exports=connectToDb
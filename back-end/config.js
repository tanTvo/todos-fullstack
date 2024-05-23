import mongoose from "mongoose";


const mongoConfig = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("connected to MongoDb")
    } catch (err) {
        console.log(err)
    }
}

export default mongoConfig
import mongoose from "mongoose";
async function connectMongoDb(url:string) {
    return await mongoose.connect(url)
} 
export{
    connectMongoDb
}

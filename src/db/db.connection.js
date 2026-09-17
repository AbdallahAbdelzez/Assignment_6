import { MongoClient } from "mongodb";

// 127.0.0.1
const DBClient = new MongoClient("mongodb://localhost:27017",{
    serverSelectionTimeoutMS : 5000
});


export const DB = DBClient.db("Assignment_6") 
export const DBTest = async()=>{
    try{
        await DBClient.connect()
        console.log("DB connected successfully")
    }catch(error){
        console.log("Db connection failed")
    }
} 
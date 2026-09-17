import { DB } from "../../db/db.connection.js";




export const createAuthorsCollectionAndAdd = async () => {
    const result = await DB.collection("authors").insertOne({
        name: "author1",
        nationality: "British"
    })
    // await DB.runCommand({
    //     collMod: "authors",
    //     validator: {
    //         $jsonSchema: {
    //             bsonType: "object",
    //             required: ["name"]
    //         }
    //     }
    // })
    return result;
}


export const createIndexBooks = async () => {
    const result = await DB.collection("books").createIndex({title:1}) ;
    return result;
}


// console.log(DB.collection("books"))
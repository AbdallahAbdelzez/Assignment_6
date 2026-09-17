import { ObjectId } from "mongodb"
import { DB } from "../../db/db.connection.js"



export const addLog = async (data) => {
    const { book_id , action } = data
    const result = await DB.collection("logs").insertOne({
        book_id: new ObjectId(book_id) ,
        action
    })
    return result
}
import { DB } from "../db.connection.js";




const createBooksCollection = async () => {
    const bookModel = await DB.createCollection("books", {
        validator: {
            $jsonSchema: {
                bsonType: "object",
                required: ["title"],
                properties: {
                    title: {
                        bsonType: "string",
                        minLength: 1
                    }
                }
            }
        }
    });
    return bookModel
};



export default createBooksCollection

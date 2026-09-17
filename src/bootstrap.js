import express from "express"
import collectionRouter from "./modules/Collection/Collection.controller.js"
import booksRouter from "./modules/Books/book.controller.js"
import logRouter from "./modules/log/log.controller.js"
import { DBTest } from "./db/db.connection.js";
// import { bookModel } from "./db/models/book.model.js";


const app = express();



const bootstrap = async ()=>{

    await DBTest()
    app.use(express.json())
    app.use("/collection", collectionRouter)
    app.use("/books", booksRouter)
    app.use("/logs", logRouter)




    app.listen(3000,()=>{
        console.log("server running on port 3000");
    })
}


export default bootstrap;
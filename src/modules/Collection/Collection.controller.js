import { Router } from "express";
import createBooksCollection from "../../db/models/book.model.js"
import { createAuthorsCollectionAndAdd, createIndexBooks } from "./collection.services.js";
import createCappedLogsCollectio from "../../db/models/logs.model.js";


const router = Router()



router.post("/books", async (req, res) => {
    try {
        await createBooksCollection()
        res.status(201).json({
            message: "Books collection created successfully",

        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Something went wrong",
            error: error
        });
    }
});




router.post("/authors", async (req, res) => {
    try {
        const result = await createAuthorsCollectionAndAdd();

        res.status(201).json({
            message: "Authors collection created successfully",
            result
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Something went wrong",
            error: error
        });
    }
});

router.post("/logs/capped", async (req, res) => {
    try {
        await createCappedLogsCollectio()
        res.status(201).json({
            message: "CappedLogs collection created successfully",

        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Something went wrong",
            error: error
        });
    }
});
router.post("/books/index", async (req, res) => {
    try {
        await createIndexBooks()
        res.status(201).json({
            message: "Index Books created successfully",

        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Something went wrong",
            error: error
        });
    }
});

export default router

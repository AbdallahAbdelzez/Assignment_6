import { Router } from "express";
import { addBookInfo, addBooksInfo, aggregate1, aggregate2, aggregate3, aggregate4, aggregate5, deleteBefore_year, exclude_genres, findBooksByGenres, findBooksByYearRange, getBookByTitel, skip_limit, updateBook, updateBookDynamic, year_integer } from "./book.services.js";

const router = Router()




router.post("/", async (req, res) => {
    try {
        const result = await addBookInfo(req.body)
        res.status(201).json({
            message: "Book added successfully",
            result
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Something went wrong",
            error: error
        });
    }
})
router.post("/batch", async (req, res) => {
    try {
        const result = await addBooksInfo(req.body)
        res.status(201).json({
            message: "Books added successfully",
            result
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Something went wrong",
            error: error
        });
    }
})


router.patch("/updateBook", async (req, res) => {
    try {
        const result = await updateBookDynamic(req.body)
        res.status(201).json({
            message: "Books Update successfully",
            result
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Something went wrong",
            error: error
        });
    }
})
router.patch("/ubdate/:title", async (req, res) => {
    try {
        const result = await updateBook({
            title: req.params.title,
            year: req.body.year
        });
        res.status(201).json({
            message: "Books Update successfully",
            result
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Something went wrong",
            error: error
        });
    }
})
router.get("/title", async (req, res) => {
    try {
        const result = await getBookByTitel(req.query.title);
        res.status(200).json({
            message: "Find a Book with title",
            result
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Something went wrong",
            error: error
        });
    }
})
router.get("/year", async (req, res) => {
    try {
        const result = await findBooksByYearRange(req.query);
        res.status(200).json({
            message: "Find books by year range",
            result
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Something went wrong",
            error: error
        });
    }
})
router.get("/genre", async (req, res) => {
    try {
        const result = await findBooksByGenres(req.query.genre);
        res.status(200).json({
            message: "Find books where genres",
            result
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Something went wrong",
            error: error
        });
    }
})
router.get("/skip-limit", async (req, res) => {
    try {
        const result = await skip_limit();
        res.status(200).json({
            result
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Something went wrong",
            error: error
        });
    }
})
router.get("/year-integer", async (req, res) => {
    try {
        const result = await year_integer();
        res.status(200).json({
            result
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Something went wrong",
            error: error
        });
    }
})
router.get("/exclude-genres", async (req, res) => {
    try {
        const result = await exclude_genres();
        res.status(200).json({
            result
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Something went wrong",
            error: error
        });
    }
})
router.delete("/before-year", async (req, res) => {
    try {
        const result = await deleteBefore_year();
        res.status(200).json({
            result
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Something went wrong",
            error: error
        });
    }
})
router.get("/aggregate1", async (req, res) => {
    try {
        const result = await aggregate1();
        res.status(200).json({
            result
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Something went wrong",
            error: error
        });
    }
})
router.get("/aggregate2", async (req, res) => {
    try {
        const result = await aggregate2();
        res.status(200).json({
            result
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Something went wrong",
            error: error
        });
    }
})
router.get("/aggregate3", async (req, res) => {
    try {
        const result = await aggregate3();
        res.status(200).json({
            result
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Something went wrong",
            error: error
        });
    }
})
router.get("/aggregate4", async (req, res) => {
    try {
        const result = await aggregate4();
        res.status(200).json({
            result
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Something went wrong",
            error: error
        });
    }
})
router.get("/aggregate5", async (req, res) => {
    try {
        const result = await aggregate5();
        res.status(200).json({
            result
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Something went wrong",
            error: error
        });
    }
})













export default router


import { Router } from "express";
import { addLog } from "./log.services.js";


const router = Router()



router.post("/", async (req, res) => {
    try {
        const result = await addLog(req.body)
        res.status(201).json({
            result
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            msg: "Something went wrong",
            error: error
        });
    }
})










export default router
import { DB } from "../db.connection.js"

const createCappedLogsCollectio= async ()=>{
    const CappedLogsModel = await DB.createCollection("logs",{
        capped:true,
        size: 1024 * 1024
    })
    return CappedLogsModel
}


export default createCappedLogsCollectio
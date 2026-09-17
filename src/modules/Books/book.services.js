import { DB } from "../../db/db.connection.js"


export const addBookInfo = async (data) => {
    const { title, author, year, genres } = data
    const result = await DB.collection("books").insertOne({ title, author, year, genres })
    return result
}
export const addBooksInfo = async (data) => {
    const result = await DB.collection("books").insertMany(data)
    return result
}
export const updateBook = async (data) => {
    const { title, year } = data
    const result = await DB.collection("books").updateOne(
        {
            title: title
        },
        {
            $set: {
                year: year
            }
        }
    )
    return result
}


export const updateBookDynamic = async (data) => {
    const { filter, update } = data;
    const result = await DB.collection("books").updateOne(
        filter,
        {
            $set: update
        }
    );

    return result;
};


export const getBookByTitel = async (title) => {
    const result = await DB.collection("books").findOne({
        title: title
    })
    return result;
}
export const findBooksByYearRange = async (query) => {
    const from = +query.from;
    const to = +query.to;
    const result = await DB.collection("books").find({
        year: {
            $gte: from,
            $lte: to
        }
    }).toArray()
    return result;
}
export const findBooksByGenres = async (query) => {
    const result = await DB.collection("books").find({
        genres: query
    }).toArray()
    return result;
}
export const skip_limit = async () => {
    const result = await DB.collection("books").find()
        .skip(2)
        .limit(3)
        .sort({ year: -1 })
        .toArray()
    return result;
}

export const year_integer = async () => {
    const result = await DB.collection("books").find({
        year: {
            $type: "int"
        }
    }).toArray()
    return result;
}
export const exclude_genres = async () => {
    const result = await DB.collection("books").find({
        genres: {
            $nin: ["Horror", "Science Fiction"]
        }
    }).toArray()
    return result;
}
export const deleteBefore_year = async () => {
    const result = await DB.collection("books").deleteMany({
        year: {
            $lt: 2000
        }
    })
    return result;
}
export const aggregate1 = async () => {
    const result = await DB.collection("books").aggregate([
        {
            $match: {
                year: {
                    $gt: 2000
                }
            }
        }, {
            $sort: {
                year: -1
            }
        }
    ]).toArray()
    return result;
}
export const aggregate2 = async () => {
    const result = await DB.collection("books").aggregate([
        {
            $match: {
                year: {
                    $gt: 2000
                }
            }
        }, {
            $sort: {
                year: -1
            }
        }, {
            $project: {
                _id: 0,
                title: 1,
                author: 1,
                year: 1
            }
        }
    ]).toArray()
    return result;
}
export const aggregate3 = async () => {

    const result = await DB.collection("books").aggregate([
        {
            $match: {
                year: {
                    $gt: 2000
                }
            }
        },
        {
            $sort: {
                year: -1
            }
        },
        {
            $unwind: "$genres"
        }
    ]).toArray();

    return result;
};
export const aggregate4 = async () => {

    const result = await DB.collection("books").aggregate([{
        $lookup:{
            from:"logs",
            localField:"_id",
            foreignField:"book_id",
            as: "logs"
        }
    }]).toArray();

    return result;
};
export const aggregate5 = async () => {

    const result = await DB.collection("logs").aggregate([{
        $lookup:{
            from:"books",
            localField:"book_id",
            foreignField:"_id",
            as: "books"
        }
    }]).toArray();

    return result;
};
require("dotenv").config();
const mongoose = require("mongoose");

const initDb = () => {
    try{
        mongoose.connect(`${process.env.DB_URL}/${process.env.DB_NAME}`);
    } catch (err) {
        console.log(`Db Error: ${err}`);
    }
}

initDb();
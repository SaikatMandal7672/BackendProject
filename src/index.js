// require('dotenv').config({path :"./env"})

import { configDotenv } from "dotenv";
import connectDB from "./db/index.js";
configDotenv.config({
    path:'./env'
})
connectDB();

















// (async()=> {
//     try {
//         await mongoose.connect(`${process.env.MOGODB_URI}/${DB_NAME}`)
//     } catch (error) {
//         console.log(error);
//         throw error;
//     }
// })()
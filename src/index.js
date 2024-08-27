// require('dotenv').config({path :"./env"})

import { configDotenv } from "dotenv";
import connectDB from "./db/index.js";
configDotenv.config({
    path:'./env'
})
connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`server running at port ${process.env.PORT || 8000}`);
    })
})
.catch(err=>{
    console.log("CUSTOM MSG : failed to connect to db",err);
})


















// (async()=> {
//     try {
//         await mongoose.connect(`${process.env.MOGODB_URI}/${DB_NAME}`)
//     } catch (error) {
//         console.log(error);
//         throw error;
//     }
// })()
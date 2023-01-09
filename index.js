import dotenv from 'dotenv';
import express from 'express';
import { connectToAtlas }  from './app/v1/config/database.js';

export const app = express();

app.use(express.json());

dotenv.config({
    path: '.env'
});

connectToAtlas().then((err)=>{
    if (err)
        console.log("Connection Failed")
    console.log("Database Ready for Query...");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=>{
    console.log(`Server Running on PORT: http://127.0.0.1:${PORT}`);
});
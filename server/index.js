import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';

dotenv.config();

mongoose.connect(process.env.REALESTATE_DB_URI).then(() => {
   console.log('Connected to database!');
}).catch(err => { 
   console.log(err)
})

const app = express();

const port = process.env.PORT || 8082;

app.listen(port, () => { 
   console.log(`server listening on port ${port}`);
})
import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import signUpRouter from './routes/signup.route.js';
import userRouter from './routes/user.route.js';

dotenv.config();

mongoose.connect(process.env.REALESTATE_DB_URI).then(() => {
   console.log('Connected to database!');
}).catch(err => { 
   console.log(err)
})

const app = express();

app.use(express.json());

const port = process.env.PORT || 8082;

app.listen(port, () => { 
   console.log(`server listening on port ${port}`);
})

app.use('/api/user', userRouter);
app.use('/api/signup', signUpRouter);
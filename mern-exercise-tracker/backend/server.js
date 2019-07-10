const express = require ('express');
const cors = require('cors');
const mongoose = require('mongoose');


require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

//connect creates a promise
mongoose.connect('mongodb://localhost/playground', {useNewUrlParser: true, useCreateIndex: true}) 
.then(() => console.log('Connected to MongoDB...'))
.catch(err => console.error('Could not connect', err));

const connection = mongoose.connection;

//once connection is open show log
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})

const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');

// localhost:5000/exercises takes you to exercises router
app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);


app.listen(port, () => {
    console.log('Server is running on port:', {port});
});
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://gihandissanayaka:gihandissanayaka1234@cluster0.abvae.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true });

const connection = mongoose.connection;

connection.once('open', () => {
  console.log("Database connected");
});

const studentsRouter = require('./routes/students');

app.use('/students', studentsRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});


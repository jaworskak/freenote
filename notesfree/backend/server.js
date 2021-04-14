const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config(); // required 

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const notedElementsRouter = require('./routes/notedElements');
const sectionsRouter = require('./routes/sections');

app.use('/notedElements', notedElementsRouter);
app.use('/sections', sectionsRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
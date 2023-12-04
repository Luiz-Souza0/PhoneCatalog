const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3001;
const cors = require("cors");
const bodyParser = require('body-parser');

mongoose.set('strictQuery', true);
app.use(express.json());

const PhoneRoute = require('./route/PhoneRoute');

app.use(cors({ origin: '*', credentials: false }));

mongoose.connect('mongodb+srv://luiz_0:ditavia@cluster0.z9e6l1j.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true });

app.use('/', PhoneRoute);

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});


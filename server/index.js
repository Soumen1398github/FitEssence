const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();
const PORT = process.env.PORT || 5000;
const connectDB = require('./db/db');
const authRouter = require('./Routes/AuthRouter');


connectDB();


app.get('/pi', (req, res) => {
  res.send('Hello World!');
});

app.use(bodyParser.json());
app.use(cors({
  origin: "http://localhost:8080", // Your frontend origin
  credentials: true               // Allow cookies/headers
}));
app.use('/auth', authRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})
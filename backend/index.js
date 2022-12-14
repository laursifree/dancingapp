const express = require('express');
const cors = require('cors');
const app = express();
const bookingRoutes = require('./routes/booking')
const userRoutes = require('./routes/users')
const commentsRoutes = require('./routes/comments')



require('dotenv').config()

// JOT TOKEN
// const jwt = require('jsonwebtoken');
// require('dotenv').config(); // load .env variables
// const { PORT, JWT_SECRET } = process.env;

// 

const connectDB = require('./db/mongoose');
const { default: axios } = require('axios');
connectDB()

const PORT = 8080


app.use(cors())
app.use(express.static('public'))
app.use(express.json())
app.use(( req, res, next )=>{
	next() 
})

app.use('/booking',bookingRoutes)
app.use('/user',userRoutes)
app.use('/comment',commentsRoutes)


app.listen(PORT, function () {
	console.log(`server running at http://localhost:${PORT}`);
});
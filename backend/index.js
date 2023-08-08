const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const router = require('./route/BukuRoute')

const app = express();
app.use(cors());
app.use(express.json());
app.use(router)

mongoose.connect('mongodb+srv://admin:iF0H26mEj4IMl1dj@willyapi.b1cvstd.mongodb.net/?retryWrites=true&w=majority')
const db = mongoose.connection
db.on("error", console.error.bind(console, "Connection Error: "))
db.once("open", () => {
    console.log("DB Connected Successfully..")
})

app.listen(3000, () => {
    console.log('Server is running in port 3000')
})
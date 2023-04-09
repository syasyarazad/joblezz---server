const express = require('express');
const app = express()
const port = process.env.PORT || 3000
const router = require('./routes');
const cors = require('cors')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const axios = require('axios')
const midtransClient = require('midtrans-client')
const { errorHandler } = require('./middlewares')
require('dotenv').config()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())
app.use(router)
app.use(errorHandler)



app.listen(port, () => {
    console.log(`App listening...port`)
})
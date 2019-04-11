const express = require('express')
const app = express()
const port = 5000
const mongoose = require('mongoose')
const url = require('./database')
const productRouter = require('./router/productRouter')
const bodyParser = require('body-parser')

mongoose.connect(url ,{ useNewUrlParser: true } ,(err,res) => {
    if(err) throw err
})
app.use(bodyParser.json())

app.get('/' , (req,res) => {
    res.send('<h1> Selamat Datang di API mongoose </h1>')
})

app.use('/product' , productRouter)


app.listen(port , ()=>console.log('berjalan di port ' + port))
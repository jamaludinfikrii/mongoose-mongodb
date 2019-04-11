const router =require('express').Router()
const Product =require('./../model/product')
const mongoose = require('mongoose')

// CREATE DATA
router.post('/addData' , (req,res) => {
    var data = req.body
    var newObj = new Product({
        _id : new mongoose.Types.ObjectId(),
        nama : data.nama,
        harga : data.harga,
        category : data.category,
        ukuran : data.ukuran
    })
    newObj.save()
    .then((result) => {
        console.log(result)
        res.send('Add Data Success')
    })
    .catch((err) => {
        console.log(err)
    })
})

// READ DATA
router.get('/getAllData' , (req,res)=>{
    Product.find((err,result) => {
        if(err) throw err
        res.send(result)
    })
})


// GET BY ID
router.get('/getById/:id' , (req,res) => {
    Product.findById(req.params.id , (err,result) => {
        if(err) throw err
        res.send(result)
    })
})


// UPDATE DATA
router.put('/update/:params' , (req,res) => {
    Product.findOneAndUpdate({ _id : req.params.params} , {category : req.body.category})
    .then((result) => {res.send('Edit Data Success'); console.log(result)})
    .catch((err) => console.log(err))
})

router.put('/cartUpdate/:id' , (req,res) => {
    var ukuran = req.body.ukuran
    Product.findById(req.params.id)
    .then((result) => {
        if(result.ukuran){
            var newCart = [...result.ukuran,ukuran]
            Product.updateOne({_id : req.params.id}, {ukuran : newCart})
            .then((resul4) => res.send('Update Succes') )
        }else{
            Product.updateOne({_id : req.params.id} , {ukuran : [ukuran]})
            .then((result2) =>res.send('Update Success'))
        }
    })
    .catch((err) => console.log(err))
})


// DELETE DATA


module.exports = router
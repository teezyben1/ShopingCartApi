const express = require('express');
const mongoose = require('mongoose');
const cartRoutes = require('./routes/cartRoutes')
const productRoutes = require('./routes/productRoutes')


const app = express();
const PORT = 8000;

const DBURI =  'mongodb://localhost:27017/Shopdatabase'
mongoose.connect(DBURI)
    .then((result) => {
        app.listen(PORT,() =>{
            console.log(`server listening on port:${PORT} and connected to DB @ ${DBURI}`)
        
        })

    })
    .catch((err) => {
        console.log(err)
    })


app.use(express.json())



app.use('/cart',cartRoutes)
app.use('/product',productRoutes)

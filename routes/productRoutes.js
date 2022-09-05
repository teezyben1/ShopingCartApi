const productRouter = require('express').Router();
const {getAllProducts,getOneProduct,newProduct,modifyProduct,deleteProduct,addToCart} = require('../controllers/productController')

productRouter.get('/',getAllProducts)
productRouter.get('/:id', getOneProduct)
productRouter.post('/product',newProduct)
productRouter.put('/id', modifyProduct)
productRouter.delete('/:id',deleteProduct)
productRouter.put('/cart/:id',addToCart)


module.exports = productRouter;
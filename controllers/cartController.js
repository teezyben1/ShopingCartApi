const {Product,Cart}  = require('../models/apiModels')



const getAllCarts = async(req,res) =>{
    try{
        const cart = await Cart.find().populate({path:"products", model:Product})
        
        return res.json({
            status: cart ? '200' : '404',
            message: cart ? 'success' : 'fail',
            data:    cart
        })
    }
    catch(err){
  return res.json({
        status: "404",
        message: 'No product to display',
        data:    err.message

        })
    }
    

}


const getOneCart = async(req,res) => {
    try{
        const onecart = await Cart.findById( req.params.id)
        
        return res.json({
            status: onecart ? '200' : '404',
            message: onecart ? 'success' : 'fail',
            data:    onecart
        })
    }
    catch(err){
  return res.json({
        status: "404",
        message: 'No product to display',
        data:    err.message

        })
    }
    
}

const getItemOne = async(req,res) => {
    try{
        const productId = await Product.findOne({_id:req.params.productId})
        const cartId = await Cart.findOne({_id: req.params.cartId})
        const item = cartId.products.find(cp => {
          return productId._id.toString() == cp.toString()

        })
        
        return res.json({
            status: cartId ? '200' : '404',
            message: cartId ? 'success' : 'fail',
            data:    item
        })
    }
    catch(err){
        console.log(err)
  return res.json({
        status: "404",
        message: 'No product to display',
        data:    err.message

        })
    }
    
   
}

const removeItem = async(req,res) => {
    try{
        const productId = await Product.findOne({_id:req.params.productId})
        const cartId = await Cart.findOne({_id: req.params.cartId})
        const item = cartId.products.filter(cp => {
         return productId._id.toString() == cp.toString()

        })
        
        return res.json({
            status: cartId ? '200' : '404',
            message: cartId ? 'success' : 'fail',
            data:    item
        })
    }
    catch(err){
  return res.json({
        status: "404",
        message: 'No product to display',
        data:    err.message

        })
    }
    
   

}


module.exports = {
    getAllCarts,

    getOneCart,
    getItemOne,
    removeItem
    
}
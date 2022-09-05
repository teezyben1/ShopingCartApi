const {Product, Cart}  = require('../models/apiModels')


const getAllProducts = async (req,res) =>{
    try{
        const product = await Product.find();
        return res.json({
            status: product ? '200' : '404',
            message:    product ? 'success' : 'fail',
            data:       product
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


const getOneProduct = async (req,res) => {
    try{
        const product = await Product.findOne({_id: req.params.id});
        return res.json({
            status: product ? '200' : '404',
            message: product ? 'success' : 'fail',
            data: product
        })
    }
    catch(err){
        return res.json({
            status: "404",
            message: "No product with that id",
            data: err.message
        })
    }

}



const newProduct = async(req,res) => {
    try{
        const newProduct = new Product({...req.body});
        await newProduct.save();
        return res.json({
            status: newProduct ? "201" : "401",
            message: newProduct ? "success" : "fail",
            data: newProduct
        })




    }catch(err){
        return res.json({
            status: "500",
            message: "product not created",
            data: err.message
        })
    }
    
}


const modifyProduct = async (req,res) => {
    try{
        const product = await Product.findOneAndUpdate({_id:req.params.id},{...req.body});
        await product.save()
        return res.json({
            status: product ? '200' : "502",
            message: product ? "success" : "fail",
            data: product
        })


    }catch(err){
     return  res.json({
            status: "500",
            message: "no product to modify",
            data: err.message
        })
    }
    
}



const deleteProduct =async (req,res) => {
    try{
      const product =  await Product.findOneAndDelete({_id: req.params.id});
        return res.json({
            status: "200",
            message: "success",
            data: product
        })
    }
    catch(err){
        return res.json({
            message:"can not delete",
            data: err.message
        })
    }
    
}



const addToCart = async(req,res) => {
    try{
        const newCart = new Cart({});
    const id = req.params.id
    const product = await Product.findOne({_id: id})
    newCart.products.push(product._id);
    newCart.save();
    res.json({newCart})

    }catch(err){
        return res.json({
            status: "500",
            message:"can not add to cart",
            data: err.message
        })
    }
    
}

    




module.exports = {
    getAllProducts,
    getOneProduct,
    newProduct,
    modifyProduct,
    deleteProduct,
    addToCart

}
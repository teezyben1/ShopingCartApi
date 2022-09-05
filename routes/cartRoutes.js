const cartRoutes = require('express').Router();
const {getAllCarts,getOneCart,getItemOne,removeItem}  = require('../controllers/cartController')




cartRoutes.get('/',getAllCarts);
cartRoutes.get('/:id',getOneCart);
cartRoutes.get('/:cartId/:productId',getItemOne);
cartRoutes.delete('/:cartId/:productId',removeItem);
// cartRoutes.delete('/:id',deleteCart);



module.exports = cartRoutes;


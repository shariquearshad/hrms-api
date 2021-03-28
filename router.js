const {Router}=require('express');
const userController = require('./controllers/userController');
const router=Router()




module.exports  = ()=>{
 //return router;
    router.use('/user',userController())

  return router;
}
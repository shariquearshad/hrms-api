  const express=require('express');
  const config=require('./config')
  const router=require('./router');
  const app=express();

  
app.use(router())
 




  app.listen(config.port,()=>{
      console.log("server started on port " +config.port)
  }
  )
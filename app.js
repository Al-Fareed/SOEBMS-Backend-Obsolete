const express = require("express");
const app = express();
app.use((req,res,next)=>{
  console.log('Hello bro');
  
  next();
})
app.use((req, res, next) => {
  res.send('Hello, world!');
});
app.listen(5000);

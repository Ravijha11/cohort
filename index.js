// create an http server
// expresss
// node default liberary

const express = require('express');
const fs = require('fs');
const nodemon = require
// create an express server
const app = express();
function ravi(a){
  if(a==10){
    return "equal to 10 hai chal ab tera kaam ho gaya";
  }
  else{
    return "not equal to 10";
  }
}

app.get('/',(req,res)=> {
  const b = req.query.b;
  const c = ravi(b);
  res.send(`hi ur ans is ${c}`);
  
})
app.listen(3000);


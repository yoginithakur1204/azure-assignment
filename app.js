// const express = require('express');
// const app=express();

// var port= 3000;

// app.get('/',(req,res)=>res.send('Hello World'));
// app.listen(port ,()=>console.log("Server is running on port:3000"));


const express = require('express');
const app = express();
const port = 3000; // You can change this to any port you prefer

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});

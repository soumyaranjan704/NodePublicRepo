const express = require('express')// Express module just as you require other modules and puts it in a variable. var app = express(); => Calls the express function "express()" and puts new Express application inside the app variable (to start a new Express application)
const app = express();//create instance of express
const port = 8000 // server will run on this port (You can change the port number )
//NB: same port number you can't run different node project at the same time. 



app.get('/', (req, res) => {
  res.send('Hello  this is my first application!')  //this Hello World! message will show when you run this URL in your browser: http://localhost:3000/
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

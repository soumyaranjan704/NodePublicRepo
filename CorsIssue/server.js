const express = require('express')// Express module just as you require other modules and puts it in a variable. var app = express(); => Calls the express function "express()" and puts new Express application inside the app variable (to start a new Express application)
const app = express();//create instance of express
const port = 3000 // server will run on this port (You can change the port number )
//NB: same port number you can't run different node project at the same time. 


const cors = require('cors');



// CORS is enabled for the selected origins
let corsOptions = {
    origin: ['http://localhost:5500', 'http://localhost:3000']
};

// If you just want to allow a particular origin to access your site, then corsOptions will be as follows:

// let corsOptions = {
//     origin: 'http://localhost:5500'
//};


// Using cors as a middleware
app.get('/gfg-articles', cors(corsOptions),
    (req, res) => res.json('gfg-articles'))





app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})


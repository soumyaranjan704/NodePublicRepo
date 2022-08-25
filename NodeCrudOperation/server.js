
// Importing express module
const express = require('express')// Express module just as you require other modules and puts it in a variable. var app = express(); => Calls the express function "express()" and puts new Express application inside the app variable (to start a new Express application)
const app = express(); //create instance of express
const port = 3000 // server will run on this port

app.use(express.json());
 
 app.get('/', (req, res) => {
   res.send('Hello World!')
 })


app.get('/home', (req, res) => {
  res.sendFile(__dirname + '/index.html'); //run the .html file 
});
 
//****************GET****************** */
app.get('/newsletter', function (req, res) {
  res.json(  //it will send the json
    [{
      "newsLetterParagraph": "Design is not just what it looks like and feels like. Design is how it works.",
    }]


  )

});

//*************POST*********************** */
app.post('/user', (req, res) => {          
  const { username, password } = req.body;  // get the request from UI in json  format
  const { authorization } = req.headers;  //passing the headers with authorization token
  res.send({
    username,
    password,
    authorization,
  });
  console.log(req.body); // see the results in node terminal 

});


//************PUT*************** */
app.put('/putuserdata:', (req, res) => {
  res.send("PUT Request Called")
})


//*********DELETE***************** */
app.delete('/user/:id', (req, res) => {  
  res.send("DELETE Request Called");
})


  //PORT
app.listen(port, () => {
  console.log('Our express server is up on port 3000');
});





const express = require('express')// Express module just as you require other modules and puts it in a variable. var app = express(); => Calls the express function "express()" and puts new Express application inside the app variable (to start a new Express application)
const app = express();//create instance of express
const port = 3000 // server will run on this port (You can change the port number )
//NB: same port number you can't run different node project at the same time. 



//*********HTTP STATUS CODE***************** http://localhost:3000/ilove/cricket/soumya
var dataStore=[]
app.post('/ilove/:play/:name', function(req, res) {
    var choice = req.params.play;
    var name = req.params.name;
    if (name=='soumya'){ // check  the name is matching or not 
    dataStore.push({choice: choice,name: name});
    var responseObject = { message: 'Hey ' + name +  ' i love ' + ' '+ choice + '  too! ' }; //concatination  
    res.send(responseObject);
    }
    else{
        res.status(400).send();//when you post the data if its matching the name with soumya then data will be post with success 200 status code otherwise it will show 400 err status code.
    }
});

app.get('/iloves',function(req, res){
    if (dataStore.length==0){  // if dataStore is empty then it will show 404 http error status code
        res.status(404).send()  

    }else{
        res.send(dataStore); // if any value is present inside the dataStore then it will show 200 success message.
    }
    
})




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


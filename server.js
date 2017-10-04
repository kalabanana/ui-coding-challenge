const express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    fs = require('fs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));
app.use(cors({ origin: 'http://localhost:3000' }));

app.post('/api', function (req, res) {
    console.log("received a new state");
    fs.writeFile("data.txt", JSON.stringify(req.body), function(err) {
        if(err) {
            return console.log(err);
        }
        console.log("The file was saved!");
    });
    res.send("success");

});



app.listen(8080, function () {
   console.log("App is running on: ", 8080);
});

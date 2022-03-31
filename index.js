const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const fs = require('fs');
const fileName = 'bmi.json';

const bodyParser = require('body-parser');
const urlEncodedParser = bodyParser.urlencoded({extended: false});

// Load data from file
let rawData = fs.readFileSync(fileName);
let data = JSON.parse(rawData);

app.set('views','views');
app.set('view engine', 'hbs');
app.use(express.static('public'));

app.get('/', function(request, response){
    response.render('home');
});

app.get('/process-data', function (request, response) {
    data.sort((a, b) => (a.name > b.name) ? 1 : -1);
    response.send(data);
});

app.post('/process-data', urlEncodedParser, function(request, response){
    const fs = require('fs');
    const path = require('path');

    let info =
            {
                  weight: request.body.weight,
                  height: request.body.height,
                  BMI: request.body.BMI,
                  Summary: request.body.diagnosis
            };
            data.push(info);
            fs.writeFileSync(fileName, JSON.stringify(data, null, 2));
            response.render('results', info);

});


app.listen(port);
console.log(`server listening on port ${port}`);
console.log('Node server started on port 3000');

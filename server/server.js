const express = require('express'),
    mongoose = require('mongoose'),
    path = require('path'),
    bodyParser = require('body-parser'),
    db = require('./config/connection-config'),
    app = express(),
    PORT = 3000,
    cors = require('cors')


app.use(cors())

// Connection to MONGODB is established
mongoose.connect(db.url, { useNewUrlParser: true })
    .then(() => console.log(`Connection established!`))
    .catch((err => console.log(`Connection Failed : ${err.message}`)))

//Section : 5
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Everything starting with /food is routed to server
app.use('/food', require('./routes/route'));

// This loads the angular index.html from the client
app.use(express.static(path.join(__dirname, '../client/dist/feedTheNew')));
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './view/feedTheNew/dist/feedTheNew/index.html'));
});

// Error Handler
app.use((err, req, res, next) => {
    res.send(err);
});

// App Listen Port
app.listen(PORT, () => {
    console.log(`Server is listening at port : ${PORT}`);
});




















// const router = require('./routes/route');
// initializing express
// const app = express();
// seting port number


//Connection to the databse
/*mongoos.connect(db.url, db.opt, function(err,db){
    if(err){
        console.log(err);
    }
    else {
        console.log('connection successfull');
        db.close();
    }
    })*/
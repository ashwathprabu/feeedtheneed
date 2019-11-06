
// Section : 1
const express     = require('express'),
      mongoos     = require('mongoose'),
    //   mongo       = require('mongodb').mongo,
      path        = require('path'),
      bodyParser  = require('body-parser'),
      db          = require('./config/connect'),
      app         = express(),
      PORT        = 3000;
      const jwt = require('express-jwt'); 
      var cors = require('cors')
      app.use(cors())
//Section : 2
//Connection to the databse
mongoos.connect(db.url, {useNewUrlParser : true})
.then(()=> console.log('Connection established!'))
.catch((err => console.log('Connection failed :(')))

//Section : 3
// // Angular DIST output folder
// app.use(express.static(path.join(__dirname, './view/feedTheNew/dist/feedTheNew')));
// app.get('*', (req, res) => {
//    res.sendFile(path.join(__dirname, './view/feedTheNew/dist/feedTheNew/index.html'));
// });

// Section : 4
//error handling middleware
app.use((err, req, res, next) =>{
    res.send(err);
});


//Section : 5
app.use(bodyParser.urlencoded({extended : true}));  
app.use(bodyParser.json());

// routing config

app.use('/food', require('./routes/route'));


app.listen(PORT,()=>{
    console.log(`Server is listening at port : ${PORT}` );
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
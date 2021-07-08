const express = require('express');
const mongoose = require('mongoose'); 
const bugroutes=require("./routes/bug.routes");
var server = express();
const port = process.env.PORT | 4200;
const dburl = "mongodb://127.0.0.1:27017/bugs";
var bugcontroller=require('./controller/bug.controller');

mongoose.connect(dburl, { useUnifiedTopology: true, useNewUrlParser: true })
    .then((result) => {
        server.listen(port, (err) => {
            if (err)
                console.log("Error in start server");
            else
                console.log("db connected and server is up at port ", port);
        })
    }).catch((err) => {
        console.log(err);
})
server.set('view engine','ejs');
server.use(express.static('public'));
server.use(express.urlencoded({extended:true}));
// server.use(bugroutes); //server.use('bug',bugroutes); for localhost:4200/bugs/
 server.get('/',bugcontroller.findbug);
 server.post('/addbug',bugcontroller.addbug);
 server.delete('/:id',bugcontroller.deletebug);
server.use((req,res)=>{
    res.status(404).render('404');
});


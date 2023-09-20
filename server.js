
var express = require("express");
var app  = express();
var body_parser = require("body-parser");
var bodyparser = require("body-parser");
app.use(body_parser.json());
app.use(body_parser.urlencoded({extended:false}));

// app.use(bodyparser.json());
// app.use(bodyparser.urlencoded({extended:false}));
// app.use(express.static(__dirname+"/../login_auth"));
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
//fetch
var fetch = require("./fetch/fetch");
app.use("/fetch" , fetch);
// iiiii
//insert
var insert = require("./insert/insert");
app.use("/insert" ,insert );

//update
var update = require("./update/update");
app.use("/update" , update);
//delete
var remove = require("./delete/delete");
app.use("/delete" , remove);
//upload
var fileUpload = require("./fileupload/fileupload");
app.use("/uploadfile" , fileUpload);
//download
var filedownload = require("./download/download");
app.use("/download" , filedownload);

// var login =require("./login/login");
// app.use("/login" ,login );

app.listen(8080);
console.log("server listen 8080");
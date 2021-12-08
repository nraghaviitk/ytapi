var http = require ('http');
var url = require('url');
var fs = require('fs');
var express = require('express');
var app = express();
//const { check, valiResult } = require('express-validator');
var check = require('express-validator').check;
var valiResult = require('express-validator').validationResult;
var mysql = require('mysql');

var con = mysql.createConnection({
	host:'localhost',
	user:'monty',
	password:'fullmonty',
	database: 'firstdb'

});



var fs = require('fs');
var array = fs.readFileSync('titid.out').toString().split("\n");
//for(var i =0; i<40;i++) {
  //  console.log(array[i]);
//}


app.use(express.json());
app.use(express.urlencoded({
	extended:true
}));

con.connect(function(err){

	if(err) throw err;
	console.log("sql connected");

});

app.get("/wordsign",function(req,res){
res.sendFile(__dirname+"/wordsign.html");
console.log("sent");

});
app.get("/ws",function(req,res){
res.sendFile(__dirname+"/ws.html");
console.log("sent");

});
//6 random numbers for 6 grid slots on the page
app.get("/demo_get.asp",function(req,res){
var rn = [];
for (var i=0;i<6;i++){
rnum=Math.floor(Math.random()*6250);
	rn[2*i]=array[2*rnum];
	rn[2*i+1]=array[2*rnum+1];
	console.log(rnum);
	console.log(rn[2*i],rn[2*i+1])
} 
res.send(rn);
//console.log("sent text to xhttp");
});
app.listen(8080);


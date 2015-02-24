 var express = require('express');
 var app = express();
 var mongojs = require('mongojs');
 var db = mongojs('nodejs',['nodejs']);
 var bodyParser = require('body-parser');

 app.use(express.static(__dirname + "/public"));
 app.use(bodyParser.json());

 app.get('/mongodb', function(req,res){
 	console.log('I recieve a Get request')

 	db.nodejs.find(function (err,docs){
 		console.log(docs);
 		res.json(docs);
 	});

 });
app.post('/mongodb',function (req,res){
 		console.log(req.body);
 		db.nodejs.insert(req.body, function(err, doc){
 			res.json(doc);
 		})
});

 app.delete('/mongodb/:id',function (req,res){
 	var id = req.params.id;
 	console.log(id);
 	db.nodejs.remove({_id: mongojs.ObjectId(id)},function(err,doc){
 		res.json(doc);
 	})
 });
 app.post('/mongodb/:lats',function(req,res){
 	var lat = req.params.lats
 	console.log(lat);
 	db.nodejs.find({lat: mongojs.ObjectId(lats)},function(err,doc){
 		res.json(doc);
})
 });
 app.listen(3000);
 console.log("server running on port 3000");
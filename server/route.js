var express 	= require('express');
var router 		= express.Router();
var path 		= require('path');
var cache = require('memory-cache');


function getStatus(){
  return {
    "R":cache.get("R") || "0",
     "Y":cache.get("Y") || "0",
     "B":cache.get("B") || "0",
     "D":cache.get("D") || "0"
  }
}

//welcome page
router.get('/', function(req, res) {
  res.sendFile('index.html',{root: path.join(__dirname,'./../../public')});
});

router.put('/dance/:state',function(req,res){
    cache.put("D",req.params.state);
    res.status(200).send(getStatus());
});

router.put('/red/:state',function(req,res){
    cache.put("R",req.params.state);
    res.status(200).send(getStatus());
});

router.put('/yellow/:state',function(req,res){
    cache.put("Y",req.params.state);
    res.status(200).send(getStatus());
});

router.put('/buzz/:state',function(req,res){
    cache.put("B",req.params.state);
    res.status(200).send(getStatus());
});

module.exports = router;
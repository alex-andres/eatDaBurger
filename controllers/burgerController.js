const express = require('express');
const router = express.Router();
const burger = require('../models/burger');

router.get('/', (req, res) => {
  burger.selectAll((data) => {
    let hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render('index', hbsObject);
  });
});

router.post('/burgers/createOne', (req, res) => {
  burger.createOne(["name"
  ], [
    req.body.name
  ], function(result) {
    res.redirect("/");
  });
});

router.put('/burgers/updateOne:id', (req, res) =>{
  
  let condition = "id = " + req.params.id;
  console.log('condition' , condition)

  burger.updateOne({    
    eaten: req.body.eaten
  }, condition, function(result) {
    res.redirect("/");
  });
});


module.exports = router;
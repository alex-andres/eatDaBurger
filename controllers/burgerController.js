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

router.post('/api/burgers', (req, res) => {
  burger.create(req.params.name,(result) => {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } 
        else {
            res.status(200).end();
        };
  });
});

router.put('/api/burger/:id', (req, res) =>{
  
  var condition = req.body.condition;

  burger.update(req.params.id, condition, result =>{ 
      if (result.changedRows == 0) {
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
  });
});


module.exports = router;

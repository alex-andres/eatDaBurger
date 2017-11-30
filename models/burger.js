const orm = require('../config/orm.js');

let burger = {
  selectAll: (cb) => {
    orm.selectAll((res) => { 
      cb(res);
    });
  },
  create: (burgerName, cb) => {
    orm.createOne((burgerName,res) => {
      cb(res);
    });
  },
  update: (burgerId, condition, cb) => {
    orm.updateOne((burgerId, condition, res) => {
      cb(res);
    });
  }
};

module.exports = burger;

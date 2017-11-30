

const connection = require("../config/connection.js");


let orm = {
  selectAll: (cb) => { 
    connection.query('SELECT * FROM burgers', (err, result) => {
      if (err) throw err;
      cb(result);
    });
  },
  createOne: (burgerName,  cb) => {
    connection.query('INSERT INTO burgers SET ?', { burger_name: burgerName }, (error, result) => {
        if (err) throw err;
        cb(result);
    });
  },
  updateOne: (burgerId, condition, cb) => {
        connection.query('UPDATE burgers SET ? WHERE ?', [{ eaten: true}, { id: burgerId }], (error, result) => {
            if (error) throw error;
            callback(result);
        });
  }

};
module.exports = orm;

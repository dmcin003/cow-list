const db = require('../index.js');

module.exports = {

  getAll:(callback)=>{
    db.query('SELECT * FROM cows',(err, data)=>{
        if(err){
          callback(err,null);
        } else {
          callback(null,data);
        }
    })
  },

  create:(cow, callback)=>{
    db.query(`INSERT INTO cows (name,description) VALUES('${cow.name}','${cow.description}')`,(err,data)=>{
      if(err){
        callback(err,null);


      }else{
        callback(null,data);

      }
    })

  }



}
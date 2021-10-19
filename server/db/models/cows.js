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

  },

  update:(newCow,oldCow,callback)=>{

    db.query(`UPDATE cows SET name='${newCow.name}', description='${newCow.description}'
    WHERE name='${oldCow.name}'`,(err,data)=>{
      if(err){
        callback(err,null);
      } else{
        callback(null,data);
      }
    })

  }



}
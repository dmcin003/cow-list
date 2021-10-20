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



    db.query(`UPDATE cows SET name='${newCow.newName}', description='${newCow.newDescription}'
    WHERE name='${oldCow.name}'`,(err,data)=>{
      if(err){

        callback(err,null);
      } else{

        callback(null,data);
      }
    })

  },

  delete:(cow, callback)=>{
    console.log('This is the cow to be deleted:', cow);
    db.query(`DELETE FROM cows WHERE name='${cow.name}'`,(err,data)=>{
      if(err){
        callback(err,null);
        console.log(err);

      } else{
        callback(null,data);
      }
    })
  }



}
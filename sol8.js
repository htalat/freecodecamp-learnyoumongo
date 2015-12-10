var mongo = require('mongodb').MongoClient

mongo.connect('mongodb://localhost:27017/learnyoumongo' ,function(err,db){
    if(err)
        throw err
    
    db.collection('parrots')
    .count({
        age : {$gt : +process.argv[2]}
        },function(err,c){
        if(err)
            throw err
        console.log(c)
        db.close()
    })
  
})
var mongo = require('mongodb').MongoClient

mongo.connect('mongodb://localhost:27017/learnyoumongo',function(err,db){
    if(err)
        throw err
        
    var obj = {firstName:process.argv[2],lastName:process.argv[3]}
    db.collection('docs')
    .insert(obj,function(err,data){
        
        if(err) 
            throw err;
        
        console.log(JSON.stringify(obj))
        db.close()
    })
    
    
        
});
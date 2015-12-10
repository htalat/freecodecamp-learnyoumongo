var mongo = require('mongodb').MongoClient

mongo.connect('mongodb://localhost:27017/learnyoumongo' ,function(err,db){
    if(err)
        throw err
    
    db.collection('prices')
    .aggregate(
        [
            {$match: {size:process.argv[2]} },
            {$group: { _id:'total',total:{$avg:'$price'} } }
        ])
    .toArray(function(err,results){
        if(err)
            throw err
        if(!results.length)
            throw new Error('no results')
        var r  = results[0].total
        console.log( Number(r).toFixed(2))
        db.close()
    })
   
  
})
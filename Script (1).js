db = db.getSiblingDB("Pobrane");
db.getCollection("Collection1").find({});

db.Collection1.aggregate([{
    $lookup:{
        from:'Collection2',
        localField:'plain_id',
        foreignField:'plain_id',
        as:'crew'
    }
}])
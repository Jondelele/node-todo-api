// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');
// var obj = new ObjectID();
// console.log(obj.id);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
        console.log('Unable to connect to the MongoDB server')
    }
    console.log('Connected to MongoDB server');

    // db.collection('Todos').insertOne({
    //     text: 'Ruoki kollimaani',
    //     completed: false
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert todo', err);
    //     }
    //
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    // db.collection('Users').insertOne({
    //     name: 'Joona Prehti',
    //     age: 22,
    //     location: 'Tampere 33720'
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert user', err)
    //     }
    //
    //     console.log(result.ops[0]._id.getTimestamp());
    // });

    db.close();
});
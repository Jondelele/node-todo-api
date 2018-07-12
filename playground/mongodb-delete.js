// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');
// var obj = new ObjectID();
// console.log(obj.id);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
        console.log('Unable to connect to the MongoDB server')
    }
    console.log('Connected to MongoDB server');

    // deleteMany
    // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
    //     console.log(result);
    // });

    // deleteOne
    // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
    //    console.log(result);
    // });

    // findOneAndDelete
    // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    //    console.log(result);
    // });

    // db.collection('Users').deleteMany({name: 'Joona Prehti'}).then((result) => {
    //    console.log(JSON.stringify(result, undefined, 2));
    // });

    db.collection('Users').findOneAndDelete({_id: new ObjectID('5b465057882d6c2ad00c6fce')}).then((result) => {
        console.log(JSON.stringify(result, undefined, 2);
    });

    // db.close();
});
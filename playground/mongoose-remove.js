const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//     console.log(result);
// });

// Todo.findOneAndRemove();
// Todo.findByIdAndRemove();

// Todo.findOneAndRemove({_id: '5b5474f4639bb48e95c00ca3'});

// Todo.findByIdAndRemove('5b5474f4639bb48e95c00ca3').then((todo) => {
//     console.log(todo);
// });
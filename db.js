const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const users = new Schema({
  username: {type:String, unique:True},
  password: String,
  nae: String
});

const todos = new Schema({
    desc:"String",
    done:"String",
    userid: ObjectId,
      
});

const UserModel = mongoose.model('users', users);
const TodoModel = mongoose.model('todos', todos);

module.exports = {
    UserModel,
    TodoModel
}
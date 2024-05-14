import mongoose from "mongoose";
//Defining Schema
const todoSchema = new mongoose.Schema({
    title: { type: String, require: true, unique: true },
    desc: { type: String, require: true },
    status: { type: String, require: true },
});
const Todo = mongoose.model("task", todoSchema);
export { Todo, };

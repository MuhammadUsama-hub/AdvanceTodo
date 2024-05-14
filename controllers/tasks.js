import { Todo } from '../models/todo.js';
async function handleGetAllTasks(req, res) {
    const allTasks = await Todo.find({});
    return res.status(200).json(allTasks);
}
async function handleNewTask(req, res) {
    await Todo.create(req.body);
    return res.status(201).json({ mesg: 'Created Task' });
}
async function handleUpdateTask(req, res) {
    const userId = await Todo.findByIdAndUpdate(req.params.id, req.body);
    if (!userId) {
        return res.sendStatus(404);
    }
    return res.sendStatus(200);
}
async function handleDeleteTask(req, res) {
    const userId = await Todo.findByIdAndDelete(req.params.id);
    if (!userId) {
        return res.sendStatus(404);
    }
    return res.sendStatus(200);
}
async function handleGetTask(req, res) {
    const userId = await Todo.findById(req.params.id);
    if (!userId) {
        return res.sendStatus(404);
    }
    return res.status(200).json(userId);
}
export { handleGetAllTasks, handleNewTask, handleUpdateTask, handleDeleteTask, handleGetTask, };

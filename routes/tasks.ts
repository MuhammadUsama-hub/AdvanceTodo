import express from 'express'
import {handleGetAllTasks
    ,handleNewTask
    ,handleUpdateTask,
    handleDeleteTask,
    handleGetTask
} from '../controllers/tasks.js'

const router = express.Router()

router.route('/')
.get(handleGetAllTasks)
.post(handleNewTask)

router.route('/:id')
.patch(handleUpdateTask)
.delete(handleDeleteTask)

router.get('/:id',handleGetTask)
export {
    router
}
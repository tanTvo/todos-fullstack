import Todo from '../models/TodoModel.js'

export const getTodos = async (req, res) => {
    try {
        const todos = await Todo.find()
        res.status(200).json(todos)
    } catch(err) {
        console.log(err.message)
        res.status(400).json(err)
    }
}

export const createTodo = async (req, res) => {
    try {
        console.log(req.body)
        const todo = await Todo.create(req.body)
        res.status(200).json(todo)
    } catch(err) {
        console.log(err.message)
        res.status(400).json(err)
    }
}

export const deleteTodo = async (req, res) => {
    try {
        await Todo.findByIdAndDelete(req.params.id)
        res.status(200).json({ message: 'successfully deleted' })
    } catch (err) {
        console.log(err.message)
        res.status(400).json(err)
    }
}
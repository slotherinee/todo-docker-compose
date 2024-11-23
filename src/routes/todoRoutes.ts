import { Router } from "express";
import * as TodoController from '../controllers/todoController';

const router = Router();

router.get('/todos', TodoController.getAllTodos);
router.get('/todos/:id', TodoController.getTodo);
router.post('/todos', TodoController.createTodo);
router.put('/todos/:id', TodoController.updateTodo);
router.delete('/todos/:id', TodoController.deleteTodo);

export default router;
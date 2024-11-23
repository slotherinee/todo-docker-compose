// /src/controllers/todoController.ts
import { Request, Response } from 'express';
import * as TodoService from '../services/todoService';

// Get all todos
export const getAllTodos = async (req: Request, res: Response): Promise<void> => {
  try {
    const todos = await TodoService.getTodos();
    res.status(200).json(todos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a todo by ID
export const getTodo = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  try {
    const todo = await TodoService.getTodoById(Number(id));
    if (todo) {
      res.status(200).json(todo);
    } else {
      res.status(404).json({ message: 'Todo not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new todo
export const createTodo = async (req: Request, res: Response): Promise<void> => {
  const { task } = req.body;
  try {
    const newTodo = await TodoService.createTodo(task);
    res.status(201).json(newTodo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a todo by ID
export const updateTodo = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  const { task, completed } = req.body;
  try {
    const updatedTodo = await TodoService.updateTodo({
        id: Number(id),
        task,
        completed,
    });
    if (updatedTodo) {
      res.status(200).json(updatedTodo);
    } else {
      res.status(404).json({ message: 'Todo not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a todo by ID
export const deleteTodo = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  try {
    const success = await TodoService.deleteTodo(Number(id));
    if (success) {
      res.status(200).json({ message: 'Todo deleted' });
    } else {
      res.status(404).json({ message: 'Todo not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

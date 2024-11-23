import * as TodoRepository from '../repositories/todoRepository';
import { Todo } from '../DTO/todoDTO';

export const createTodo = async (task: string): Promise<Todo> => {
    if (!task || task.trim().length === 0) {
        throw new Error('Task cannot be empty');
    }
    return await TodoRepository.createTodo(task);
}

export const getTodos = async (): Promise<Todo[]> => {
    return await TodoRepository.getTodos();
}

export const getTodoById = async (id: number): Promise<Todo | null> => {
    return await TodoRepository.getTodoById(id);
}

export const updateTodo = async (todo: Todo): Promise<Todo | null> => {
    if (!todo.task || todo.task.trim().length === 0) {
        throw new Error('Task cannot be empty');
    }
    return await TodoRepository.updateTodo(todo);
}

export const deleteTodo = async (id: number): Promise<Todo | null> => {
    return await TodoRepository.deleteTodo(id);
}
import { pool } from "../db";
import { Todo } from "../DTO/todoDTO";

// create a new todo
export const createTodo = async (task: string): Promise<Todo> => {
    const result = await pool.query(
        'INSERT INTO todos (task, completed) VALUES ($1, $2) RETURNING *',
        [task, false]
    );
    return result.rows[0];
}

// get all todos
export const getTodos = async (): Promise<Todo[]> => {
    return (await pool.query('SELECT * FROM todos')).rows;
}

// get a single todo
export const getTodoById = async (id: number): Promise<Todo | null> => {
    return (await pool.query('SELECT * FROM todos WHERE id = $1', [id])).rows[0] || null;
}

// update a todo
export const updateTodo = async (todo: Todo): Promise<Todo | null> => {
    return (await pool.query(
        'UPDATE todos SET task = $1, completed = $2 WHERE id = $3 RETURNING *',
        [todo.task, todo.completed, todo.id]
    )).rows[0] || null;
}

// delete a todo
export const deleteTodo = async (id: number): Promise<Todo | null> => {
    return (await pool.query('DELETE FROM todos WHERE id = $1 RETURNING *', [id])).rows[0] || null;
}
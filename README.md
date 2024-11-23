## Getting Started

Follow these steps to set up and run the project:

1. **Clone the Repository**
    ```sh
    git clone https://github.com/slotherinee/todo-docker-compose.git
    ```

2. **Ensure Docker is Installed**
    - [Download Docker](https://www.docker.com/products/docker-desktop) if you haven't already.

3. **Build and Run the Containers**
    ```sh
    docker-compose up --build
    ```

4. **Set .env variables**
    - Create a `.env` file in the root directory of the project.
    - Add the following environment variables to the `.env` file:
    
      ```
      PG_USER=your_pg_user
      PG_HOST=localhost
      PG_DATABASE=todo_db
      PG_PASSWORD=your_pg_password
      PG_PORT=5432
      PORT=3000
      ```

5. **Test the API**
    - Access the API endpoints to interact with todos:
      - Get all todos:
        ```
        GET http://localhost:3000/api/todos
        ```
      - Get a specific todo by ID:
        ```
        GET http://localhost:3000/api/todos/:id
        ```
      - Create a new todo:
        ```
        POST http://localhost:3000/api/todos
        ```
      - Update an existing todo by ID:
        ```
        PUT http://localhost:3000/api/todos/:id
        ```
      - Delete a todo by ID:
        ```
        DELETE http://localhost:3000/api/todos/:id
        ```

Enjoy your new Todo App!

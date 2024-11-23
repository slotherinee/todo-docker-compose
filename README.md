## Getting Started

Follow these steps to set up and run the project:

1. **Clone the Repository**
    ```sh
    git clone <repository-url>
    ```

2. **Ensure Docker is Installed**
    - [Download Docker](https://www.docker.com/products/docker-desktop) if you haven't already.

3. **Build and Run the Containers**
    ```sh
    docker-compose up --build
    ```

4. **Test the API**
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
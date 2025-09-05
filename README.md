# Student Guidance Platform

This platform is designed to address the decline in student enrollment in government degree colleges by providing comprehensive guidance to students after Class 10 and 12. It helps them understand the importance of graduation, explore available courses, and discover career opportunities.

## Tech Stack

- **Frontend:** React, Tailwind CSS, Vite
- **Backend:** Node.js, Express.js, MongoDB, Docker

## Project Structure

This project is a monorepo containing two independent services:
-   `/frontend`: A Vite + React application.
-   `/backend`: A Node.js + Express API.

## Getting Started: Running the Backend

The entire backend environment (API server + database) is managed with Docker Compose.

### Prerequisites

-   Docker
-   Docker Compose

### 1. Create an Environment File

The backend service requires a `JWT_SECRET` for signing authentication tokens. Create a file named `.env` in the root of the project:

```env
# .env
JWT_SECRET=your_super_secret_and_long_random_string_here
```
Replace the placeholder with a long, random string.

### 2. Run the Services

With Docker running, execute the following command from the root of the project:

```bash
docker-compose up --build
```

This command will:
1.  Build the backend Docker image.
2.  Start the backend container.
3.  Start a MongoDB database container.
4.  Connect them automatically.

The backend API will be available at `http://localhost:5000`. The MongoDB database will be accessible on port `27017`.

To stop the services, press `Ctrl + C`. To stop and remove the containers, run `docker-compose down`.

## Getting Started: Running the Frontend

The frontend is a standard Vite application.

1.  **Navigate to the frontend directory:**
    ```bash
    cd frontend
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Run the development server:**
    ```bash
    npm run dev
    ```

## API Endpoints

The backend provides the following RESTful API endpoints:

### Auth (`/api/auth`)
-   `POST /register`: Register a new user.
-   `POST /login`: Log in a user and receive a JWT.

### Colleges (`/api/colleges`)
-   `GET /`: Get a list of all colleges.
-   `POST /`: Create a new college.

### Courses (`/api/courses`)
-   `GET /`: Get a list of all courses.
-   `POST /`: Create a new course.

### Quizzes (`/api/quizzes`)
-   `GET /sample`: Get a sample aptitude quiz.

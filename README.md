# Student Guidance Platform

This platform is designed to address the decline in student enrollment in government degree colleges by providing comprehensive guidance to students after Class 10 and 12.

## Project Structure

This repository is a monorepo containing two independent services:
-   `/frontend`: A Vite + React application for the user interface.
-   `/backend`: A Node.js + Express API for the business logic.

## Local Development

### Prerequisites
-   Docker and Docker Compose
-   Node.js and npm (for frontend-only development)

### Running the Full Stack (Recommended)
This is the easiest way to get both the backend API and the database running.

1.  **Create an Environment File:**
    Create a file named `.env` in the root of the project by copying the example file:
    ```bash
    cp .env.example .env
    ```
    Update `.env` with a secure `JWT_SECRET`.

2.  **Run Docker Compose:**
    From the root of the project, run:
    ```bash
    docker-compose up --build
    ```
    The backend API will be available at `http://localhost:5000` and the database at `mongodb://localhost:27017`.

3.  **Run the Frontend:**
    In a separate terminal, navigate to the frontend directory and start the dev server:
    ```bash
    cd frontend
    npm install
    npm run dev
    ```
    The frontend will be available at `http://localhost:5173` (or another port if 5173 is in use).

## API Documentation
The API is documented with Swagger. Once the backend is running, you can view the interactive documentation at:
[http://localhost:5000/api-docs](http://localhost:5000/api-docs)

## Testing
-   **Backend:** `cd backend && npm test`
-   **Frontend:** `cd frontend && npm test`

## Deployment
For detailed deployment instructions, see [DEPLOY.md](DEPLOY.md).

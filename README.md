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

## Deployment

This project is designed to be deployed with the frontend and backend as separate services.

### Backend on Render

1.  **Create a new "Web Service"** on Render and connect it to your GitHub repository.
2.  **Settings:**
    *   **Environment:** `Docker`
    *   **Root Directory:** Leave blank (Render will detect the `docker-compose.yml`)
    *   **Docker Compose File:** `docker-compose.yml` (This should be the default)
    *   **Service Name (in compose file):** `backend`
3.  **Database:** Create a new **MongoDB** instance on Render or use a free tier from MongoDB Atlas.
4.  **Environment Variables:**
    *   Click on the "Environment" tab for your backend service.
    *   Add a secret file for your `.env` content, or add the following environment variables manually:
        *   `MONGO_URI`: The connection string for your MongoDB Atlas or Render MongoDB instance.
        *   `JWT_SECRET`: A long, secure, random string for signing tokens.
        *   `PORT`: `5000` (or whatever port you have configured). Render sets this automatically, but it's good to be aware of.
5.  **Deploy:** Click "Create Web Service". Render will build and deploy your backend. Your API URL will be provided on the dashboard.

### Frontend on Vercel

1.  **Create a new "Project"** on Vercel and connect it to your GitHub repository.
2.  **Build & Development Settings:**
    *   **Framework Preset:** `Vite`
    *   **Root Directory:** `frontend`
3.  **Environment Variables:**
    *   Add an environment variable for your backend API URL:
        *   `VITE_API_URL`: `https://your-render-backend-url.onrender.com`
4.  **Deploy:** Click "Deploy". Vercel will build and deploy your frontend.

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

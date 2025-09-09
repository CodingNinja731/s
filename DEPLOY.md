# Deployment Instructions

This document provides step-by-step instructions for deploying the frontend and backend services to Vercel and Render, respectively.

## Backend Deployment (Render)

The backend is containerized with Docker and can be easily deployed to Render.

1.  **Create a MongoDB Database:**
    Before deploying the backend, you need a cloud-hosted MongoDB instance. You can create a free-tier database on [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) or use Render's native MongoDB service. Once created, get the connection string.

2.  **Create a New Web Service on Render:**
    -   Navigate to your Render dashboard and create a new **Web Service**.
    -   Connect it to your GitHub repository.

3.  **Configure the Service:**
    -   **Environment:** Select `Docker`.
    -   **Service Name (in compose file):** Render should detect your `docker-compose.yml`. Ensure it's pointing to the `backend` service.
    -   **Health Check Path:** Set this to `/health`.

4.  **Set Environment Variables:**
    -   Go to the "Environment" tab for your new service.
    -   Add the following environment variables:
        -   `MONGO_URI`: The connection string for your MongoDB Atlas or Render MongoDB instance.
        -   `JWT_SECRET`: A long, secure, random string for signing tokens.
        -   `FRONTEND_URL`: The URL where your frontend will be deployed (e.g., `https://your-app-name.vercel.app`).

5.  **Deploy:**
    -   Click "Create Web Service". Render will build the Docker image and deploy your backend.
    -   Your API URL will be provided on the Render dashboard (e.g., `https://your-backend-name.onrender.com`).

## Frontend Deployment (Vercel)

The frontend is a Vite application and can be easily deployed to Vercel.

1.  **Create a New Project on Vercel:**
    -   Navigate to your Vercel dashboard and create a new **Project**.
    -   Connect it to your GitHub repository.

2.  **Configure the Project:**
    -   **Framework Preset:** Vercel should automatically detect `Vite`.
    -   **Root Directory:** Set this to `frontend`. This is crucial for Vercel to find your frontend code.

3.  **Set Environment Variables:**
    -   In the project settings, go to "Environment Variables".
    -   Add an environment variable for your backend API URL:
        -   `VITE_API_URL`: The URL of your deployed Render backend service (e.g., `https://your-backend-name.onrender.com/api`).

4.  **Deploy:**
    -   Click "Deploy". Vercel will build and deploy your frontend.

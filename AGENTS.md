## System Components

This document outlines the architecture and components of the Student Guidance Platform.

### 1. Frontend

- **Framework:** React with Vite
- **Styling:** Tailwind CSS
- **Purpose:** To provide an interactive and responsive user interface for students.
- **Key Components:**
    - **Dashboard:** Personalized space for students.
    - **Quiz:** Aptitude and interest assessment.
    - **College Directory:** Searchable and filterable list of colleges.
    - **Career Visualizer:** Interactive charts showing career paths.
    - **Forms:** For user registration, login, and profile updates.

### 2. Backend

- **Framework:** Node.js with Express.js
- **Purpose:** To handle business logic, data processing, and serve the frontend with necessary data via a RESTful API.
- **Key Features:**
    - **Authentication:** JWT-based authentication and authorization.
    - **API Endpoints:** Secure endpoints for quizzes, colleges, careers, and student profiles.
    - **Validation:** Input validation and error handling on all API routes.

### 3. Database

- **System:** MongoDB
- **Purpose:** To store all application data.
- **Schema:**
    - **Students:**
        - `name` (String)
        - `email` (String, unique)
        - `password` (String, hashed)
        - `age` (Number)
        - `academicInterests` (Array of Strings)
        - `quizResults` (Array of Objects)
    - **Colleges:**
        - `name` (String)
        - `location` (Object with city, state, pincode)
        - `courses` (Array of Strings)
        - `medium` (String)
        - `facilities` (Array of Strings)
    - **Courses:**
        - `name` (String)
        - `stream` (String - Arts, Science, Commerce, etc.)
        - `careerPaths` (Array of Objects)
    - **Quizzes:**
        - `title` (String)
        - `questions` (Array of Objects)

### 4. AI Recommendation Engine (Future Implementation)

- **Purpose:** To provide personalized recommendations for courses and colleges.
- **Methodology:**
    - Will use collaborative filtering and content-based filtering.
    - Matches student quiz results and profile interests with course and college data.
    - The model will be trained on student data to improve recommendations over time.

### Development Workflow

- All backend code resides in the `/backend` directory.
- All frontend code resides in the `/frontend` directory.
- Run tests before committing changes.
- Ensure code is modular and follows the defined structure.

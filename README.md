# TaskForge Backend

This is the backend server for **TaskForge**, a task management web application. The backend is built using **Node.js**, **Express.js**, and **MongoDB**, providing a RESTful API for task management and user authentication.

---

## 🔧 Features

- User Registration & Login (with JWT Auth)
- Secure Password Hashing (bcrypt)
- CRUD Operations for Tasks
- Mark Tasks as Complete/Incomplete
- Filter and Search Tasks
- Protected Routes via Middleware

---

## 🛠 Tech Stack

- Node.js
- Express.js
- MongoDB with Mongoose
- JWT for authentication
- bcryptjs for password hashing
- dotenv for environment configuration

---

## 📁 Folder Structure

backend/
├── controllers/
│ ├── authController.js
│ └── taskController.js
├── models/
│ ├── User.js
│ └── Task.js
├── routes/
│ ├── authRoutes.js
│ └── taskRoutes.js
├── middleware/
│ └── authMiddleware.js
├── config/
│ └── db.js
├── .env
├── server.js
└── package.json

2. Install Dependencies
bash
Copy
Edit
npm install
3. Setup Environment Variables
Create a .env file in the backend/ directory:

env
Copy
Edit
PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
4. Start the Server
bash
Copy
Edit
npm run dev
Server will run on http://localhost:5000.

📌 API Endpoints
Auth Routes
Method	Endpoint	Description
POST	/api/auth/register	Register a new user
POST	/api/auth/login	Login and get token

Task Routes
Method	Endpoint	Description
GET	/api/tasks	Get all tasks (auth required)
POST	/api/tasks	Create a new task
PUT	/api/tasks/:id	Update a task by ID
DELETE	/api/tasks/:id	Delete a task by ID

🧪 Sample Task Object

{
  "title": "Complete ChatGPT README",
  "description": "Write the backend readme for TaskForge",
  "completed": false,
  "dueDate": "2025-06-30"
}

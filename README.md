📚 Bookstore Management System (MERN Stack)

A simple and functional bookstore management web application built with the MERN stack.
Users can browse books, manage their cart, and place orders. Admins can add, edit, and remove books.
The focus of the project is clean code, basic e-commerce flow, and a clear split between frontend and backend.

🔗 Live Demo

Frontend:
https://bookstore-management-system-frontend.onrender.com

🛠️ Tech Stack
Frontend

React

React Router

Axios

CSS / Tailwind (depending on component usage)

Backend

Node.js

Express.js

MongoDB + Mongoose

JWT Authentication

bcrypt for password hashing

Tools & Deployment

Render

MongoDB Atlas

Postman

Git & GitHub

✨ Features

User registration and login

JWT-based authentication

Add, edit, delete books (Admin only)

Browse all books with details

Add to cart and remove from cart

Place orders

REST API structure

Clean, responsive UI

Basic error handling

📁 Project Structure
Bookstore/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── hooks/
│   │   └── utils/
│   └── package.json
│
├── backend/
│   ├── routes/
│   ├── controllers/
│   ├── models/
│   ├── middleware/
│   └── server.js
│
└── README.md

🚀 Getting Started
1. Clone the repository
git clone https://github.com/rtlearn/bookstore-management-system
cd bookstore-management-system

⚙️ Backend Setup
2. Install backend dependencies
cd backend
npm install
npm run server

Environment Variables

Create a .env file:

MONGO_URI=your_mongo_url
JWT_SECRET=your_secret_key
PORT=5000

💻 Frontend Setup
3. Install frontend dependencies
cd frontend
npm install
npm start

📡 API Endpoints Overview
Auth

POST /api/auth/register

POST /api/auth/login

Books

GET /api/books

POST /api/books

PUT /api/books/:id

DELETE /api/books/:id

Orders

POST /api/orders

GET /api/orders/:userId

🧪 Testing

Use Postman or Thunder Client.

After logging in, copy your JWT token and send it in headers:

Authorization: Bearer <token>

📌 Future Improvements

Admin dashboard with stats

Payment integration

Filter and category system

Stock management

Better UI design

Deployment on Vercel/Netlify

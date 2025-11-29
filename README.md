📚 Bookstore Management System (MERN Stack)

A simple and functional bookstore management application built with the MERN stack.
It allows users to browse books, manage their cart, place orders, and for admins to manage book data.
The project focuses on clean code, basic e-commerce flows, and a clear separation between frontend and backend.

🔗 Live Demo

Frontend:
https://bookstore-management-system-frontend.onrender.com

🛠️ Tech Stack

Frontend: React, React Router, Axios, CSS (or Tailwind, based on components used)
Backend: Node.js, Express.js, MongoDB, Mongoose
Auth: JWT, bcrypt
Deployment: Render, MongoDB Atlas
Tools: Git, Postman

✨ Features

User signup and login

JWT-based authentication

Add / edit / delete books (Admin)

View all books with details

Add to cart and remove from cart

Place orders

REST API structure

Clean and responsive UI

Basic error handling on both frontend and backend

📦 Project Structure
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

2. Setup Backend
cd backend
npm install
npm run server


Create a .env file inside the backend folder:

MONGO_URI=your_mongo_url
JWT_SECRET=any_secret_key
PORT=5000

3. Setup Frontend
cd frontend
npm install
npm start

📡 API Overview
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

You can test API routes using Postman or Thunder Client.
Login to receive a JWT token, then pass it in:

Authorization: Bearer <token>

📌 Future Improvements

Admin dashboard with charts

Payment integration

Categories & filters

Stock management

Better UI components

Deployment on Vercel/Netlify


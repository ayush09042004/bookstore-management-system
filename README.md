# 📚 Bookstore Management System (MERN Stack)

A simple and functional bookstore management application built with the MERN stack.  
Users can browse books, manage their cart, and place orders.  
Admins can add, edit, and remove books.  
The project focuses on clean code and basic e-commerce flow.

---

## 🔗 Live Demo
Frontend: https://bookstore-management-system-frontend.onrender.com

---

## 🛠️ Tech Stack

Frontend:
- React
- React Router
- Axios
- CSS / Tailwind

Backend:
- Node.js
- Express.js
- MongoDB + Mongoose
- JWT
- bcrypt

Deployment:
- Render
- MongoDB Atlas

---

## ✨ Features
- User signup & login  
- JWT-based authentication  
- Add, edit, delete books (Admin)  
- View all books  
- Add to / remove from cart  
- Place orders  
- REST API structure  
- Responsive UI  

---




## 🚀 Getting Started

1. Clone the repository  
   git clone https://github.com/rtlearn/bookstore-management-system  
   cd bookstore-management-system  

---

## ⚙️ Backend Setup

Install backend dependencies:  
cd backend  
npm install  
npm run server  

Create a .env file inside backend:  
MONGO_URI=your_mongo_url  
JWT_SECRET=secret_key  
PORT=5000  

---

## 💻 Frontend Setup

Install frontend dependencies:  
cd frontend  
npm install  
npm start  

---

## 📡 API Endpoints

Auth:
- POST /api/auth/register
- POST /api/auth/login

Books:
- GET /api/books
- POST /api/books
- PUT /api/books/:id
- DELETE /api/books/:id

Orders:
- POST /api/orders
- GET /api/orders/:userId

---

## 🧪 Testing

Use Postman or Thunder Client.  
After login, include your JWT token:

Authorization: Bearer <token>

---

## 📌 Future Improvements
- Admin dashboard  
- Payment gateway  
- Book categories & filters  
- Stock management  
- Better UI  
- Deployment to Vercel/Netlify  

---

## 👤 Author
Ayush Kumar Zindal  
Email: ayushzindal@gmail.com  


# 🚀 SpendSense – Personal Finance Dashboard (Backend API)

## 📌 Project Title

**SpendSense – Backend API**

---

## 📖 Project Overview

SpendSense Backend is a RESTful API built to support the SpendSense Personal Finance Dashboard application.
It handles user authentication, transaction management, budget tracking, financial goals, and data storage.

This backend provides secure API endpoints that allow the frontend to perform CRUD operations and manage financial data efficiently.

The application follows a clean and scalable architecture using modern backend development practices.

---

## 🛠 Tech Stack Used

### Backend Technologies

* Node.js
* Express.js
* PostgreSQL / Supabase (Database)
* JWT Authentication
* dotenv (Environment Variables)
* CORS Middleware

### Deployment

* Render (Backend Hosting)
* GitHub (Version Control)

---

## 🏗 Architecture Overview

```text
src/
 ├── routes/
 ├── controllers/
 ├── models/
 ├── middleware/
 ├── utils/
 └── server.js
```

* **Routes** → API endpoints
* **Controllers** → Business logic
* **Models** → Database interactions
* **Middleware** → Authentication & error handling
* **Server.js** → Entry point

---

## 🔐 Authentication Flow

* Users can register using email & password.
* Passwords are securely stored (hashed).
* On login, JWT token is generated.
* Token must be sent in request headers for protected routes.

---

## 📡 API Documentation

### 🔑 Authentication APIs

#### Register User

POST `/api/auth/register`

Request Body:

```json
{
  "name": "User",
  "email": "user@example.com",
  "password": "123456"
}
```

---

#### Login User

POST `/api/auth/login`

Request Body:

```json
{
  "email": "user@example.com",
  "password": "123456"
}
```

Response:

```json
{
  "token": "jwt_token_here"
}
```

---

### 💰 Transaction APIs

#### Get All Transactions

GET `/api/transactions`

#### Add Transaction

POST `/api/transactions`

```json
{
  "amount": 5000,
  "category": "Salary",
  "type": "income",
  "date": "2026-02-01"
}
```

#### Update Transaction

PUT `/api/transactions/:id`

#### Delete Transaction

DELETE `/api/transactions/:id`

---

### 📊 Budget APIs

#### Get Budgets

GET `/api/budgets`

#### Add Budget

POST `/api/budgets`

```json
{
  "category": "Food",
  "limit": 3000
}
```

---

### 🎯 Goals APIs

#### Get Goals

GET `/api/goals`

#### Add Goal

POST `/api/goals`

```json
{
  "title": "New Laptop",
  "targetAmount": 80000,
  "savedAmount": 20000
}
```

---

## 🗄 Database Schema Explanation

### Users Table

* id (Primary Key)
* name
* email
* password
* created_at

### Transactions Table

* id
* user_id (Foreign Key)
* amount
* category
* type (income / expense)
* date
* created_at

### Budgets Table

* id
* user_id
* category
* limit
* created_at

### Goals Table

* id
* user_id
* title
* target_amount
* saved_amount
* created_at

---

## ⚙️ Installation Steps

### 1️⃣ Clone Repository

```bash
git clone https://github.com/YOUR_USERNAME/spendsense-backend.git
```

### 2️⃣ Navigate to Folder

```bash
cd spendsense-backend
```

### 3️⃣ Install Dependencies

```bash
npm install
```

### 4️⃣ Create `.env` File

Add the following variables:

```env
PORT=5000
DATABASE_URL=your_database_connection_string
JWT_SECRET=your_secret_key
SUPABASE_URL=your_supabase_url
SUPABASE_SERVICE_ROLE_KEY=your_service_key
```

### 5️⃣ Start Server

```bash
npm start
```

Server runs at:

```
http://localhost:5000
```

---

## 🌐 Deployment Link (Render)

👉 https://your-backend-link.onrender.com

---

## 🧪 Testing

You can test APIs using:

* Postman
* Thunder Client (VS Code)
* Browser (for GET routes)

---

## 🔒 Security Practices

* Environment variables used for secrets
* JWT-based authentication
* Password hashing
* CORS protection
* .gitignore configured to prevent secret leaks

---

## 🤖 AI Tools Usage

AI tools such as ChatGPT and GitHub Copilot were used to:

* Assist in debugging
* Improve code structure
* Generate boilerplate code
* Optimize API documentation

Core backend logic and integration were implemented manually.

---

## 🎯 Project Objectives

* Build a complete RESTful API
* Implement secure authentication
* Connect frontend with backend
* Deploy production-ready backend
* Follow scalable architecture practices

---

## 👩‍💻 Author

**Aasmitha Tommandru**
B.Tech Student | Full Stack Developer

---

## 📜 License

This project is developed for academic and learning purposes.

# Backend - I Computers

A RESTful backend API for an e-commerce computer store application, built with Node.js, Express.js, MongoDB, and Mongoose.

This backend provides APIs for managing users and computer products, along with secure authentication and authorization using JSON Web Tokens (JWT).

## 🚀 Features

- User registration and authentication
- JWT-based authentication
- Secure password handling
- User management
- Product management
- Create, read, update, and delete (CRUD) operations for products
- Protected API routes
- MongoDB database integration using Mongoose
- Middleware-based authentication
- RESTful API architecture
- Environment variable configuration

## 🛠️ Technologies Used

- **Node.js** – JavaScript runtime environment
- **Express.js** – Backend web framework
- **MongoDB** – NoSQL database
- **Mongoose** – MongoDB object modeling library
- **JWT** – Authentication and authorization
- **JavaScript** – Programming language
- **dotenv** – Environment variable management

## 📁 Project Structure

```text
Backend-i-computers/
│
├── controllers/
│   ├── productController.js
│   └── userController.js
│
├── lib/
│   └── jwtMiddleware.js
│
├── models/
│   ├── product.js
│   └── user.js
│
├── router/
│   ├── productRouter.js
│   └── userRouter.js
│
├── .gitignore
├── index.js
├── package.json
└── package-lock.json

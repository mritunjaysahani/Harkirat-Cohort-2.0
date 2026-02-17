🎓 Course Selling Platform — Backend API

A production-style backend API for a course selling platform built with Node.js, Express, and MongoDB.
Supports User and Admin roles with JWT authentication, secure password hashing, input validation, and modular routing.

This project demonstrates real-world backend patterns like role-based access control, middleware auth, schema validation, and structured routing.

⚙️ Stack

Node.js + Express

MongoDB + Mongoose

JWT Authentication

bcryptjs (password hashing)

zod (request validation)

dotenv (config management)

Express Router (modular routes)

🔐 Core Capabilities
User

Signup & Login

JWT based authentication

Browse all courses

Purchase courses

View purchased courses

Admin

Admin signup & login

Create courses

Delete courses

Add/update course content

Protected admin-only routes

🧠 Backend Concepts Implemented

Async DB startup flow

Role-based auth (User vs Admin tokens)

Password hashing with salt

Token verification middleware

Request body validation using zod

MongoDB schema relationships

Route modularization using Express Router

Environment-based secrets handling

🗄 Data Models

User

email (unique)

password (hashed)

purchasedCourses[]

Admin

email (unique)

password (hashed)

Course

title

description

price

content

createdBy

Purchase

userId

courseId

timestamp

🛣 API Design
User Routes
POST   /user/signup
POST   /user/login
GET    /user/courses
POST   /user/purchase
GET    /user/purchased

Admin Routes
POST   /admin/signup
POST   /admin/login
POST   /admin/course
DELETE /admin/course/:id
PUT    /admin/course/:id/content


All protected routes use JWT middleware.

🔒 Security Measures

Passwords hashed using bcryptjs

JWT tokens with separate secrets for admin/user

Sensitive configs stored in .env

Input validation with zod schemas

Auth middleware guards protected routes

📁 Project Structure
/models
/routes
/middleware
/config
index.js
.env


Clean separation of concerns for scalability.

🚀 Run Locally
npm install


Create .env:

MONGO_URI=your_uri
JWT_USER_SECRET=xxx
JWT_ADMIN_SECRET=yyy
PORT=3010


Start server:

node index.js

🧪 Suggested Tests

User signup → login → get courses → purchase → view purchased

Admin login → create course → update content → delete

Try protected routes without token → should fail

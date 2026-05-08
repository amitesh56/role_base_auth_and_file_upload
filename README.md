# 🎵 Role Based Music Streaming Backend API

A production-style backend API built with Node.js, Express.js, MongoDB, JWT Authentication, and File Upload handling.

This project implements:

- 🔐 Authentication & Authorization
- 👥 Role-Based Access Control (RBAC)
- 🎵 Music Upload System
- 💽 Album Management
- ☁️ File Storage Service
- 🛡 Protected Routes
- 🗂 Clean Backend Architecture

---

# 🚀 Features

## 🔑 Authentication System
- User Registration
- User Login
- JWT Token Authentication
- Protected Routes

---

## 👮 Role-Based Authorization
- Artist Role Protection
- User Access Control
- Middleware-Based Authorization

---

## 🎵 Music System
- Upload Music Files
- Create Albums
- Fetch All Music
- Fetch All Albums
- Fetch Music By Album

---

## 📁 File Upload Handling
- Multer Memory Storage
- Music File Upload Support
- Storage Service Integration

---

## 🗄 Database Design
- MongoDB with Mongoose
- Schema Relationships
- Album ↔ Music Relationships
- User ↔ Music Relationships

---

# 🛠 Tech Stack

| Technology | Usage |
|---|---|
| Node.js | Runtime Environment |
| Express.js | Backend Framework |
| MongoDB | Database |
| Mongoose | ODM |
| JWT | Authentication |
| Multer | File Upload |
| bcrypt | Password Hashing |

---

# 📂 Project Structure

```bash
role_base_auth/
│
├── src/
│   │
│   ├── controllers/
│   │   ├── auth.controller.js
│   │   └── music.controller.js
│   │
│   ├── db/
│   │   └── db.js
│   │
│   ├── middleware/
│   │   └── auth.middleware.js
│   │
│   ├── models/
│   │   ├── album.model.js
│   │   ├── music.model.js
│   │   └── user.model.js
│   │
│   ├── routes/
│   │   ├── auth.routes.js
│   │   └── music.routes.js
│   │
│   ├── services/
│   │   └── storage.service.js
│   │
│   └── app.js
│
├── .env
├── server.js
├── package.json
├── package-lock.json
└── README.md
```

---

# 🧠 Backend Architecture Flow

```text
Client Request
      ↓
Routes
      ↓
Middleware
(Authentication / Authorization)
      ↓
Controller
      ↓
Services
(File Upload / Storage Logic)
      ↓
Database Models
      ↓
MongoDB
      ↓
Response Returned
```

---

# 🔐 Authentication Flow

```text
User Register/Login
        ↓
Validate Credentials
        ↓
Password Hashing & Verification
        ↓
Generate JWT Token
        ↓
Client Stores Token
        ↓
Protected Routes Verify Token
```

---

# 👮 Authorization Flow

```text
Request
   ↓
JWT Verification
   ↓
Extract User Role
   ↓
Role Middleware Check
   ↓
Access Granted / Denied
```

---

# 🎵 Music Upload Flow

```text
Artist Uploads Music
        ↓
Multer Middleware Processes File
        ↓
Storage Service Uploads File
        ↓
Music Metadata Saved in MongoDB
        ↓
Music Available to Users
```

---

# 💽 Album System Flow

```text
Artist Creates Album
        ↓
Album Stored in Database
        ↓
Music Linked to Album
        ↓
Users Fetch Album Music
```

---

# 🗄 Database Relationship Structure

```text
User
 ├── uploads Music
 └── creates Albums

Album
 └── contains Music

Music
 ├── belongs to Artist
 └── belongs to Album
```

---


# 📮 API Endpoints

# 🔑 Authentication Routes

| Method | Endpoint | Description |
|---|---|---|
| POST | `/register` | Register User |
| POST | `/login` | Login User |

---

# 🎵 Music Routes

| Method | Endpoint | Access |
|---|---|---|
| POST | `/music` | Artist Only |
| POST | `/album` | Artist Only |
| GET | `/` | Authenticated Users |
| GET | `/album` | Authenticated Users |
| GET | `/album/:albumId` | Authenticated Users |

---

# 🔒 Protected Route Example

```http
Authorization: Bearer your_jwt_token
```

---

# 📁 Multer Upload Configuration

```js
const upload = new multer({
    storage: multer.memoryStorage()
});
```

---

# 🧠 Concepts Used

## Backend Concepts
- REST API Design
- MVC Architecture
- Middleware Architecture
- File Upload Handling
- Authentication & Authorization
- Role-Based Access Control

---

## Database Concepts
- MongoDB Relationships
- ObjectId References
- Schema Design
- Data Validation

---

## Security Concepts
- JWT Authentication
- Password Hashing
- Protected Routes
- Authorization Middleware

---

# 📈 Learning Outcome

This project helped me understand:

- How JWT authentication works
- How role-based authorization is implemented
- How middleware controls request flow
- How file uploads work in backend systems
- How MongoDB relationships are designed
- How scalable backend architecture is structured

---

# 👨‍💻 Author

## Amitesh Yadav

Computer Engineering Student passionate about:
- Backend Development
- System Design
- Blockchain
- AI & Emerging Technologies

GitHub:
https://github.com/amitesh56

---

# ⭐ Support

If you liked this project, give it a star on GitHub ⭐

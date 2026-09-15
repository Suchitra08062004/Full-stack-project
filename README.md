# 📝 Simple To-Do App

A simple full-stack To-Do List application built to practice **CRUD operations, REST APIs, frontend-backend communication, and MySQL database integration**.

## 🚀 Features

* ➕ Add new tasks
* 📋 View all tasks
* ✏️ Edit existing tasks
* 🗑️ Delete tasks
* 💾 Store tasks permanently in MySQL
* 🔄 Frontend communication with backend using Fetch API
* 🌐 REST API implementation

## 🛠️ Technologies Used

### Frontend

* HTML5
* CSS3
* JavaScript
* Bootstrap 5

### Backend

* Node.js
* Express.js
* CORS

### Database

* MySQL
* MySQL2 Node.js package

## 📂 Project Structure

```text
todo-app/
│
├── frontend/
│   └── index.html
│
├── backend/
│   └── server.js
│
└── README.md
```

## 🔄 CRUD Operations

| Operation     | HTTP Method | API Endpoint   |
| ------------- | ----------- | -------------- |
| Get all tasks | GET         | `/`            |
| Add task      | POST        | `/add-item`    |
| Edit task     | PUT         | `/edit-item`   |
| Delete task   | DELETE      | `/delete-item` |

## 🗄️ Database Setup

Create a MySQL database:

```sql
CREATE DATABASE todo;
```

Select the database:

```sql
USE todo;
```

Create the `items` table:

```sql
CREATE TABLE items (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    itemDescription VARCHAR(255) NOT NULL
);
```

## ⚙️ Backend Setup

Clone the repository:

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

Navigate to the backend folder:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Start the server:

```bash
node server.js
```

The backend will run on:

```text
http://localhost:3000
```

## 🔐 Database Configuration

Update the MySQL connection details in `server.js` according to your local MySQL setup:

```js
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'YOUR_PASSWORD',
    database: 'todo'
});
```


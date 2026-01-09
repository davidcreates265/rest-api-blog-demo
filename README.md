
# REST API Blog Demo

This project is a simple demonstration of REST API concepts using Node.js and Express.
It showcases how a frontend server can interact with a separate API server to perform
CRUD (Create, Read, Update, Delete) operations.

The project is intentionally kept simple and is meant for learning and demonstration
purposes.

---

## Project Structure

The application consists of **two separate servers**:

### 1️⃣ Frontend / Client Server (Port 3000)
- File: `server.js`
- Responsible for:
  - Rendering pages using **EJS**
  - Handling form submissions
  - Communicating with the API server using **Axios**

### 2️⃣ REST API Server (Port 4000)
- File: `index.js`
- Responsible for:
  - Exposing RESTful endpoints
  - Performing CRUD operations on posts
  - Handling API logic and data

---

## Tech Stack

- Node.js
- Express
- Axios
- EJS
- Nodemon

---

## Features

- RESTful API design
- CRUD operations on posts
- Separation of client and API responsibilities
- Server-side rendering with EJS
- API communication using Axios
- Demonstrates HTTP methods: GET, POST, PATCH, DELETE

---

## Getting Started

### Prerequisites

Make sure you have **Node.js** installed:

```bash
node -v
npm -v


Installation

Clone the repository:

Example: git clone https://github.com/your-username/rest-api-blog-demo.gitShow more lines

Navigate into the project folder:

cd rest-api-blog-demo

Install dependencies:

npm install

Running the Application:

This project requires two servers to run simultaneously.

1. Start the API Server (Port 4000):

npx nodemon index.js

This starts the REST API at "http://localhost:4000"


2. Start the Frontend Server (Port 3000):

Open a new terminal window/tab and run:
npx nodemon server.js`

This starts the frontend server at:
http://localhost:3000


API Endpoints


Purpose of the Project

This project was created to demonstrate how REST APIs work in practice,
including how a frontend application can consume and interact with an API.
It focuses on fundamental concepts such as request handling, routing,
HTTP methods, and data flow between services.

Notes

Data is stored in-memory and will reset when the server restarts.
This project is intended for learning and demonstration, not production use.


Author
David Malunga

---

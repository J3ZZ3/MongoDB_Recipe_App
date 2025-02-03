# Recipe API with Authentication

A secure RESTful API for managing recipes built with Node.js, Express, and MongoDB, featuring JWT authentication and role-based access control.

## Features

- **User authentication (JWT)**: Secure user login and registration using JSON Web Tokens.
- **Role-based authorization (Admin/User)**: Different access levels for users based on their roles.
- **CRUD operations for recipes**: Create, Read, Update, and Delete operations for managing recipes.
- **MongoDB database integration**: Persistent storage of recipes and user data.
- **Input validation**: Ensures that all required fields are provided and valid.
- **Error handling**: Graceful handling of errors with appropriate HTTP status codes and messages.
- **Pagination support**: Efficient retrieval of recipes with pagination.
- **RESTful architecture**: Follows REST principles for API design.

## Prerequisites

Before running this project, make sure you have installed:

- **Node.js** (v14 or higher): JavaScript runtime for building the API.
- **MongoDB**: Database for storing recipes and user data.

## Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/J3ZZ3/MongoDB_Recipe_App
   ```

2. **Install dependencies**:

   Navigate to the project directory and run:

   ```bash
   npm install
   ```

3. **Create a `.env` file in the root directory**:

   This file will store your environment variables. Create a file named `.env` and add the following:

   ```plaintext
   MONGO_URI=your_mongodb_connection_string
   PORT=5000
   JWT_SECRET=your_jwt_secret_key
   JWT_EXPIRE=30d
   ```

   Replace `your_mongodb_connection_string` with your actual MongoDB connection string.

## RECIPE Endpoints

| Method | Endpoint            | Description                     |
|--------|---------------------|---------------------------------|
| GET    | `/api/recipes`      | Get all recipes with pagination |
| GET    | `/api/recipes/:id`  | Get a specific recipe          |
| POST   | `/api/recipes`      | Create a new recipe            |
| PUT    | `/api/recipes/:id`  | Update a recipe                |
| DELETE | `/api/recipes/:id`  | Delete a recipe                |

## AUTH Endpoints

| Method | Endpoint                | Description               |
|--------|-------------------------|---------------------------|
| POST   | `/api/auth/register`    | Register a new user       |
| POST   | `/api/auth/login`       | Login user                |
| GET    | `/api/auth/me`          | Get current user details  |

## Usage Examples

1. **Register a User**

   **Request:**

   ```http
   POST /api/auth/register
   ```

   **Body:**

   ```json
   {
     "name": "John Doe",
     "email": "john@example.com",
     "password": "123456",
     "role": "user"
   }
   ```

2. **Login**

   **Request:**

   ```http
   POST /api/auth/login
   ```

   **Body:**

   ```json
   {
     "email": "john@example.com",
     "password": "123456"
   }
   ```

3. **Create a Recipe**

   **Request:**

   ```http
   POST /api/recipes
   ```

   **Body:**

   ```json
   {
     "title": "Delicious Recipe",
     "description": "A tasty recipe",
     "ingredients": ["ingredient1", "ingredient2"],
     "instructions": "Step 1: ... Step 2: ...",
     "cookingTime": 30,
     "difficulty": "Easy"
   }
   ```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.


 Recipe API with Authentication

A secure RESTful API for managing recipes built with Node.js, Express, and MongoDB, featuring JWT authentication and role-based access control.

** Features

- User authentication (JWT)
- Role-based authorization (Admin/User)
- CRUD operations for recipes
- MongoDB database integration
- Input validation
- Error handling
- Pagination support
- RESTful architecture

** Prerequisites

Before running this project, make sure you have installed:

- Node.js (v14 or higher)
- MongoDB

** Installation

1. Clone the repository:

git clone https://github.com/J3ZZ3/MongoDB_Recipe_App


2. Install dependencies:


npm install


3. Create a `.env` file in the root directory:

.env
MONGO_URI=your_mongodb_connection_string
PORT=5000
JWT_SECRET=your_jwt_secret_key
JWT_EXPIRE=30d


** RECIPE Endpoints
 GET | `/api/recipes` | Get all recipes |

 GET | `/api/recipes/:id` | Get a specific recipe |

 POST | `/api/recipes` | Create a new recipe |

 PUT | `/api/recipes/:id` | Update a recipe |

 DELETE | `/api/recipes/:id` | Delete a recipe |

** AUTH Endpoints

 POST | `/api/auth/register` | Register a new user |

 POST | `/api/auth/login` | Login user |

 GET | `/api/auth/me` | Get current user |

** Usage Examples

 1. Register a User

POST /api/auth/register

{
"name": "John Doe",
"email": "john@example.com",
"password": "123456",
"role": "user"
}

 2. Login

POST /api/auth/login

{
"email": "john@example.com",
"password": "123456"
}

 3. Create a Recipe

POST /api/recipes

{
"title": "Delicious Recipe",
"description": "A tasty recipe",
"ingredients": ["ingredient1", "ingredient2"],
"instructions": "Step 1: ... Step 2: ..."
}


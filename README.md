# Recipe API

A RESTful API for managing recipes built with Node.js, Express, and MongoDB.

## Features

- CRUD operations for recipes
- MongoDB database integration
- Input validation
- Error handling
- Pagination support
- RESTful architecture

## Prerequisites

Before running this project, make sure you have installed:

- Node.js (v14 or higher)
- MongoDB
- npm (Node Package Manager)

## Installation

1. Clone the repository:




2. Install dependencies:


npm install


3. Create a `.env` file in the root directory:

.env
MONGO_URI=your_mongodb_connection_string
PORT=5000


## API Endpoints
 GET | `/api/recipes` | Get all recipes |

 GET | `/api/recipes/:id` | Get a specific recipe |

 POST | `/api/recipes` | Create a new recipe |
 
 PUT | `/api/recipes/:id` | Update a recipe |

 DELETE | `/api/recipes/:id` | Delete a recipe |

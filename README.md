# **Meals On Wheals**

Welcome to the My React Food Order App **Meals On Wheals**! This project is a full-stack food ordering application built using React for the frontend and Express.js for the backend. It allows users to browse a variety of food items, add them to their cart, and place orders.

## Table of Contents
- [Project Overview](#project-overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation and Setup](#installation-and-setup)
- [Running the Application](#running-the-application)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Project Overview
This application provides an interface for users to browse food categories, view detailed information about food items, add items to their cart, and place orders. The backend provides APIs to manage users, authenticate login, and handle orders.

## Features
- **User Authentication:** Sign up and login functionality with secure password storage.
- **Food Browsing:** Browse through a variety of food items categorized into different types.
- **Cart Management:** Add, view, and remove items from the cart.
- **Order Placement:** Checkout and place orders.
- **Responsive Design:** Mobile-friendly design.

## Technologies Used

### Frontend
- React
- React Router
- Bootstrap
- CSS

### Backend
- Express.js
- MongoDB
- Mongoose
- bcryptjs (for password hashing)
- JSON Web Token (JWT) for authentication

## Installation and Setup

### Prerequisites
- Node.js and npm installed on your machine
- MongoDB (local or cloud instance)

### Frontend Setup
1. Clone the repository:
    ```bash
    git clone https://github.com/chaitanyakalra/FoodDeliveryApp
    ```
2. Navigate to the frontend directory:
    ```bash
    cd FoodDeliveryApp
    ```
3. Install dependencies:
    ```bash
    npm install
    ```
4. Start the frontend server:
    ```bash
    npm start
    ```

### Backend Setup
1. Navigate to the backend directory:
    ```bash
    cd FoodDeliveryApp/backend
    ```
2. Install dependencies:
    ```bash
    npm install
    ```
3. Set up your MongoDB connection in a `.env` file:
    ```makefile
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret_key
    ```
4. Start the backend server:
    ```bash
    nodemon index.js
    ```

## Running the Application
1. Ensure both the frontend and backend servers are running.
2. Open your browser and go to `http://localhost:3000` to access the application.

## Usage
- **Sign Up:** Create a new user account.
- **Login:** Access your account.
- **Browse:** View available food items and categories.
- **Add to Cart:** Add items to your shopping cart.
- **Checkout:** Place an order and view your order history.

## Project Structure
- `frontend/`: Contains the React frontend code.
  - `src/`: Source code for React components, styles, and assets.
- `backend/`: Contains the Express backend code.
  - `models/`: Mongoose models for MongoDB collections.
  - `routes/`: API routes for user authentication, food data, and orders.
  - `controllers/`: Controllers handling the business logic.

## Contributing
Contributions are welcome! Please fork the repository and use a feature branch. Pull requests are warmly welcome.

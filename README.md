# Meal Donate

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [API Endpoints](#api-endpoints)
- [Environment Variables](#environment-variables)
- [Contributing](#contributing)
- [License](#license)

## Introduction
Meal Donate is a web application designed to facilitate the donation and distribution of meals. It connects donors and organizations to ensure that surplus food reaches those in need.

## Features
- User authentication and authorization
- Donor and organization dashboards
- Meal donation and distribution management
- Contact form for inquiries
- Error handling with ErrorBoundary

## Technologies Used
### Frontend
- React
- React Router
- Tailwind CSS
- Framer Motion

### Backend
- Node.js
- Express
- MongoDB
- Mongoose
- JWT for authentication

## Installation
### Prerequisites
- Node.js
- MongoDB

### Frontend
1. Navigate to the frontend directory:
    ```bash
    cd frontend
    ```
2. Install dependencies:
    ```bash
    npm install
    ```
3. Start the development server:
    ```bash
    npm run dev
    ```

### Backend
1. Navigate to the backend directory:
    ```bash
    cd backend
    ```
2. Install dependencies:
    ```bash
    npm install
    ```
3. Start the server:
    ```bash
    npm start
    ```

## Usage
1. Open your browser and navigate to `http://localhost:5173` for the frontend.
2. The backend server will be running on `http://localhost:3000`.

## Folder Structure
### Frontend
```
frontend/
├── src/
│   ├── components/
│   ├── context/
│   ├── pages/
│   ├── App.jsx
│   ├── index.jsx
│   └── ...
├── public/
├── package.json
└── ...
```

### Backend
```
backend/
├── src/
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   ├── app.js
│   ├── db.js
│   └── ...
├── .env
├── package.json
└── ...
```

## API Endpoints
### Auth Routes
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login a user

### Donation Routes
- `POST /api/donations` - Create a new donation
- `GET /api/donations` - Get all donations
- `PUT /api/donations/:id/accept` - Accept a donation
- `PUT /api/donations/:id/distribute` - Distribute a donation

### Contact Routes
- `POST /api/contact` - Submit a contact form

### User Routes
- `GET /api/users/:id/stats` - Get user statistics
- `PUT /api/users/:id` - Update user profile

## Environment Variables
Create a `.env` file in the backend directory and add the following:
```properties
PORT=3000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
```

Create a `.env` file in the frontend directory and add the following:
```properties
VITE_BACKEND_URL=your_backend_url
```

## Contributing
Contributions are welcome! Please open an issue or submit a pull request.


# Loomian Legacy Inventory System

## Overview
The Loomian Legacy Inventory System is a full-stack web application that lets users securely manage and track their in-game inventory for the Roblox game Loomian Legacy.  
This project was built to practice backend architecture, authentication, database design, and secure state management using the MERN stack.  
The application replaces client-side storage with a secure backend system using MongoDB and JWT-based authentication.

## Tech Stack

**Frontend**
- React
- JavaScript
- Context API for state management
- Fetch API with credentials support

**Backend**
- Node.js
- Express.js
- MongoDB (Mongoose ODM)
- JWT (JSON Web Tokens)
- HTTP-only cookies for secure authentication
- CORS configuration for cross-origin requests

**Deployment**
- Render (separate frontend and backend services)

## Features

**User Authentication**
- Secure user registration and login
- JWT-based authentication
- HTTP-only cookies to prevent XSS token access
- Protected API routes
- Persistent login sessions

**Inventory Management**
- Add, update, and remove Loomians
- Store inventory securely in MongoDB
- Backend-controlled data access
- User-specific inventory isolation

**Security & Architecture**
- Server-side token verification middleware
- Secure cookie handling with `sameSite` and `secure` settings
- CORS configuration for frontend-backend communication
- Environment variable management for sensitive credentials

## Running Locally

**Backend**
cd backend
npm install
npm run dev

**Frontend**
cd frontend
npm install
npm run dev

**Environmental Variables**
MONGO_URI=
JWT_SECRET=
CLIENT_URL=

🌍 WanderLust – Airbnb-Inspired Full-Stack Web Application

WanderLust is a full-stack Airbnb-like web application built as part of my learning journey into web development.
It allows users to explore travel stays, create their own listings, manage reviews, and interact with the platform through a smooth, responsive interface.
This project focuses on understanding real-world full-stack architecture, authentication, file uploads, database modeling, backend APIs, and deployment workflows.

✅ Features
🔹 Public Features
✅ Browse all listings
✅ View individual listing details
✅ See reviews by other users
✅ View listing owners

🔹 User Features (After Login)
✅ Create a new listing with image upload
✅ Edit or delete your listings
✅ Add reviews on properties
✅ Edit or delete your own reviews
✅ Session-based login/logout
✅ Flash messages for real-time feedback

🔹 Backend & Admin Features
✅ MongoDB Atlas integration
✅ Cloudinary image storage
✅ Server-side validations
✅ Custom error handling middleware
✅ Clean MVC folder structure
✅ Express Router for modular routing

🛠️ Tech Stack
Frontend - 
HTML5, CSS3
Bootstrap
EJS Templating
Font Awesome

Backend - 
Node.js
Express.js
Passport.js for authentication
Joi for input validations
Multer + Cloudinary for image uploads
Express-session + connect-mongo

Database - 
MongoDB Atlas (cloud database)

Deployment - 
Render (free tier)

📁 Project Architecture (MVC)
/models       → Mongoose models (Listings, Users, Reviews)
/views        → EJS templates (UI)
/controllers → Logic for handling requests
/routes       → Organized routes (listings, users, reviews)
/public       → Static assets (CSS, JS)
/utils        → Validation, ExpressError, etc.


Following MVC makes the project scalable, cleaner, and easier to maintain.

🚀 How It Works
1. Listings
Users can add properties with:
Title
Description
Image upload (stored via Cloudinary)
Location & Country
Price

2. Authentication
Signup, Login, Logout
Password hashing using Passport-local-mongoose
Session-based persistent login

3. Reviews System
Each listing supports:
Adding reviews
Editing & deleting reviews
Star ratings
Reviews are linked to users and listings via MongoDB relationships.

4. Protection & Authorizations
Only logged-in users can create listings
Only listing owners can edit/delete listings
Only review owners can modify reviews
All routes are protected using custom middlewares.

5. Deployment Setup
Environment variables stored securely
MongoDB Atlas database connection
Render used to host the Node.js server
Cloudinary used for storing images

🧠 Learning Outcomes
This project helped me understand:
Full-stack development workflow
REST APIs
MVC architecture
Authentication & session handling
Database relationships
Deployment & environment management
Error handling in Express
Working with cloud storage (Cloudinary)

💡 Future Improvements
Add map integration (Mapbox / Leaflet)
Add wishlist / favorites
Implement pagination
Add filters & categories
Improve mobile responsiveness

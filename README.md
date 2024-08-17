Grievance Website

This is a comprehensive grievance website that allows users to submit grievances and track their status. It includes user authentication and an intuitive form for grievance submission. The website is designed to be modern and responsive, ensuring a great user experience across devices.

Features
User Authentication: Secure registration and login functionality.
Grievance Submission: An easy-to-use form for submitting grievances, including fields for grievance type, description, and supporting documents.
Responsive Design: A visually appealing and responsive layout that works well on desktop, tablet, and mobile devices.
Data Encryption: User data, including passwords and personal information, is securely encrypted.

Setup instructions Frontend

Navigate to the project directory: cd [frontend-project-directory]
Install dependencies: npm install

Setup instructions Backend

Navigate to the backend directory: cd [backend-project-directory]
Install dependencies: npm install

Set up environment variables:
Create a .env file with the following content:
DB_HOST=localhost
DB_PORT=5432
DB_USER=your-username
DB_PASS=your-password
DB_NAME=your-database-name

Database Setup and Configuration
PostgreSQL Database
Users Table
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(100),
    grievance TEXT
);

Creating the Database and Table
Install PostgreSQL: Ensure PostgreSQL is installed and running on your system.
Create the Database: Use pgAdmin or the PostgreSQL command line to create a new database.
Create the Table: Execute the SQL command above to set up the users table

Running the Application Frontend:
To run the frontend development server:
npm run build
npm start

Running the Application Backend:
To start the backend server: nodemon server.js


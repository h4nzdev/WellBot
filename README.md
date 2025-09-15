# MedConnect: Patient-Clinic Management System

MedConnect is a comprehensive web application designed to streamline the interaction between patients and clinics. It provides a seamless platform for managing appointments, medical records, and communication, enhancing the overall healthcare experience.

## Features

### For Patients:
- **Appointment Management:** Schedule, track, and manage appointments with clinics.
- **Medical Records:** Access and manage your medical history and records in one place.
- **Secure Communication:** Communicate securely with healthcare providers.
- **Reminders:** Set and receive reminders for appointments and medications.

### For Clinics:
- **Appointment Scheduling:** Manage and organize patient appointments efficiently.
- **Patient Management:** Maintain and access patient information and medical records.
- **Doctor Management:** Add and manage doctor profiles and schedules.
- **Secure Messaging:** Communicate with patients through a secure messaging system.

## Tech Stack

### Frontend
- React
- Vite
- React Router
- Tailwind CSS
- Context API for state management

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- JSON Web Tokens (JWT) for authentication

## Getting Started

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. **Backend Setup:**
   ```bash
   cd backend
   npm install
   ```
   Create a `.env` file in the `backend` directory and add the following environment variables:
   ```
   MONGO_URI=<your_mongodb_connection_string>
   JWT_SECRET=<your_jwt_secret>
   ```
   Start the backend server:
   ```bash
   npm start
   ```

3. **Frontend Setup:**
   ```bash
   cd frontend
   npm install
   ```
   Start the frontend development server:
   ```bash
   npm run dev
   ```

## Usage

Once both the backend and frontend servers are running, you can access the application in your web browser at `http://localhost:5173` (or the port specified by Vite).

- **Register/Login:** Create a new account or log in as a patient or a clinic.
- **Dashboard:** Access the main dashboard to view appointments, messages, and other relevant information.
- **Navigate:** Use the sidebar to navigate through the different sections of the application.

# WellBot+

A comprehensive healthcare management platform for clinics and patients. It allows clinics to manage doctors, patients, and appointments. Patients can view their medical records, book appointments, and interact with an AI chatbot for preliminary assistance.

## Features

### For Clinics
- Dashboard with analytics.
- Manage doctors and patients.
- View and manage appointments.
- Access patient medical records.

### For Patients
- Dashboard with overview.
- Book and view appointments.
- Access personal medical records.
- Get reminders.
- AI Chat for assistance.
- User profile page.

## Technologies Used

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
   # Create a .env file and add environment variables like MONGO_URI and JWT_SECRET
   npm start
   ```

3. **Frontend Setup:**
   ```bash
   cd frontend
   npm install
   npm run dev
   ```
